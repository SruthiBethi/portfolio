import React from 'react'
import './footer.css'
import mail from '../../assets/mail.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <p>I am A FullStack Java Developer Trained at Sathya Institute</p>
            </div>
            <div className='footer-top-right'>
                <div className='footer-email-input'>
                    <img src={mail} width='40px' height='40px' />
                    <input type='email' placeholder='enter your eamil'/>
                </div>
                <div className='footer-subscribe'>Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className='footer-bottem'>
            <p className='footer-bottom-left'>2025 Bethi Sruthi. All rights reserved.</p>
            <div className='footer-bottom-right'>
                <p>Term of services</p>
                <p>Privacy & Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer