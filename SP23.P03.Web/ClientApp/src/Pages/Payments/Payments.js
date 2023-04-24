import React from 'react'
import './Payments.css';
import PayPal from './PayPal/PayPal.js';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

function Payments() {

    const product = {
        description: "EnTrack Train Ticket",
        price: "100.00"
    };

    return (
        <motion.div
            className="content-box"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.1 }}
        >
            <div className="pay-container">
                <body className="pay-body">
                    <h1 className="pay-header">
                        Thank you for joining us at EnTrack!
                    </h1>
                    <div className="paypal-button-container">
                        <PayPal product={product} />
                    </div>
                    <div className="receipt-page-button-container">
                        <Link to="/receipt">
                            <button className="receipt-page-button">Continue</button>
                        </Link>
                    </div>
                </body>
            </div>
        </motion.div>
    )
}

export default Payments;