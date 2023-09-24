import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfoliog.png'
import IMG2 from '../../assets/portfolioh.png'
import IMG3 from '../../assets/abcd1.png'
const portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Work</h5>
            <h2>Project</h2>

            <div className="container portfolio__container">
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG1} alt="" />
                    </div>
                        <h3>Personal Portfolio By using React JS</h3>
                        <div className="portfolio__item-cta">
                        <a href="https://github.com/siddhi108/Personal-Portfolio-" className='btn' target='_blank'>Github</a>
                        <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG2} alt="" />
                    </div>
                        <h3>Supply Management Chain By using BlockChain</h3>
                        <div className="portfolio__item-cta">
                        <a href="https://github.com/siddhi108/Walmart-2023" className='btn' target='_blank'>Github</a>
                        <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG3} alt="" />
                    </div>
                        <h3>Text Summarization by using NLP</h3>
                        <div className="portfolio__item-cta">
                        <a href="https://github.com/siddhi108/Text-Summarization-" className='btn' target='_blank'>Github</a>
                        <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                </article>
            </div>


        </section>
    )
}

export default portfolio
