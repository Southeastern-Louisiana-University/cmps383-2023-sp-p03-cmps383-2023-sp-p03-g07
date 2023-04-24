import React from "react";
import "./Receipt.css";
import exampleReceipt from "../../Components/Images/example_ticket-receipt.png";

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
        <div className="content-box">
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
        </div>
    );
}

export default Receipt;