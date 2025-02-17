import './App.css';
import HomeContainer from './modules/HomeContainer';
import Header from './layouts/Header';
import { useNavigationStore } from './stores/useNavigationStore';
import { TabType } from './constants/shop.constants';
import Footer from './layouts/Footer';

function App() {
  const { tabId } = useNavigationStore();
  return (
    <>
      <div className='md:py-10 md:px-20 p-5'>
        <Header />
        {tabId === TabType.Home && <HomeContainer />}
      </div>
      <Footer />
    </>
  );
}

export default App;
