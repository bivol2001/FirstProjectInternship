import { Route, Routes, useNavigate } from "react-router-dom";
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
import Page404 from "./page/Page404";
import HomePage from "./page/HomePage";
import ForgoutPassword from "./page/ForgotPassword";
import { useEffect } from "react";
import { authRoutes } from "./api/AuthRoutes";

const App = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (authRoutes.includes(location.pathname) && !accessToken) {
      navigate("/login");
    }
    console.log(location.pathname);
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgout" element={<ForgoutPassword />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
