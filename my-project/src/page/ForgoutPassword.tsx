import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export interface forgoutPasswordInterface {
  username: string;
  password: string;
    password2?: string;
    res:void
}

const ForgoutPassword = () => {
  const navigate = useNavigate();
  const [username, setIsEmail] = useState("");
  const [password, setIsPassword1] = useState("");
  const [password2, setIsPassword2] = useState("");

// const forgout = async () => {
//     try {
//       const res = await forgout();
//     if (res) {
//       console.log("User update success", res);
//     } else {
//       console.log("Reset password error");
//     }
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// };

  return (

    <div>
      <Navbar />
      <div className="register-board-container">
        <div className="register-board-form-container">
          <div className="register-board-form-title">
            <span>
              <p>Reset Password</p>
            </span>
          </div>
          <div className="register-board-div-input">
            <span>
              <p className="register-board-text">Email:</p>
            </span>
            <input
              type="text"
              className="register-board-input"
              value={username}
              onChange={(e) => {
                setIsEmail(e.target.value);
              }}
            />
          </div>
          <div className="register-board-div-input">
            <span>
              <p className="register-board-text">Password:</p>
            </span>
            <input
              type="password"
              className="register-board-input"
              value={password}
              onChange={(e) => {
                setIsPassword1(e.target.value);
              }}
            />
          </div>
          <div className="register-board-div-input">
            <span>
              <p className="register-board-text"> Repeat your Password:</p>
            </span>
            <input
              type="password"
              className="register-board-input"
              value={password2}
              onChange={(e) => {
                setIsPassword2(e.target.value);
              }}
            />
          </div>
          <div className="register-form-div-btn">
            <div className="register-form-btn" onClick={() => {}}>
              Reset
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgoutPassword;
