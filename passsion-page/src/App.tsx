import './App.css';
import HomeContainer from './modules/HomeContainer';
import Header from './layouts/Header';
import { useNavigationStore } from './stores/useNavigationStore';
import { TabType } from './constants/shop.constants';
import Footer from './layouts/Footer';

function App() {
  const { tabId } = useNavigationStore();
  return (
    <div className='py-10 px-20'>
      <Header />
      {tabId === TabType.Home && <HomeContainer />}
      <Footer />
    </div>
  );
}

export default App;
