import "./App.css";
import HomeContainer from "./modules/HomeContainer";
import ClothesContainer from "./modules/ClothesContainer";
import Header from "./layouts/Header";
import { useNavigationStore } from "./stores/useNavigationStore";
import { TabType } from "./constants/shop.constants";
function App() {
  const { tabId } = useNavigationStore();
  return (
    <>
    <Header/>
     {tabId === TabType.Home && <HomeContainer />}
     {tabId === TabType.Clothes && <ClothesContainer />}
    </>
  );
}

export default App;
