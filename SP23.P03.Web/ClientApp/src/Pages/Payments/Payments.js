import React from 'react'
import './Payments.css';
import { Link } from 'react-router-dom';
import PaymentIcons from '../../Components/Images/payment_methods.png';

function Payments() {

    return (
        <div className="content-box">
            <div className="pay-container">
                <body className="pay-body">
                    <h1 className="pay-header">
                        Thank you for joining us at EnTrack!
                    </h1>
                    <div className="payment-methods-icon">
                        <img src={ PaymentIcons } className="pay-icon" alt="Payment method icons" />
                    </div>
                    <form name="pay" className="pay-form">
                        <div className="cardholder-name-container">
                            <div className="cardholder-firstname">
                                <input
                                    name="carholder-firstname"
                                    className="cardholder-firstname-input"
                                    type="text"
                                    placeholder="Firstname"
                                />
                            </div>
                            <div className="cardholder-lastname">
                                <input
                                    name="carholder-lastname"
                                    className="cardholder-lastname-input"
                                    type="text"
                                    placeholder="Lastname"
                                />
                            </div>
                        </div>
                        <div className="cardnumber">
                                <input
                                    name="cardnumber"
                                    className="cardnumber-input"
                                    type="text"
                                    placeholder="0000 0000 0000 0000"
                                />
                            </div>
                        <div className="cardnumber-info-container">
                            <select className="expiration-input">
                                <option>---Select Month---</option>
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">August</option>
                                <option value="09">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                            <select className="expiration-input"> 
                                <option>---Select Year---</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                                <option value="2031">2031</option>
                                <option value="2032">2032</option>
                                <option value="2033">2033</option>
                                <option value="2034">2034</option>
                            </select>
                            <input
                                name="cvv"
                                className="cvv-input"
                                type="text"
                                placeholder="CVV"
                            />
                        </div>
                        <div className="billing-divider">
                            <div className="billing-addr-divider-left" />
                                <div className="billing-text">Add Billing Address</div>
                            <div className="billing-addr-divider-right" />
                        </div>
                        <div className="cardholder-name-container">
                            <div className="cardholder-firstname">
                                <input
                                    name="carholder-firstname"
                                    className="cardholder-firstname-input"
                                    type="text"
                                    placeholder="Firstname"
                                />
                            </div>
                            <div className="cardholder-lastname">
                                <input
                                    name="carholder-lastname"
                                    className="cardholder-lastname-input"
                                    type="text"
                                    placeholder="Lastname"
                                />
                            </div>
                        </div>
                        <div className="billing-address">
                            <input
                                name="address"
                                className="address"
                                type="text"
                                placeholder="Address"
                            />
                            <input
                                name="zipcode"
                                className="zipcode"
                                type="text"
                                placeholder="Zip Code"
                            />
                        </div>
                        <div className="pay-submit">
                            <input
                                className="Submit"
                                type="submit"
                                value="Submit" />
                        </div>
                    </form>
                    <div className="other-content">
                        <div className="divider">
                            <div className="or-divider" />or<div className="or-divider" />
                        </div>
                        <div className="paypal-button">
                            <Link
                                to="https://paypal.com/"
                                target = "_blank"
                                rel = "noopener noreferrer"
                            >
                                <div className="paypal-text">Continue with PayPal</div>
                            </Link>
                        </div>
                    </div>
                </body>
            </div>
        </div>
    )
}

export default Payments;