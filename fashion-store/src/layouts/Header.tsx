import { TabType } from "@src/constants/shop.constants";
import { SafariIcon } from "@src/icons/SafariIcon";
import { UserIcon } from "@src/icons/UserIcon";
import { CartIcon } from "@src/icons/CartIcon";
import { HeartIcon } from "@src/icons/HeartIcon";
import IconTab from "./IconTab";
import MenuTab from "./MenuTab";
import { useNavigationStore } from "@src/stores/useNavigationStore";
import { MultiIcon } from "@src/icons/MultiIcon";
import { SearchIcon } from "@src/icons/SearchIcon";
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
    { id: TabType.Home, text: "Home" },
    { id: TabType.Clothes, text: "Clothes" },
    { id: TabType.Shoes, text: "Shoes" },
    { id: TabType.Accessories, text: "Accessories" },
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
    <>
      <div className="flex bg-primary-4 justify-between items-center h-20 px-10 lg:px-36 py-7 md:flex-row md:w-full">
        <MultiIcon
          width={24}
          height={24}
          className="lg:hidden cursor-pointer relative"
          onClick={onHandleMultiSelect}
        />

        <ul className=" hidden lg:flex-row lg:flex lg:gap-5 lg:text-sm lg:font-medium">
          {renderMenuTabs()}
        </ul>

        {multiSelect && (
          <div className="bg-white w-1/3 h-300px absolute z-20 mt-[190px] ml-10 md:mt-[120px] lg:hidden ">
            <ul>{renderMenuTabs()}</ul>
          </div>
        )}

        <SafariIcon className="ml-[20px]" />
        <div className="flex md:gap-8 text-sm font-medium items-center gap-4">
          <div className="hidden lg:flex lg:items-center lg:gap-2">
            <input
              className=" border-b-[1px] border-b-primary-5 bg-inherit"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchIcon
              className="cursor-pointer"
              onClick={() => onHandleSearch()}
            />
          </div>
          <IconTab
            key="Account"
            isActive={tabId == TabType.Account}
            icon={<UserIcon />}
            onClick={() => onHandleSetTab(TabType.Account)}
          />
          <IconTab
            key="Cart"
            isActive={tabId == TabType.Cart}
            icon={<CartIcon />}
            onClick={() => onHandleSetTab(TabType.Cart)}
          />
          <IconTab
            key="Favorite"
            isActive={tabId == TabType.Favorite}
            icon={<HeartIcon />}
            onClick={() => onHandleSetTab(TabType.Favorite)}
          />
        </div>
      </div>
    </>
  );
}
