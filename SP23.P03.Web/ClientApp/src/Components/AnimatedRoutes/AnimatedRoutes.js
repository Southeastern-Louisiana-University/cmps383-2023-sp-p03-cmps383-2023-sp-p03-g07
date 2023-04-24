import React from 'react';
import {
    Route,
    Routes,
    Navigate,
    useLocation
} from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

// import content pages
import Home from '../../Pages/Home/Home.js';
import TicketList from '../../Pages/Tickets/TicketList/TicketList.js';
import Tickets from '../../Pages/Tickets/Tickets.js';
import Login from '../../Pages/Account/Login/Login.js';
import SignUp from '../../Pages/Account/Sign Up/SignUp.js';
import Payments from '../../Pages/Payments/Payments.js';
import Receipt from '../../Pages/Receipt/Receipt.js';

function AnimatedRoutes() {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home />} />
                <Route path="/tickets" element={<Tickets />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/ticket-list" element={<TicketList />} />
                <Route path="/receipt" element={<Receipt />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes