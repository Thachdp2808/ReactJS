import { useEffect, useState } from 'react';
import './App.css';

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
  const [listTodo, setListTodo] = useState([]);

  return (
    <div className='app'>
      <div className='header'>
        <p>TODO INPUT</p>
        <div className='todo-input'>
          <input type='text' alt='todo' />
          <button type='submit'>ADD</button>
        </div>
      </div>

      <div className='todo-list'>
        <p>TODO LIST</p>
        <div className='todo-list-filter'>
          <button>ALL</button>
          <button>Done</button>
          <button>Todo</button>
        </div>
        <div className='todo-list-item'>
          {list.map((item) => (
            <>
              <div key={item.id} className='todo-item'>
                <span>{item.title}</span>

                {/* <button>DELETE</button> */}
              </div>
              <div className='todo-item-action'>
                <input type='checkbox' checked={item.done} />
                <input type='checkbox' checked={item.done} />
                <input type='checkbox' checked={item.done} />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
