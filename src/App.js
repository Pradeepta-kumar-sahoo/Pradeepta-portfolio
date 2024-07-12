import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/home/Home';
import Myexpertise from './component/home/landingpage/expertise/Myexpertise';
import Myskill from './component/navbar/myproject/myskill/Myskill';
import Contact from './component/navbar/myproject/myskill/contact/Contact';
import Navbar from './component/navbar/Navbar';
import Footer from './component/navbar/myproject/myskill/contact/footer/Footer';
import MyProject from './component/navbar/myproject/Myproject';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myexpertise" element={<Myexpertise />} />
          <Route path="/myproject" element={<MyProject />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/myskill" element={<Myskill />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
