import React from "react";
import "./Header.css";
import ME from "../../assets/hansomerMe.png";
import HeaderIcons from "./HeaderIcons";
// import HeaderBtns from "./HeaderBtns";
import { MdDashboard } from "react-icons/md";
import { FaUserSecret } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../hooks/AuthContext";

const Header = () => {
  const {isLoggedIn} = useAuthContext();
  return (
    <section id="#" className="section">
      <div className="container">
        <h5 >hello i'm</h5>
        <h1 className="name">Mohammed Emara</h1>
        <h5 className="textLight">front-end developer</h5>
        <a href="" download className="btn">
          Download Cv
        </a>
        <a href="#contact" download className="btn btnPrime">
          Contact Me!
        </a>
        <HeaderIcons />
        {/* <HeaderBtns /> */}
        <div className="me">
          <img src={ME} alt="Me" className="w-full scale-125 h-full object-cover"/>
        </div>
        <div className="absolute h-full rotate-90  flex items-center -top-20 -right-15 sm:right-0 flex-col-reverse justify-center gap-2">
           <NavLink to={isLoggedIn ? '/dashboard' : '/login'} style={{margin:'0px',width:'12rem',display:'flex'}} id="dashBtn" className="btn m-0 gap-1 whitespace-nowrap text-lg text-center  items-center justify-center"><FaUserSecret/>Admin Login</NavLink>
           <NavLink to={isLoggedIn ? '/dashboard' : '/login'} className="sm:flex gap-1 text-2xl hidden items-center  text-(--colorPrime) font-bold "> <MdDashboard/> DashBoard</NavLink> </div>
      </div>
    </section>
  );
};

export default Header;
