
import './App.css';
import Header from './header/header'
import Navbar from './navbar/Navbar'
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
