import React from "react";
import "./About.css";
import ME from "../../assets/hansomerMe.jpg";

const About = () => {
  return (
    <section id="about" className="sec">
      <h5>get to know me</h5>
      <h2>about me</h2>
      <div className="container">
        <div className="aboutME">
          <img src={ME} alt="zingy 7zeen" className="w-full h-full" />
        </div>
        <div style={{display:"grid"}}>
        <div className="cards">
          <article className="aboutCard">
            <i className="fa-solid fa-certificate"></i>
            <h5>Experince</h5>
            <small>2+ years working Experince</small>
          </article>
          <article className="aboutCard">
            <i className="fa-solid fa-certificate"></i>
            <h5>Experince</h5>
            <small>2+ years working Experince</small>
          </article>
          <article className="aboutCard">
            <i className="fa-solid fa-certificate"></i>
            <h5>Experince</h5>
            <small>2+ years working Experince</small>
          </article>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae magnam,
          veniam quos quasi aliquam dolorum ipsum inventore ex tempora,
          repellendus perferendis impedit deserunt minus iure aut eum debitis
          similique. Obcaecati.
        </p>
        <a href="#contact" className="btn btnPrime">
          Contact Me Now!
        </a>
        </div>
      </div>
    </section>
  );
};

export default About;
