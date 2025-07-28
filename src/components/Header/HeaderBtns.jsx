// import React, { useEffect, useState } from "react";
// import "./Header.css";
// import { ImSun } from "react-icons/im";
// import { RiMoonLine } from "react-icons/ri";

// const HeaderIcons = () => {
//   const [theme, setTheme] = useState("dark");
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) {
//       setTheme(savedTheme);
//     }
//   }, []);

//   const toggleTheme = () => {
//     let currentTheme = theme === "dark" ? "light" : " dark";
//     setTheme(currentTheme);
//     localStorage.setItem("theme", currentTheme);
//   };

//   useEffect(() => {
//     document.body.className = theme;
//   }, [theme]);
//   return (
//     <div className="headerBtns">
//       <button type="button" onClick={toggleTheme} className="btn btnPrime">
//         {theme === "dark" ? <ImSun/> : <RiMoonLine/>  }
//       </button>
//       <button type="button" onClick={toggleTheme} className="btn btnPrime">
//         {theme === "dark" ? <ImSun/> : <RiMoonLine/>  }
//       </button>
//       <button type="button" onClick={toggleTheme} className="btn btnPrime">
//         {theme === "dark" ? <ImSun/> : <RiMoonLine/>  }
//       </button>
      
//     </div>
//   );
// };

// export default HeaderIcons;
