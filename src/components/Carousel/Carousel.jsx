import { useState } from "react";

import CarouselBackButton from "./CarouselBackButton";
import CarouselCard from "../CarouselCard/CarouselCard";
import CarouselNextButton from "./CarouselNextButton";

import carouselImg1 from "../../assets/carousel-placeholder1.png";
import carouselImg2 from "../../assets/carousel-placeholder2.png";
import carouselImg3 from "../../assets/carousel-placeholder3.png";

import styles from "./Carousel.module.scss";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    // placeholder carousel content
    const carouselList = [
        {id: 1, title: "Compound Bows", img: carouselImg1},
        {id: 2, title: "Recurve Bows", img: carouselImg2},
        {id: 3, title: "Traditional Bows", img: carouselImg3},
    ]

    const goToPrev = () => {
        setCurrentIndex((index) => (index - 1 + carouselList.length) % carouselList.length)
    }

    const goToNext = () => {
        setCurrentIndex((index) => (index + 1) % carouselList.length)
    }

    return (
        <div 
            className={styles.Carousel} 
            style={{
                backgroundImage: `url(${carouselList[currentIndex].img})`, 
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat'
                }}
        >
            <button className={styles.Button} onClick={goToPrev}>
                <CarouselBackButton/>
            </button>
            <CarouselCard key={carouselList[currentIndex].id} carouselItem={carouselList[currentIndex]}/>
            <button className={styles.Button} onClick={goToNext}>
                <CarouselNextButton/>
            </button>
        </div>
    )
}

export default Carousel;