import { NavLink } from "react-router-dom";

import styles from "./CarouselCard.module.scss";

const CarouselCard = ({ carouselItem }) => {
    return (
        <NavLink className={styles.CarouselCard} to="/">
            <h1>{carouselItem.title}</h1>
        </NavLink>
    )
}

export default CarouselCard;