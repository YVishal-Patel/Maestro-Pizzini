// import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import './App.css'
import About from './components/About';
import Shop from './components/Shop';
import Menu from './components/Menu';


function App(){
  return( <>
  <Header />
  <About />
  <Shop /> 
<Menu /> 
</>
  )
}
export default App;