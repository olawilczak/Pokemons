import './App.css';
import Logo from './Logo'
import Favourities from './Favourities'
import Login from './Login'
import Registration from './Registration'
import Edition from './Edition'
import LogOut from './LogOut'
import Pokemons from './Pokemons'
import Search from './Search'



function App() {
  return (
    <div className="App">
      <div className="App-head">
      <div className="App-navigation">
      <Logo/>
      </div>
      <div className="App-buttons">
      <Favourities/>
      <Login/>
      <Registration/>
      <Edition/>
      <LogOut/>
      </div>
      </div>
      <Search/>
      <Pokemons/>
      
    </div>
  );
}

export default App;

