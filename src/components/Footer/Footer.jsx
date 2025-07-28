import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";
import { useAuthContext } from "../../hooks/AuthContext";
import { HashLink as Link } from "react-router-hash-link";
import { FaHome } from "react-icons/fa";


const Footer = () => {
  const location = useLocation();
  const { isLoggedIn } = useAuthContext();
  return (
    <footer className="bg-(--colorPrime)/90 ">
      <a href="#" className="logo">
        MORTIS-WEB
      </a>
      <ul className="navigation text-md font-semibold">

        {location.pathname === "/" ? (
          <>
            <Link to="#">home</Link>
            <Link to="#about">about</Link>
            <Link to="#skills">skills</Link>
            <Link to="#services">services</Link>
            <Link to="#contact">contact</Link>

            <li>
              <NavLink to={isLoggedIn ? "/dashboard" : "/login"}>
                DashBoard
              </NavLink>{" "}
            </li>
          </>
        ) : (
          <li>
            <NavLink to={"/"} className='flex items-center gap-1 font-bold text-xl'><FaHome className="text-xl" />Home</NavLink>
          </li>
        )}{" "}
      </ul>
      <div className="myLinks">
        <a href="">
          <FaFacebookF className="footerIcon" />{" "}
        </a>
        <a href="">
          <FaInstagram className="footerIcon" />
        </a>
        <a href="">
          <FaXTwitter className="footerIcon" />{" "}
        </a>
      </div>
      <div className="copyright">
        <small>&copy; MORTIS-WEB all rights reserved. </small>
      </div>
    </footer>
  );
};

export default Footer;
