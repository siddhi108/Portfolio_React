import React from 'react'
import './footer.css'
const footer = () => {
    return (
       <footer >
           
            <a href='#' className='footer__logo'>Thank you</a>
            <ul className='permalinks'>
            <li ><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Education">Educaation</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
      
            </ul>
            
      <div className='footer__copyright'>
        <small>address: Karvenagar Pune 415002</small>
      </div>
      
       </footer>
    )
}

export default footer
