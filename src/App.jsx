
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './component/Header';
import LoginModal from './component/LoginModal';
import Footer from './component/Footer';
import Home from './page/Home';
import Product from './page/Product';
import About from './page/About';
import Contact from './page/Contact';
import WishList from './page/WishList';
import Checkout from './page/Checkout';
import AddCart from './page/AddCart';
import Profile from './page/Profile';
import OrderHistory from './page/OrderHistory';
import DeleteAccount from './page/DeleteAccount';
import SignUp from './page/SignUp';
import Login from './page/Login';

const AppContent = () => {
  const location = useLocation();

  // Hide Header and Footer on Login and SignUp pages (case-insensitive)
  const hideHeaderFooter = ['/login', '/signup'].includes(location.pathname.toLowerCase());

  return (
    <div className="flex flex-col min-h-screen">
      {!hideHeaderFooter && <Header />}
       <LoginModal/>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/WishList" element={<WishList />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/AddCart" element={<AddCart />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/OrderHistory" element={<OrderHistory />} />
          <Route path="/DeleteAccount" element={<DeleteAccount />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </main>
      
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
