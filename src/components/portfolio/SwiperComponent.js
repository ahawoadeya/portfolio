import React from 'react'
import { PortfolioData }from './data'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
import PortfolioItem from './PortfolioItem'

SwiperCore.use([Navigation, Pagination])

const SwiperComponent = () => {

    const slides = PortfolioData.map((item) => {
        const { id, title, description, image } = item
        return(
            <SwiperSlide key={id}>
                <PortfolioItem title={title} image={image} description={description} />
            </SwiperSlide>
        )
    })
    return (
        <div>
            <Swiper cssMode loop navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }} 
                    pagination={{ el: '.swiper-pagination', type: "bullets", clickable: true}} >
                {slides}
            </Swiper>
        </div>
    )
}

export default SwiperComponent
