import React from "react";
import "../Style/RegisterPage.css";

const RegisterPage = () => {
  return (
    <div className="register-board-container">
      <div className="register-board-form-container">
        <div className="register-board-form-title">
          <span>
            <p>Register Form</p>
          </span>
        </div>
        <div className="register-board-div-input">
          <span>
            <p className="register-board-text">Email:</p>
          </span>
          <input type="text" className="register-board-input" />
        </div>
        <div className="register-board-div-input">
          <span>
            <p className="register-board-text">First Name:</p>
          </span>
          <input type="text" className="register-board-input" />
        </div>
        <div className="register-board-div-input">
          <span>
            <p className="register-board-text"> Last Name:</p>
          </span>
          <input type="text" className="register-board-input" />
        </div>
        <div className="register-board-div-input">
          <span>
            <p className="register-board-text">Phone Number:</p>
          </span>
          <input type="text" className="register-board-input" />
        </div>
        <div className="register-board-div-input">
          <span>
            <p className="register-board-text">Password:</p>
          </span>
          <input type="text" className="register-board-input" />
        </div>
        <div className="register-form-div-forgout">
          <input type="checkbox" />
          <span className="register-form-forgout">
            <p className="register-form-forgout">Forgout password</p>
          </span>
        </div>
        <div className="register-form-div-btn">
          <div className="register-form-btn">Register</div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
