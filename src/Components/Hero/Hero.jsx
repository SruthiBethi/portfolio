import React from 'react'
import './Hero.css'
import profile from'../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile} alt='img' style={{widht:'200px', height:'200px'}}/>
        <h2><span>I'm Sruthi, </span>FullStack Java Developer.</h2>
        <p>I am A FullStack Java Developer Trained at Sathya Institute</p>
        <div className='hero-action'>
           <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
           <div className='hero-resume'>My Resume</div>

        </div>
    </div>
  )
}

export default Hero