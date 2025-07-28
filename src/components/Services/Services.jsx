import React from "react";
import "./Services.css";
import { FaCheck } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReact,SiRedux } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import nextjs from '../../assets/nextjs.png'
import vite from '../../assets/vite.png'

const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>services</h2>
      <div className="container">
        <article className="service">
          <div>
            <h3 className="serviceHead">UI/UX design</h3>
            <ul className="list">
              <li>
                <FaCheck className="listIcon" />
                <p>
                  Crafting clean, consistent, and visually appealing layouts
                  using modern design systems and principles.
                </p>
              </li>
              <li>
                <FaCheck className="listIcon" />
                <p>
                  Conducting user interviews, usability testing, and data
                  analysis to improve interaction and satisfaction.
                </p>
              </li>
              <li>
                <FaCheck className="listIcon" />
                <p>
                  Enhancing interfaces with meaningful animations and
                  transitions to guide and delight users.
                </p>
              </li>
              <li>
                <FaCheck className="listIcon" />
                <p>
                  Designing with WCAG standards in mind and creating reusable
                  design components for scalable products.
                </p>
              </li>
              <li>
                <FaCheck className="listIcon" />
                <p>Building low to high-fidelity wireframes and interactive prototypes using Figma and Adobe XD.


                </p>
              </li>
              <li>
                <FaCheck className="listIcon" />
                <p>
Designing adaptive interfaces that deliver seamless experiences across all screen sizes and devices.

                </p>
              </li>
            </ul>
          </div>
        </article>
        <article className="service">
          <div>
            <h3 className="serviceHead">Front-End</h3>
            <ul className="list">
              <li>
                <FaCheck className="listIcon" />
                <p>
Conducting user research and crafting interactive wireframes to validate and improve user journeys.

                </p>
              </li>
              <li>
                <FaCheck className="listIcon" />
                <p>
Building fluid layouts that look and perform great across all screen sizes and devices.

                </p>
              </li>
              <li>
                <FaCheck className="listIcon" />
                <p>
Writing clean, semantic HTML and mastering advanced CSS techniques including animations, layout systems, and custom components.

                </p>
              </li>
              <li>
                <FaCheck className="listIcon" />
                <p>
Leveraging utility-first classes to rapidly build modern, maintainable, and responsive UIs.

                </p>
              </li>
              <li>
                <FaCheck className="listIcon" />
                <p>
Creating dynamic functionality and interactivity with well-structured, modern JavaScript.

                </p>
              </li>
              <li>
                <FaCheck className="listIcon" />
                <p>
Building scalable, component-driven applications with hooks, context, and state management.

                </p>
              </li>
              <li>
                <FaCheck className="listIcon" />
                <p>
Exploring TypeScript for type-safe code and Next.js for optimized, full-stack React applications.


                </p>
              </li>
            </ul>
          </div>
        </article>
        <article className="service">
          <div>
            <h3 className="serviceHead">frameworks</h3>
            <ul className="list">
              <li>
                <FaCheck className="listIcon" />
                <p>
               building dynamic component-based UIs with <span className="inline-flex items-baseline gap-1"><SiReact className="text-(--colorPrime)"/>React.</span>

 </p>
              </li>
              <li>
                <FaCheck className="listIcon" />
                <p>
Skilled in managing global state using <span className="inline-flex items-baseline gap-1"><SiRedux className="text-[#764ABC]"/>redux.</span> and Redux Toolkit.
Know how to structure scalable state logic and middleware flows.

                </p>
              </li>
              <li>
                <FaCheck className="listIcon" />
                <p>
Develop SEO-friendly, full-stack apps using <span className="inline-flex items-baseline gap-1 w-12 h-4"><img src={nextjs} alt="nextjs" className="w-full h-full object-contain" /></span> features.
Familiar with SSR, SSG, API routes, and dynamic routing.                </p>
              </li>
              <li>
                <FaCheck className="listIcon" />
                <p>
Design responsive UIs rapidly with utility-first <span className="inline-flex items-baseline gap-1"> <RiTailwindCssFill className="text-[#38BDF8]"/>tailwind.</span>
Master at customizing themes and creating clean, scalable layouts.

                </p>
              </li>
              <li>
                <FaCheck className="listIcon" />
                <p>
Use <span className="inline-flex items-baseline gap-1"> <FaGitAlt className="text-[#F05032]"/>Git</span> for version control, branching, and collaborative dev.
Push code, manage issues, and review PRs effectively on GitHub.

                </p>
              </li>
              <li>
                <FaCheck className="listIcon" />
                <p>
Use <span className="inline-flex items-baseline gap-1"><img src={vite} alt="vite" className="w-14 h-4 object-contain" />vite</span> for ultra-fast dev environment and optimized builds.
Enjoy its simplicity and instant HMR for React projects.


                </p>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
