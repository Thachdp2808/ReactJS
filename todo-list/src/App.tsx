import { useEffect, useState } from 'react';
import './App.css';
import { Pencil, Trash } from 'lucide-react';

const list = [
  {
    id: 1,
    title: 'Learn ReactJS',
    done: false,
  },
  {
    id: 2,
    title: 'Practice ReactJS',
    done: false,
  },
  {
    id: 3,
    title: 'Learn Redux',
    done: true,
  },
  {
    id: 4,
    title: 'Learn TypeScript',
    done: false,
  },
];

function App() {
  const [todoList, setTodoList] = useState(list);
  const [inputValue, setInputValue] = useState('');
  const [filteredTodoList, setFilteredTodoList] = useState(todoList);
  const [editId, setEditId] = useState(0);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    setFilteredTodoList(todoList);
  }, [todoList]);

  //Filter new list. If item.id === id then remove it from the list
  const handleDelete = (id: number) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };

  //Filter new list. If item.id === id then change done to !done
  const handleDone = (id: number) => {
    const newTodoList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setTodoList(newTodoList);
  };

  const handleAdd = () => {
    //Add new item to the list
    const newTodoList = [
      ...todoList,
      {
        id: todoList.length + 1,
        title: inputValue,
        done: false,
      },
    ];
    setTodoList(newTodoList);
    setInputValue('');
  };

  const handleEdit = (id: number) => {
    const newTodoList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, title: editText }; // Use editText for the updated title
      }
      return item;
    });
    setTodoList(newTodoList);
    setEditId(0); // Exit edit mode
    setEditText(''); // Clear the edit text
  };

  const handleFilter = (type: string) => {
    if (type === 'all') {
      setFilteredTodoList(todoList);
    } else if (type === 'done') {
      const newTodoList = todoList.filter((item) => item.done === true);
      setFilteredTodoList(newTodoList);
    } else if (type === 'todo') {
      const newTodoList = todoList.filter((item) => item.done === false);
      setFilteredTodoList(newTodoList);
    }
  };

  return (
    <div className='app'>
      <div className='header'>
        <p>TODO INPUT</p>
        <div className='todo-input'>
          <input
            type='text'
            alt='todo'
            name='todo'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type='submit' onClick={() => handleAdd()}>
            ADD
          </button>
        </div>
      </div>

      <div className='todo-list'>
        <p>TODO LIST</p>
        <div className='todo-list-filter'>
          <button onClick={() => handleFilter('all')}>ALL</button>
          <button onClick={() => handleFilter('done')}>Done</button>
          <button onClick={() => handleFilter('todo')}>Todo</button>
        </div>
        <div className='todo-list-item'>
          {filteredTodoList.map((item) => (
            <>
              <div key={item.id} className='todo-item'>
              {editId === item.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onBlur={() => handleEdit(item.id)}
                  autoFocus
                />
              ) : (
                <span>{item.title}</span>
              )}
                <div className='todo-item-action'>
                  <input
                    type='checkbox'
                    checked={item.done}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleDone(item.id)}
                  />
                  <Pencil size={16} style={{ cursor: 'pointer' }}onClick={() => {
          setEditId(item.id); // Enter edit mode
          setEditText(item.title); // Pre-fill with current title
        }} />
                  <Trash
                    size={16}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleDelete(item.id)}
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
