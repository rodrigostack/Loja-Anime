
import './App.css';
import Header from './header/header'
import Navbar from './navbar/Navbar'
import Carousel from './carousel/carousel'
import Destaque from './destaques/destaque'
import Footer from './footer/footer'
import Routes from './routers'

import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header/>
        <Navbar/>
        <Routes/>
      </HashRouter>
    </div>
  );
}

export default App;
