import React from 'react'
import { Link } from 'react-router-dom';
import './TicketList.css';

import { motion } from 'framer-motion';

// Please don't judge me too harshly, I wanted the ticket list to be present for the final presentation.
// We never did get the backend fully connected with being able to pull that information.

function TicketList() {
    return (
        <motion.div
            className="content-box"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className="ticket-list-container">
                <h1 className="ticket-list-text-center">
                    Select Your Journey
                </h1>
                <body className="ticket-list-body-content">
                    <div className="ticket-example-container">
                        <div className="example-tickets">
                            <div className="ticket-content">
                                <div className="ticket-labels">
                                    <div className="to-from-title">Trip:</div>
                                    <div className="riders">Riders:</div>
                                    <div className="departure-time">Departure Time:</div>
                                    <div className="departure-date">Date:</div>
                                    <div className="ticket-price">Price</div>
                                    <div className="ticket-buy-button-container" />
                                </div>
                                <div className="ticket-separator" />
                                <div className="ticket-info">
                                    <div className="to-from-title">Hammond, LA to Baton Rouge, LA</div>
                                    <div className="riders">1 Person</div>
                                    <div className="departure-time">10:00am</div>
                                    <div className="departure-date">May 7, 2023</div>
                                    <div className="ticket-price">$30.00</div>
                                    <div className="ticket-buy-button-container">
                                        <Link to="/payments">
                                            <div className="ticket-buy-button">Purchase</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="ticket-content">
                                <div className="ticket-labels">
                                    <div className="to-from-title">Trip:</div>
                                    <div className="riders">Riders:</div>
                                    <div className="departure-time">Departure Time:</div>
                                    <div className="departure-date">Date:</div>
                                    <div className="ticket-price">Price</div>
                                    <div className="ticket-buy-button-container" />
                                </div>
                                <div className="ticket-separator" />
                                <div className="ticket-info">
                                    <div className="to-from-title">Hammond, LA to Covington, LA</div>
                                    <div className="riders">1 Person</div>
                                    <div className="departure-time">4:00pm</div>
                                    <div className="departure-date">May 9, 2023</div>
                                    <div className="ticket-price">$40.00</div>
                                    <div className="ticket-buy-button-container">
                                        <Link to="/payments">
                                            <div className="ticket-buy-button">Purchase</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="ticket-content">
                                <div className="ticket-labels">
                                    <div className="to-from-title">Trip:</div>
                                    <div className="riders">Riders:</div>
                                    <div className="departure-time">Departure Time:</div>
                                    <div className="departure-date">Date:</div>
                                    <div className="ticket-price">Price</div>
                                    <div className="ticket-buy-button-container" />
                                </div>
                                <div className="ticket-separator" />
                                <div className="ticket-info">
                                    <div className="to-from-title">Hammond, LA to Jackson, MS</div>
                                    <div className="riders">1 Person</div>
                                    <div className="departure-time">5:00pm</div>
                                    <div className="departure-date">May 10, 2023</div>
                                    <div className="ticket-price">$100.00</div>
                                    <div className="ticket-buy-button-container">
                                        <Link to="/payments">
                                            <div className="ticket-buy-button">Purchase</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="ticket-content">
                                <div className="ticket-labels">
                                    <div className="to-from-title">Trip:</div>
                                    <div className="riders">Riders:</div>
                                    <div className="departure-time">Departure Time:</div>
                                    <div className="departure-date">Date:</div>
                                    <div className="ticket-price">Price</div>
                                    <div className="ticket-buy-button-container" />
                                </div>
                                <div className="ticket-separator" />
                                <div className="ticket-info">
                                    <div className="to-from-title">Hammond, LA to Houston, TX</div>
                                    <div className="riders">1 Person</div>
                                    <div className="departure-time">1:00pm</div>
                                    <div className="departure-date">May 12, 2023</div>
                                    <div className="ticket-price">$130.00</div>
                                    <div className="ticket-buy-button-container">
                                        <Link to="/payments">
                                            <div className="ticket-buy-button">Purchase</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="ticket-content">
                                <div className="ticket-labels">
                                    <div className="to-from-title">Trip:</div>
                                    <div className="riders">Riders:</div>
                                    <div className="departure-time">Departure Time:</div>
                                    <div className="departure-date">Date:</div>
                                    <div className="ticket-price">Price</div>
                                    <div className="ticket-buy-button-container" />
                                </div>
                                <div className="ticket-separator" />
                                <div className="ticket-info">
                                    <div className="to-from-title">Hammond, LA to Dallas, TX</div>
                                    <div className="riders">1 Person</div>
                                    <div className="departure-time">4:00pm</div>
                                    <div className="departure-date">May 16, 2023</div>
                                    <div className="ticket-price">$150.00</div>
                                    <div className="ticket-buy-button-container">
                                        <Link to="/payments">
                                            <div className="ticket-buy-button">Purchase</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        </motion.div>
    )
}

export default TicketList;