import { NavLink } from "react-router-dom";

import styles from "./CarouselCard.module.scss";

const CarouselCard = ({ carouselItem }) => {
    return (
        <NavLink className={styles.CarouselCard} to="/">
            {carouselItem.title}
        </NavLink>
    )
}

export default CarouselCard;