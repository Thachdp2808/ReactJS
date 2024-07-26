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
  const clientId =" import.meta.env.VITE_GOOGLE_CLIENT_ID";
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
