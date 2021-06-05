import logo from './logo.svg';
import './App.css';
import Header from './header/header'
import Navbar from './navbar/Navbar'
import Carousel from './carousel/carousel'
import Destaque from './destaques/destaque'

function App() {
  return (
    <div className="App">
        <Header/>
        <Navbar/>
        <Carousel/>
        <Destaque/>
    </div>
  );
}

export default App;
