import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Counter = ({ count, plus, minus, r }) => {
    return (
        <div className="container text-center mt-5">
            <div className="card shadow p-4 bg-light" style={{ maxWidth: "400px", margin: "auto" }}>
                <h1 className="text-primary">Counter App</h1>
                <h2 className="my-3">Counter: <span className="badge bg-dark">{count}</span></h2>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-success" onClick={() => plus()}>Increment</button>
                    <button className="btn btn-danger" onClick={() => minus()}>Decrement</button>
                    <button className="btn btn-warning" onClick={() => r()}>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;