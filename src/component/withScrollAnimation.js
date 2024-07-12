import React from 'react';
import { useLocation } from 'react-router-dom';

const withScrollAnimations = (WrappedComponent) => {
  return (props) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return <WrappedComponent {...props} isHomePage={isHomePage} />;
  };
};

export default withScrollAnimations;
