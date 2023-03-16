import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClothingCard from './Card';
import { responsive } from '../../static/helper/constant'

export default function ClothingCarousel(props) {
    return (
        <Carousel
            swipeable={false}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-100-px"
        >
            {
                props.items.map((item, i) => <ClothingCard key={i} item={item} closet={props.closet} />)
            }
        </Carousel>
    )
}
