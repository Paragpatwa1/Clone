
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HeroSubSection from './components/HeroSubSection';
import About from './components/About';
import Frame from './components/Frame';
import Contactus from './components/Contactus';
function App() {
  return (
    <div className="App">
     <Header/>
     <HeroSection/>
     <HeroSubSection/>
     <About/>
     <Frame/>
    <Contactus/>
    </div>
  );
}

export default App;
