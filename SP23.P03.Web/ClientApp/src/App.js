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

function App() {
  return (
    <body className="background">
      <Banner />
      <div className="content-box">
        <>
          <Navbar />
          <div className="container">
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
        </>
      </div>
    </body>
  );
}

export default App;
