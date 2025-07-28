import Footer from "./components/Footer/Footer";
import { Route,  Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DashBoard from "./pages/DashBoard";
import LoginPage from "./pages/LoginPage";
import LogOut from "./components/LogOut";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
      </Routes>

      <LogOut/>
      <Footer />
    </>
  );
}

export default App;
