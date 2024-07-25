import "./App.css";
import HomeContainer from "./modules/HomeContainer";
import ClothesContainer from "./modules/ClothesContainer";
import Header from "./layouts/Header";
import { useNavigationStore } from "./stores/useNavigationStore";
import { TabType } from "./constants/shop.constants";
import Footer from "./layouts/Footer";
import AccountContainer from "./modules/AccountContainer";
function App() {
  const { tabId } = useNavigationStore();
  return (
    <>
    <Header/>
      {tabId === TabType.Home && <HomeContainer />}
      {tabId === TabType.Clothes && <ClothesContainer />}
      {tabId === TabType.Account && <AccountContainer />}
    <Footer/>
    </>
  );
}

export default App;
