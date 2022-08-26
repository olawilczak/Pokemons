import './App.css';
import Logo from './Logo'
import Favourities from './Favourities'
import Login from './Login'
import Registration from './Registration'
import Edition from './Edition'
import LogOut from './LogOut'
import Search from './Search'
import Arena from './Arena';



function App() {
  return (
    <div className="App">
        <div className="App-navigation">
        <Logo/>
        </div>
        <div className="App-buttons">
        <Favourities/>
        <Arena/>
        <Login/>
        <Registration/>
        <Edition/>
        <LogOut/>
        </div>
      <div className="App-another">
      <Search/>
      </div>
    </div>
  );
}

export default App;

