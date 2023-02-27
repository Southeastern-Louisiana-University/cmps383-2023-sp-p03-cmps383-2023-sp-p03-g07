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
import Navbar from './Components/NavBar/Navbar.js';

function App() {
  return (
    <body className="background">
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </>
    </body>
  );
}

export default App;
