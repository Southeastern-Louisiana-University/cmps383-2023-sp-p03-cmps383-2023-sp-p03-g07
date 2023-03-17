import './App.css';
import {
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import Home from './Pages/Home/Home.js';
import Rewards from './Pages/Rewards/Rewards.js';
import Schedule from './Pages/Schedule/Schedule.js';
import Tickets from './Pages/Tickets/Tickets.js';
import Login from './Pages/Account/Login/Login.js';
import SignUp from './Pages/Account/Sign Up/SignUp.js';
import Navbar from './Components/NavBar/Navbar.js';
import Banner from './Components/Banner/Banner.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <div className="app-container">
      <body className="app-body">
        <Banner />
        <div className="line-separator" />
        <>
          <Navbar /> 
          <div className="background-image">
          <div className="content-box">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/rewards" element={<Rewards />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          </div>
        </>
        <Footer />
      </body>
    </div>
  );
}

export default App;
