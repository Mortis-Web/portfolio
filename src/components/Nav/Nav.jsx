import React, { useEffect, useState } from 'react';
import "./Nav.css"
import { HashLink as Link } from 'react-router-hash-link';


const Nav = () => {
  const handleScrolling = ()=>{
    const sections = document.querySelectorAll("section , header");
    let currentSection = "#";

    sections.forEach((section)=>{
      let top = section.getBoundingClientRect().top;
      let bottom = section.getBoundingClientRect().bottom;
      if(top <= 100 && bottom >= 120){
        currentSection = `#${section.id}`;
      }

   })
   setActive(currentSection)

  }


  useEffect(()=>{
    window.addEventListener("scroll",handleScrolling);

    return ()=>{
      window.removeEventListener("scroll",handleScrolling);
    }

  },[])

  const [active,setActive] = useState('#')

  return (
    <nav>
  <Link to="#" className={active === "#" ? "active" : ""}><i className="fa-solid fa-house"></i></Link>
  <Link to="#about" className={active === "#about" ? "active" : ""}><i className="fa-solid fa-user"></i></Link>
  <Link to="#skills" className={active === "#skills" ? "active" : ""}><i className="fa-solid fa-circle-info"></i></Link>
  <Link to="#services" className={active === "#services" ? "active" : ""}><i className="fa-solid fa-table-list"></i></Link>
  <Link to="#contact" className={active === "#contact" ? "active" : ""}><i className="fa-solid fa-link"></i></Link>
</nav>

    )
}

export default Nav
