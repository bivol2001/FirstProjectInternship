import React from "react"
import { Route, Routes } from "react-router-dom"
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";


const App =()=> {

  return (
    <div>
      <Routes>
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </div>
  );
}

export default App
