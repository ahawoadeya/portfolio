import React from 'react'
import SwiperComponent from './SwiperComponent'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'

const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section_title">Portfolio</h2>
            <span className="section_subtitle">Most recent work</span>

            <div className="portfolio_container container swiper-container">
                <div className="swiper_wrapper">
                    <SwiperComponent/>
                </div>

                <div className="swiper-button-next">
                    <AiOutlineDoubleRight className="swiper-portfolio-icon"/>
                </div>
                <div className="swiper-button-prev" style={{left: "-.1rem"}}>
                    <AiOutlineDoubleLeft className="swiper-portfolio-icon"/>
                </div>

                <div className="swiper-pagination"></div>
            </div>
        </section>
    )
}

export default Portfolio
