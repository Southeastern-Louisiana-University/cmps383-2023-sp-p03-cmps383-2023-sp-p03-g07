import './App.css';
import React from 'react';
import {
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// import Desktop/Laptop components
import Navbar from './Components/NavBar/Navbar.js';
import Banner from './Components/Banner/Banner.js';
import Footer from './Components/Footer/Footer.js';

// import Mobile/Tablet components
import DropdownMobile from './Components/Mobile/DropdownMobile/DropdownMobile.js';
import BannerMobile from './Components/Mobile/BannerMobile/BannerMobile.js';

// import content pages
import Home from './Pages/Home/Home.js';
import Rewards from './Pages/Rewards/Rewards.js';
import Schedule from './Pages/Schedule/Schedule.js';
import Tickets from './Pages/Tickets/Tickets.js';
import Login from './Pages/Account/Login/Login.js';
import SignUp from './Pages/Account/Sign Up/SignUp.js';
import Payments from './Pages/Payments/Payments.js';

function App() {

  const isDesktopLaptop = useMediaQuery({ query: '(min-width: 900px)'});
  const isTabletMobile = useMediaQuery({ query: '(max-width: 900px)' });

  return (
    <body>
    <div className="app-container">
      <body className="app-body">
        {isDesktopLaptop && <Banner />}
        {isTabletMobile && <BannerMobile />}
        <div className="line-separator" />
        <>
          {isDesktopLaptop && <Navbar />}
          {isTabletMobile && <DropdownMobile />}
          <div className="background-image">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/rewards" element={<Rewards />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </>
        {isDesktopLaptop && <Footer />}
      </body>
    </div>
    </body>
  );
}

export default App;
