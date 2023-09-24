import React from 'react'

import Header from './Components/Header/header';
import Nav from './Components/Nav/nav';
import About from './Components/About/about';
import Expercience from './Components/Expercience/expercience';
import Services from './Components/Services/services';
import Portfolio from './Components/Portfolio/portfolio';
// import Testimonials from './Components/Testimonials/testimonials';
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/footer'
 const App = () => {
    return (
        <>
            <Header/>
            <Nav/>
            <About/>
            <Expercience/>
            <Services/>
            <Portfolio/>
            {/* <Testimonials/> */}
            <Contact/>
            <Footer/>
        </>
    )
}

export default App