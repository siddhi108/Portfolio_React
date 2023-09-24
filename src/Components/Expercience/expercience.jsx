import React from 'react'
import './expercience.css'

import { BsPatchCheckFill } from 'react-icons/bs'
const expercience = () => {
    return (
        <section id='expercience'>
           <h5>What skills I have</h5>
           <h2>My Expercience</h2>
           <div className='container experience__container'>
            <div className='experience frontend'>
                <h3>Technical Skills</h3>
                <div className='experience__content'>
               <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>HTML</h4>
                
                </article>
                <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>CSS</h4>
                
                </article>
                <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>JAVASCRIPTS</h4>
              
                </article>
                <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Java</h4>
                
                </article>
                <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>SQL</h4>
                
                </article>
                <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>REACT.JS</h4>
                
                </article>

                <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Python</h4>
                
                </article>
                </div>
            </div>

           {/* End of the technical skills */}
           <div className='Technical Subjecjs'>
           <h3>Technical Subjects</h3>
            <div className='experience__content'>
               <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>DBMS</h4>
                
                </article>
                <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Operating System</h4>
                
                </article>
                <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Computer Network</h4>
              
                </article>
                <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>NLP</h4>
                
                </article>
                </div>
            </div>

           </div>
           
        </section>
    )
}

export default expercience
