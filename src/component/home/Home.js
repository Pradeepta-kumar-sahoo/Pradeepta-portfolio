import React, { useEffect } from 'react';
import MyProject from "../navbar/myproject/Myproject"
import Myexpertise from "../home/landingpage/expertise/Myexpertise"
import Contact from "../navbar/myproject/myskill/contact/Contact"
import Myskill from "../navbar/myproject/myskill/Myskill"
import Landingpage from "../home/landingpage/Landingpage"
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const scrollY = window.scrollY;
    sessionStorage.setItem('scrollPosition', scrollY.toString());

    return () => {
      const savedScrollY = parseInt(sessionStorage.getItem('scrollPosition') || '0', 100);
      window.scrollTo(0, savedScrollY);
    };
  }, []);

  return (
    <div className="home-container">
      <Landingpage/>
      <Myexpertise isHomePage={isHomePage} />
      <MyProject isHomePage={isHomePage} />
      <Myskill/>
      <Contact isHomePage={isHomePage}/>
    </div>
  );
};

export default Home;
