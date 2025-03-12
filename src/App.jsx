import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import LoadingScreen from './pages/LoadingScreen';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTop from './pages/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const TourPackage = lazy(() => import('./pages/TourPackage'));
const Destinations = lazy(() => import('./pages/Destinations'));
const Blogs = lazy(() => import('./pages/Blogs'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); 
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <ScrollToTop />
          <Navbar />

          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/tourpackage" element={<TourPackage />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>

          <ScrollToTopButton />
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
