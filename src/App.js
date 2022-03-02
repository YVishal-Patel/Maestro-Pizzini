// import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import './App.css'
import About from './components/About';
import Shop from './components/Shop';
import Menu from './components/Menu';
import Client from './components/Client';
import Prices from './components/Prices';

function App(){
  return( <>
  <Header />
  <About />
  <Shop /> 
<Menu /> 
  <Client />
  <Prices />
</>
  )
}
export default App;