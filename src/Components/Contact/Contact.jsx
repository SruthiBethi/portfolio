import React from 'react'
import './contact.css'
import mail from '../../assets/mail.png'
import call from '../../assets/call.png'
import location from '../../assets/location.png'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "841bfc75-eee7-496a-8e70-e7cf0bf93b7a");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get In Touch</h1>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact any time</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                        <img src={mail} width='40px' height='40px'/><p>bethisruthi35@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                    <img src={call} width='40px' height='40px'/><p>+91 7997858136</p>
                    </div>
                    <div className='contact-detail'>
                    <img src={location} width='40px' height='40px'/><p>h-12, Hyderabad</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label>Your Name</label>
                <input type='text' placeholder='Enter Your Name' name='name'/>
                <label>Your Email</label>
                <input type='email' placeholder='Enter Your Email' name='email'/>
                <label>Enter Your Message Here</label>
                <textarea name='message' rows='8' placeholder='Enter Your Message'/>
                <button type='submit' className='contact-submit'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact