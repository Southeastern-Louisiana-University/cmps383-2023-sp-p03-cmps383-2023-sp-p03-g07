import React from "react";
import "./Receipt.css";
import exampleReceipt from "../../Components/Images/example_ticket-receipt.png";

import { motion } from 'framer-motion';

function Receipt() {

    const print = () => {
        let printContents =
        document.getElementById('receipt').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }

    return (
        <motion.div
            className="content-box"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.1 }}
        >
            <div className="receipt-container">
                <div className="receipt-body">
                    <h1 className="receipt-header">
                        Thank you for choosing EnTrack!
                    </h1>
                    <text className="receipt-text">Please print your ticket below.</text>
                    <div className="receipt-image-container" id='receipt'>
                        <img className="receipt" src={exampleReceipt} alt="Example Receipt" />
                    </div>
                    <div className="print-button-container">
                        <button className="print-button" onClick={print}>
                            <text className="print-button-text">Print Receipt/Ticket</text>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Receipt;