import React from 'react';
import './Portfolio.css'
import img2 from "../../assets/original-cefce90fd1ece24fcb75a26509fe7849.webp";
import img3 from "../../assets/original-df0489b9bdb6643b431adb24b52cf14e.webp";
import img4 from "../../assets/DeWatermark.ai_1733942743016.jpg";
import { useDashContext } from '../../hooks/Dashboard.Context';


const Portfolio = () => {
  const {posts} = useDashContext();
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container">
        {posts.map((post,index)=>(

        <article key={index} className='portItem'>
          <div className="portImg">
            <img src={post.base64} alt="img" className='w-full object-cover h-70 max-h-70' />
          </div>
          <h3>{post.title}</h3>
          <a href={`${post.gitLink}`} target='_blank' className='btn'>Github</a>
          <a href={`${post.demoLink}`} target='_blank' className='btn btnPrime'>Live Demo</a>


        </article>
        ))}
        <article className='portItem'>
          <div className="portImg">
            <img src={img2} alt="img" className='w-full object-cover h-70 max-h-70'   />
          </div>
          <h3>this is a portfolio item title</h3>
          <a href="http://github.com" target='_blank' className='btn'>Github</a>
          <a href="http://website" target='_blank' className='btn btnPrime'>Live Demo</a>


        </article>        <article className='portItem'>
          <div className="portImg">
            <img src={img3} alt="img" className='w-full object-cover h-70 max-h-70'  />
          </div>
          <h3>this is a portfolio item title</h3>
          <a href="http://github.com" target='_blank' className='btn'>Github</a>
          <a href="http://website" target='_blank' className='btn btnPrime'>Live Demo</a>


        </article>
        <article className='portItem'>
          <div className="portImg">
            <img src={img4} alt="img" className='w-full object-cover h-70 max-h-70'  />
          </div>
          <h3>this is a portfolio item title</h3>
          <a href="https://github.com/Mortis-Web" target='_blank' className='btn'>Github</a>
          <a href="https://mortis-web.github.io/Samsung-/" target='_blank' className='btn btnPrime'>Live Demo</a>


        </article>
        <article className='portItem'>
          <div className="portImg">
            <img src={img4} alt="img" className='w-full object-cover h-70 max-h-70'  />
          </div>
          <h3>this is a portfolio item title</h3>
          <a href="https://github.com/Mortis-Web" target='_blank' className='btn'>Github</a>
          <a href="https://mortis-web.github.io/Samsung-/" target='_blank' className='btn btnPrime'>Live Demo</a>


        </article>        <article className='portItem'>
          <div className="portImg">
            <img src={img4} alt="img" className='w-full object-cover h-70 max-h-70'  />
          </div>
          <h3>this is a portfolio item title</h3>
          <a href="https://github.com/Mortis-Web" target='_blank' className='btn'>Github</a>
          <a href="https://mortis-web.github.io/Samsung-/" target='_blank' className='btn btnPrime'>Live Demo</a>


        </article>
      </div>
    </section>
  )
}

export default Portfolio
