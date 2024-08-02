import { useState } from "react";

import CarouselBackButton from "./CarouselBackButton";
import CarouselCard from "../CarouselCard/CarouselCard";
import CarouselNextButton from "./CarouselNextButton";

import styles from "./Carousel.module.scss";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    // placeholder carousel content
    const carouselList = [
        {id: 1, title: "Compound Bows"},
        {id: 2, title: "Recurve Bows"},
        {id: 3, title: "Traditional Bows"},
    ]

    const goToPrev = () => {
        setCurrentIndex((index) => (index - 1 + carouselList.length) % carouselList.length)
    }

    const goToNext = () => {
        setCurrentIndex((index) => (index + 1) % carouselList.length)
    }

    

    return (
        <div className={styles.Carousel}>
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