import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const services = () => {
    return (
       <section id='services'>
        <h5>know about my</h5>
        <h2>Education</h2>
        <div className="conatiner services__container">
            <article className="service">
                <div className="service__head">
                    <h3>B.tech</h3>
                </div>
                <ul className='service__list'>
                  <li>
                    <BiCheck className='service__list-icon'/>
                    <p>2020-2024</p>
                  </li>
                  <li>
                    <BiCheck className='service__list-icon'/>
                    <p>Mksss's Cummins college of Engineering For women Pune</p>
                  </li>
                  {/* <li>
                    <BiCheck className='service__list-icon'/>
                    <p>CGPA: 7.2</p>
                  </li> */}
                  </ul>
            </article>
            <article className="service">
                <div className="service__head">
                    <h3>HSC</h3>
                </div>
                <ul className='service__list'>
                  <li>
                    <BiCheck className='service__list-icon'/>
                    <p>2018-2020</p>
                  </li>
                  <li>
                    <BiCheck className='service__list-icon'/>
                    <p>Yashwantrao Chavan Institude of Science Satara</p>
                  </li>
                  {/* <li>
                    <BiCheck className='service__list-icon'/>
                    <p>Marks: </p>
                  </li> */}
                  </ul>
            </article>
            <article className="service">
                <div className="service__head">
                    <h3>SSC</h3>
                </div>
                <ul className='service__list'>
                  <li>
                    <BiCheck className='service__list-icon'/>
                    <p>2018</p>
                  </li>
                  <li>
                    <BiCheck className='service__list-icon'/>
                    <p>Yashwantrao Chavan Vidhylay Pimpode bkll</p>  
                  </li>
                  {/* <li>
                    <BiCheck className='service__list-icon'/>
                    <p>Marks: </p>
                  </li> */}
                  </ul>
            </article>
    </div>       
    </section>
    )
}

export default services
