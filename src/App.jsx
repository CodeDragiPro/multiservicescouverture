import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/404';
import Login from './pages/Login';
import Dashboard from './admin/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import DashboardGallery from './admin/DashboardGallery';
import DashboardTestimonials from './admin/DashboardTestimonials';
import { ToastContainer } from 'react-toastify'; // Import correct
import 'react-toastify/dist/ReactToastify.css'; // N'oubliez pas les styles pour Toastify
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <div className='font-sans text-sans'>
      <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        
        {/* Ajoutez le ToastContainer ici pour les notifications */}
        <ToastContainer />

        <div className=''>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/gallery"
              element={
                <PrivateRoute>
                  <DashboardGallery />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/comments"
              element={
                <PrivateRoute>
                  <DashboardTestimonials />
                </PrivateRoute>
              }
            />
            {/* Ajoutez ici d'autres routes si nécessaire */}
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
