import { TabType } from '@src/constants/shop.constants';
import { SafariIcon } from '@src/icons/SafariIcon';
import { UserIcon } from '@src/icons/UserIcon';
import { CartIcon } from '@src/icons/CartIcon';
import { HeartIcon } from '@src/icons/HeartIcon';
import IconTab from './IconTab';
import MenuTab from './MenuTab';
import { useNavigationStore } from '@src/stores/useNavigationStore';
import { MultiIcon } from '@src/icons/MultiIcon';
import { SearchIcon } from '@src/icons/SearchIcon';
export default function Header() {
  const { tabId, setTabId, setSearch, search, multiSelect, setMultiSelect } =
    useNavigationStore();
  const onHandleSearch = () => {
    console.log(search);
  };
  const onHandleMultiSelect = () => {
    setMultiSelect(!multiSelect);
  };
  const onHandleSetTab = (tabType: TabType) => {
    setTabId(tabType);
    setMultiSelect(false);
  };
  const menuItems = [
    { id: TabType.Home, text: 'Home' },
    { id: TabType.Clothes, text: 'Clothes' },
    { id: TabType.Shoes, text: 'Shoes' },
    { id: TabType.Accessories, text: 'Accessories' },
  ];

  const renderMenuTabs = () =>
    menuItems.map((item) => (
      <MenuTab
        key={item.text}
        isActive={tabId === item.id}
        text={item.text}
        onClick={() => onHandleSetTab(item.id)}
      />
    ));
  return (
    <div className='bg-white flex w-full items-center justify-between'>
      <img src='./public/Rauliqbal.svg' />
      <div>
        <ul className='md:flex gap-11 text-2xl justify-center items-center tracking-wider hidden'>
          <a href='/google.com'>About</a>
          <a href=''>Passions</a>
          <a href=''>Portfolio</a>
          <a href='' className='text-white bg-primary-1 py-2 px-4 rounded-xl'>
            Contact Me
          </a>
        </ul>
        <img src='/menu-icon.svg' className='md:hidden' />
      </div>
    </div>
  );
}
