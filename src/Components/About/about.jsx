import React from 'react'
import './about.css'
import ME from '../../assets/a4.png'
import { FaAward } from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const about = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                    </div>
                <div className='about__content'>
                    <div className='about__cards'>
                    <article className='about__card'>
                    <FaAward className='about__icon' />
                    <h5>Experience</h5>
                    <small>Fresher </small>
                    </article>
                    <article className='about__card'>
                    <FiUsers className='about__icon' />
                    <h5>Citibridege Mentorship Program</h5>
                    <small>-Works on React.js skill</small>
                    </article>
                    <article className='about__card'>
                    <VscFolderLibrary className='about__icon' />
                    <h5>Projects</h5>
                    <small>5+</small>
                    </article>
                    </div>
                    <p>
                    I am a highly motivated and dedicated Information Technology student looking forward to opportunities where I can utilize my skills for the organization's growth while learning new technologies. 
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's talk</a>
                    </div>
           </div>
            </section>
    )
}

export default about
