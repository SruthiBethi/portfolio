import React from 'react'
import './about.css'
import profile from '../../assets/profile.png'

const About = () => {
  return (
    <div id='about' className='about'>
       <div className='about-title'>
          <h1>About me</h1>
       </div>
       <div className='about-sections'>
           <div className='about-left'>
           <img src={profile} alt='img' style={{widht:'250px', height:'250px'}}/>
           </div>
           <div className='about-right'>
              <div className='about-para'>
                 <p>I am a passionate **backend developer** with expertise in building **scalable, efficient, and secure** server-side applications. I specialize in **databases, APIs, and performance optimization**, ensuring seamless system functionality.</p>
                 <p>I thrive on solving complex challenges, optimizing backend performance, and integrating robust security measures efficiently.</p>
              </div>
              <div className='about-skills'>
                 <div className='about-skill'><p>JAVA</p> <hr style={{width:'50%'}}/></div>
                 <div className='about-skill'><p>Spring</p> <hr style={{width:'70%'}}/></div>
                 <div className='about-skill'><p>Spring Boot</p> <hr style={{width:'80%'}}/></div>
                 <div className='about-skill'><p>Restfull Apis</p> <hr style={{width:'75%'}}/></div>
                 <div className='about-skill'><p>Microservices</p> <hr style={{width:'75%'}}/></div>
                 <div className='about-skill'><p>HTML & CSS</p> <hr style={{width:'60%'}}/></div>
                 <div className='about-skill'><p>Javascript</p> <hr style={{width:'50%'}}/></div>
                 <div className='about-skill'><p>React JS</p> <hr style={{width:'80%'}}/></div>
              </div>
           </div>
        </div>
        <div className='about-achievments'>
                <div className='about-achievment'>
                    <h1>I Am a</h1>
                    <p>Fresher</p>
                </div>
                <hr/>
                <div className='about-achievment'>
                    <h1>2</h1>
                    <p>Projects</p>
                </div>
           </div>
    </div>
  )
}

export default About