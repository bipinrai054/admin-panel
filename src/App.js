import './App.css';
import Sidebar from './component/sidebar/Sidebar';
import TopBar from './component/TopBar';
import Home from './pages/home/Home';

const App = () => {
  return (
    <div>
      <TopBar />
      <div className='container'>
        <Sidebar />
        <Home />
      </div>
    </div>
  );
};

export default App;
