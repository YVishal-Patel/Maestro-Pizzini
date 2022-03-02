import Header from './components/Header';
import './App.css'
import About from './components/About';
import Shop from './components/Shop';
import Menu from './components/Menu';
import Client from './components/Client';
import Prices from './components/Prices';
import Footer from './components/Footer';

function App(){
  return( <>
  <Header />
  <About />
  <Shop /> 
<Menu /> 
  <Client />
  <Prices />
  <Footer />
</>
  )
}
export default App;