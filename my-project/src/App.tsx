import { Route, Routes } from "react-router-dom"
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
import Page404 from "./page/Page404";
import HomePage from "./page/homePAge";

const App =()=> {

  return (
    <div>
      <Routes>
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Page404/>} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App
