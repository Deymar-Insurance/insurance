import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <Services />
      <Testimonials />
    </>
  );
}

export default App;
