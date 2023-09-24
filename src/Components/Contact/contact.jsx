import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md' 
import { AiFillLinkedin } from 'react-icons/ai'
import {FaWhatsapp} from 'react-icons/fa'
// import { useRef } from 'react';
// import emailjs from 'emailjs-com'
const contact = () => {
    // const form =useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs.sendForm('service_eznsb8h', 'template_25t3zcu', form.current, 'YOUR_PUBLIC_KEY')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //   };
    
    return (
       <section id='contact'>
        <h5>Get In touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                    <MdOutlineEmail className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>siddhi.sonawane@cumminscollege.in</h5>
                    <a href="mailto:siddhi.sonawane@cumminscollege.in" target="_blank">Send a message</a>
                </article>
                <article className="contact__option">
                    <AiFillLinkedin className='contact__option-icon'/>
                    <h4>Linkedin</h4>
                    <h5>https://www.linkedin.com/in/siddhi-sonawane-239870220/</h5>
                    <a href="https://www.linkedin.com/in/siddhi-sonawane-239870220/"target="_blank">Send a message</a>
                </article>
                <article className="contact__option">
                    <FaWhatsapp className='contact__option-icon'/>
                    <h4>Whatapp</h4>
                    <h5>8805475341</h5>
                    <a href="https://api.whatsapp.com/send?phone+8805475341" target="_blank">Send a message</a>
                </article>
            </div>
           {/*ref={form} onSubmit={sendEmail*/}
            <form action="">
                <input type="text" name='name' placeholder='Your Full Name' required />
                <input type="email" name='email' placeholder='Your email' required />
                <textarea name="message" rows="7" placeholder='Your message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
       </section>
    )
}

export default contact
