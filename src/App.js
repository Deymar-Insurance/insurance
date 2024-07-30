import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Services />
                            <Testimonials />
                            <AboutUs />
                            <Contacts />
                            <Footer />
                        </>
                    }
                />
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            </Routes>
        </Router>
    );
}

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/Navbar';
// import Header from './components/Header';
// import AboutUs from './components/AboutUs';
// import Services from './components/Services';
// import Testimonials from './components/Testimonials';
// import Contacts from './components/Contacts';
// import PrivacyPolicy from './components/PrivacyPolicy';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Header />
//       <Services />
//       <Testimonials />
//       <AboutUs />
//       <Contacts />
//       <Footer />
//     </Router>
//   );
// }


// function App() {
//   return (
//     <>
//       <Navbar />
//       <Header />
//       <Services />
//       <Testimonials />
//       <AboutUs />
//       <Contacts />
//       <Footer />
//     </>
//   );
// }

