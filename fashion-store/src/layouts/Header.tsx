import { TabType } from "@src/constants/shop.constants";
import { SafariIcon } from "@src/icons/SafariIcon";
import { Input, Flex } from "antd";
import { UserIcon } from "@src/icons/UserIcon";
import { CartIcon } from "@src/icons/CartIcon";
import { HeartIcon } from "@src/icons/HeartIcon";
import MenuTab from "./MenuTab";
import { useNavigationStore } from "@src/stores/useNavigationStore";
const { Search } = Input;
export default function Header() {
  const { tabId, setTabId } = useNavigationStore();
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const onHandleSetTab = (tabType: TabType) => {
    setTabId(tabType);
  };
  return (
    <>
      <Flex align="center" justify="space-between" className="w-full h-20 px-36 py-7 ">
        <Flex className="gap-5 text-sm font-medium">
          <MenuTab
            id="Home"
            isActive={tabId == TabType.Home}
            text="Home"
            onClick={() => onHandleSetTab(TabType.Home)}
          />
          <MenuTab
            id="Clothes"
            isActive={tabId == TabType.Clothes}
            text="Clothes"
            onClick={() => onHandleSetTab(TabType.Clothes)}
          />
          <MenuTab
            id="Shoes"
            isActive={tabId == TabType.Shoes}
            text="Shoes"
            onClick={() => onHandleSetTab(TabType.Shoes)}
          />
          <MenuTab
            id="Accessories"
            isActive={tabId == TabType.Accessories}
            text="Accessories"
            onClick={() => onHandleSetTab(TabType.Accessories)}
          />
        </Flex>
        <SafariIcon />
        <Flex className="flex gap-8 text-sm font-medium items-center">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
          <UserIcon />
          <CartIcon />
          <HeartIcon />
        </Flex>
      </Flex>
    </>
  );
}
