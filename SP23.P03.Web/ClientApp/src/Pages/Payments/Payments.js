import React from 'react'
import './Payments.css';
import PayPal from './PayPal/PayPal.js';

function Payments() {

    const product = {
        description: "EnTrack Train Ticket",
        price: "100.00"
    };

    return (
        <div className="content-box">
            <div className="pay-container">
                <body className="pay-body">
                    <h1 className="pay-header">
                        Thank you for joining us at EnTrack!
                    </h1>
                    <div className="paypal-button-container">
                        <PayPal product={product} />
                    </div>
                </body>
            </div>
        </div>
    )
}

export default Payments;