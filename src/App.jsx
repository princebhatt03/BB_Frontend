import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Pages
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import AdminRegister from './pages/admin/AdminRegister';
import AdminLogin from './pages/admin/AdminLogin';
import AdminHome from './pages/admin/AdminHome';
import Patient from './pages/user/Patient';
import Donar from './pages/user/Donar';
import About from './pages/AboutUS';
import Terms from './pages/Terms';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/products"
            element={<ProductsPage />}
          />
          <Route
            path="/testimonials"
            element={<TestimonialsPage />}
          />
          <Route
            path="/adminHome"
            element={
              <ProtectedRoute>
                <AdminHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/adminRegister"
            element={<AdminRegister />}
          />
          <Route
            path="/adminLogin"
            element={<AdminLogin />}
          />
          <Route
            path="/donar"
            element={<Donar />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/patient"
            element={<Patient />}
          />
          <Route
            path="/terms"
            element={<Terms />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
