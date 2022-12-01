import './App.css';
import Logo from './Logo'
import Favourities from './Favourities'
import Login from './Login/Login'
import Registration from './Registration/Registration'
import Edition from './Edition'
import LogOut from './LogOut'
import Search from './Search'
import Arena from './Arena'
import Pokemons from './Pokemons'
import Formula from './Registration/Formula';
import FormulaLogo from './Login/FormulaLogo';



function App() {
  return (
    <div className="App">
      <div className='Menu'>
        <div className="App-navigation">
        <Logo/>
        </div>
        <div className="App-buttons">
        <Favourities/>
        <Arena/>
        <Login/>
        <Registration/>
        <Edition/>
        <FormulaLogo/>
        <LogOut/>
        </div>
        </div>
      <div className="App-another">
      <Search/>
      </div>
      <div className="App-pokemons">
      <Pokemons/>
      </div>
    </div>
  );
}

export default App;

