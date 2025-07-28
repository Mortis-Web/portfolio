import React from "react";
import "./Skills.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section className="sec" id="skills">
      <h5>What skills i have</h5>
      <h2>my skills</h2>
      <div className="container">
        <div className="frontend">
          <h3 className="text-xl">frontend development</h3>
          <div className="frontendSkills">
            <article className="skillDetail">
              <BsFillPatchCheckFill className="icon" />
              <div className="min-w-30"> 
                <h4>HTML</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="skillDetail">
              <BsFillPatchCheckFill className="icon"/>
              <div className="min-w-30"> 
                <h4>JavaScript</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="skillDetail">
              <BsFillPatchCheckFill className="icon"/>
              <div className="min-w-30"> 
                <h4>BootStrap</h4>

                <small className="text-light">Experinced</small>
              </div>
            </article>

            <article className="skillDetail">
              <BsFillPatchCheckFill className="icon"/>
              <div className="min-w-30"> 
                <h4>TailWind</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="skillDetail">
              <BsFillPatchCheckFill className="icon"/>
              <div className="min-w-30"> 
                <h4>React.JS</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="skillDetail">
              <BsFillPatchCheckFill className="icon"/>
              <div className="min-w-30"> 
                <h4>Css</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="frontend">
          <h3 className="text-xl">Dominant Soft Skills</h3>
          <div className="frontendSkills">
            <article className="skillDetail">
              <BsFillPatchCheckFill className="icon"/>
              <div className="min-w-30"> 
                <h4>Team Work</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="skillDetail">
              <BsFillPatchCheckFill className="icon"/>
              <div className="min-w-30"> 
                <h4>English</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="skillDetail">
              <BsFillPatchCheckFill className="icon"/>
              <div className="min-w-30"> 
                <h4>performance</h4>

                <small className="text-light">Optimal</small>
              </div>
            </article>

            <article className="skillDetail">
              <BsFillPatchCheckFill className="icon"/>
              <div className="min-w-30"> 
                <h4>delivery</h4>
                <small className="text-light">precise</small>
              </div>
            </article>
            <article className="skillDetail">
              <BsFillPatchCheckFill className="icon"/>
              <div className="min-w-30"> 
                <h4>LeaderShip</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="skillDetail">
              <BsFillPatchCheckFill className="icon"/>
              <div className="min-w-30"> 
                <h4>communication</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
