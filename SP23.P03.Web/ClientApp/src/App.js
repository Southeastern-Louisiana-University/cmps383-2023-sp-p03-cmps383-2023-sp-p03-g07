import './App.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

// import PayPal components
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

// import Desktop/Laptop components
import Navbar from './Components/NavBar/Navbar.js';
import Banner from './Components/Banner/Banner.js';
import Footer from './Components/Footer/Footer.js';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

// import Mobile/Tablet components
import DropdownMobile from './Components/Mobile/DropdownMobile/DropdownMobile.js';
import BannerMobile from './Components/Mobile/BannerMobile/BannerMobile.js';

// import routing from Animated Routes
import AnimatedRoutes from './Components/AnimatedRoutes/AnimatedRoutes';

function App() {

  const isDesktopLaptop = useMediaQuery({ query: '(min-width: 900px)'});
  const isTabletMobile = useMediaQuery({ query: '(max-width: 900px)' });

  return (
    <PayPalScriptProvider 
      options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
    >
      <div className="app-container">
        <ScrollToTop />
        <body className="app-body">
          {isDesktopLaptop && <Banner />}
          {isTabletMobile && <BannerMobile />}
          <div className="line-separator" />
          <>
            {isDesktopLaptop && <Navbar />}
            {isTabletMobile && <DropdownMobile />}
            <div className="background-image">
              <AnimatedRoutes />
            </div>
          </>
          {isDesktopLaptop && <Footer />}
        </body>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
