import "./App.css";
import HomeContainer from "./modules/HomeContainer";
import ClothesContainer from "./modules/ClothesContainer";
import Header from "./layouts/Header";
import { useNavigationStore } from "./stores/useNavigationStore";
import { TabType } from "./constants/shop.constants";
import Footer from "./layouts/Footer";
import AccountContainer from "./modules/AccountContainer";
import { GoogleOAuthProvider } from "@react-oauth/google";
import UserContainer from "./modules/UserContainer";

function App() {
  const { tabId } = useNavigationStore();
  const accessToken = localStorage.getItem("accessToken");
  const clientId = "894787355762-f4mavam9if2i84ipggjoqtecbn77le33.apps.googleusercontent.com";
  console.log(clientId);
  return (
    <>
      <Header />
      {tabId === TabType.Home && <HomeContainer />}
      {tabId === TabType.Clothes && <ClothesContainer />}
      {tabId === TabType.Account && (
        <GoogleOAuthProvider clientId={clientId}>
          {accessToken ?<UserContainer/>: <AccountContainer />}
        </GoogleOAuthProvider>
      )}
      <Footer />
    </>
  );
}

export default App;
