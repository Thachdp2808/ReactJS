import DashboardTab from "./DashboardTab";
import { SubTab } from "@src/constants/shop.constants";
import { BookIcon } from "@src/icons/BookIcon";
import { GiftIcon } from "@src/icons/GiftIcon";
import { HeartIcon } from "@src/icons/HeartIcon";
import { UserIcon } from "@src/icons/UserIcon";
import { useNavigationStore } from "@src/stores/useNavigationStore";
import UserInformation from "./UserInformation";
import { googleLogout } from '@react-oauth/google';
import { LogoutIcon } from "@src/icons/LogoutIcon";


export default function UserContainer() {
  const { subTabId, setSubTabId } = useNavigationStore();
  const onHandleSetTab = (subTab: SubTab) => {
    setSubTabId(subTab);
  };
  const onHandleLogout = () => {
    googleLogout();
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div className="flex flex-col m-16 md:flex-row ">
      <div className="shadow-3xl relative">
        <p className="justify-center text-base font-bold px-16 py-8">
          ACCOUNT DASHBOARD
        </p>
        <ul >
          <DashboardTab
            key={"Information"}
            text="Dashboard"
            icon={<UserIcon />}
            isActive={subTabId === SubTab.Information}
            onClick={() => onHandleSetTab(SubTab.Information)}
          />
          <DashboardTab
            key={"Address"}
            text="Address Book"
            icon={<BookIcon />}
            isActive={subTabId === SubTab.AddressBook}
            onClick={() => onHandleSetTab(SubTab.AddressBook)}
          />
          <DashboardTab
            key={"Orders"}
            text="My Orders"
            icon={<GiftIcon />}
            isActive={subTabId === SubTab.Orders}
            onClick={() => onHandleSetTab(SubTab.Orders)}
          />
          <DashboardTab
            key={"Favorites"}
            text="My Favorites"
            icon={<HeartIcon />}
            isActive={subTabId === SubTab.Favorite}
            onClick={() => onHandleSetTab(SubTab.Favorite)}
          />
        </ul>
        <div className="flex gap-2 justify-center items-center absolute bottom-0 right-0 left-0 mb-8">
            <LogoutIcon/>
            <button onClick={onHandleLogout} className="text-primary-1">SIGN OUT</button>
        </div>
      </div>
      {subTabId === SubTab.Information && <UserInformation/>}
    </div>
  );
}
