import React from "react"
import "./Home.css"
import hero from "../pic/mypic.png"
import codechef from "../pic/codechef.png"
import leetcode from "../pic/leetcode.png"
import github from "../pic/github.png"
import {useTypewriter} from "react-simple-typewriter"


const Home = () => {
  const {text} = useTypewriter({
    words: [ " Developer.", " Coder."," Learner.", " Self Believer."]
    ,
    loop: 0, 
    typeSpeed: 100,
    deleteSpeed: 70,
    delaySpeed: 1000
    })
     return (
       <>
         <section className="hero" id="home">
           <div className="container f_flex top">
             <div className="left top">
              
               <h1>
                 Hey, I'm <span>Gaurav Arora</span>
               </h1>
               <h2>
                 a
                 <span>
                   {text}
                   <span className="cursor">|</span>
                 </span>
               </h2>
            
  
            <p>Front-End Developer | MERN Stack | C++</p>
            <p>I'm a Software Engineer that welcomes challenges and architects solutions. I'm currently attending Chandigarh University,Punjab as a Computer Science major. </p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>CONNECT WITH ME</h4>
                <div className='button'>
                  
                  <a href="https://www.instagram.com/gaurav_arora_017/" target="_blank">
                    <button className='btn_shadow'>
                    <i className='fab fa-instagram'></i>
                  </button></a>

                  <a href="https://www.linkedin.com/in/gaurav-arora-249800173/" target="_blank">
                    <button className='btn_shadow'>
                    <i className='fab fa-linkedin-in'></i>
                  </button></a>
                 
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILLS ON</h4>
                <a href="https://www.codechef.com/users/gaurav_017" target="_blank">
                <button className='btn_shadow'>
                  <img src={codechef} alt='' />
                </button></a>

                <a href="https://leetcode.com/Gaurav_017/" target="_blank">
                <button className='btn_shadow'>
                  <img src={leetcode} alt='Leetcode' />
                </button></a>
                
                <a href="https://github.com/Gauravarora017" target="_blank">
                <button className='btn_shadow'>
                  <img src={github} alt='Github' />
                </button></a>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default Home
