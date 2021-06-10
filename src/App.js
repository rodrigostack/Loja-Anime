
import './App.css';
import Header from './header/header'
import Navbar from './navbar/Navbar'
import Carousel from './carousel/carousel'
import Destaque from './destaques/destaque'
import Footer from './footer/footer'

function App() {
  return (
    <div className="App">
        <Header/>
        <Navbar/>
        <Carousel/>
        <Destaque/>
        <Footer/>
    </div>
  );
}

export default App;
