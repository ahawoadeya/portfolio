import React from 'react'
import { FiArrowRightCircle } from 'react-icons/fi'

const PortfolioItem = ({ image, title, description, url }) => {
    return (
        <div className="portfolio_content grid swiper-slide">
            <img src={ image } alt="" className="portfolio_img"/>

            <div className="portfolio_data">
                <h3 className="portfolio_title">{ title }</h3>
                <p className="portfolio_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nisi, quisquam, quaerat blanditiis placeat fugiat optio dolorum magnam in odit distinctio, illum architecto tempore dignissimos vitae! Commodi dignissimos quisquam vitae.</p>
                <a href={ url } className="button button--flex button--small portfolio_button">
                    Demo
                    <FiArrowRightCircle className="button_icon"/>
                </a>
            </div>
        </div>
    )
}

export default PortfolioItem
