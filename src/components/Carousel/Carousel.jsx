import { useState } from "react";

import CarouselBackButton from "./CarouselBackButton";
import CarouselCard from "../CarouselCard/CarouselCard";
import CarouselNextButton from "./CarouselNextButton";

import carouselImg1 from "../../assets/carousel-compound.jpg";
import carouselImg2 from "../../assets/carousel-recurve.jpeg";
import carouselImg3 from "../../assets/carousel-traditional.jpg";

import styles from "./Carousel.module.scss";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const carouselList = [
        {id: 1, title: "Compound Bows", img: carouselImg1, address:"bows/compound"},
        {id: 2, title: "Recurve Bows", img: carouselImg2, address: "bows/recurve"},
        {id: 3, title: "Traditional Bows", img: carouselImg3, address: "bows/traditional"},
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
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom'
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