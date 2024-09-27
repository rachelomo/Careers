import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TechNologies from './components/pages/TechNologies';
import Start from './components/pages/Start';
import Careers from './components/pages/Careers';
import Work from './components/pages/Work';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

// App Component
const App = () => {
  const location = useLocation(); // to track the current route

  // Update document title dynamically based on route
  useEffect(() => {
    const routeName = location.pathname.slice(1); // Get route name (removing '/')
    const formattedRouteName = routeName.charAt(0).toUpperCase() + routeName.slice(1); // Capitalize first letter
    document.title = `AppName - ${formattedRouteName || 'Home'}`; // Default to 'Home' if on root
  }, [location]); // Run this effect whenever location changes

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TechNologies />} />
        <Route path="/Technologies" element={<TechNologies />} />
        <Route path="/Start" element={<Start />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

// Wrapping the App with BrowserRouter
const MainApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default MainApp;
