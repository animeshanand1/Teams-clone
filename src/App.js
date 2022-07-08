
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import LeftFold from './components/LeftFold/LeftFold';
import RightFold from './components/RightFold/RightFold';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <div className='sidebar'><Sidebar /></div>
        <div className='left-fold'><LeftFold /></div>
        <div className='right-fold'><RightFold /></div>
      
      </div>
      
    </div>
  );
}

export default App;
