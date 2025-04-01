import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const Counter = ({ count, plus, minus, r }) => {
    const progress = (count / 100) * 360; // Adjust progress dynamically

    return (
        <div className="container text-center mt-5">
            <div className="card shadow-lg p-4 bg-white" style={{ maxWidth: "400px", margin: "auto", borderRadius: "15px" }}>
                <div className="position-relative d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
                    <svg width="150" height="150" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e0e0" strokeWidth="6" />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#007bff"
                            strokeWidth="6"
                            strokeDasharray="282.6"
                            strokeDashoffset={282.6 - (progress * 282.6) / 360}
                            strokeLinecap="round"
                            initial={{ strokeDashoffset: 282.6 }}
                            animate={{ strokeDashoffset: 282.6 - (progress * 282.6) / 360 }}
                            transition={{ duration: 0.5 }}
                        />
                    </svg>
                    <h2 className="position-absolute text-dark">{count}</h2>
                </div>
                <h5 className="my-3 text-secondary">Steps Counter</h5>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-success" onClick={plus}>Increment</button>
                    <button className="btn btn-danger" disabled={count === 0} onClick={minus}>Decrement</button>
                    <button className="btn btn-warning" onClick={r}>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
