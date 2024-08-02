import { NavLink } from "react-router-dom";

import styles from "./CarouselCard.module.scss";

const CarouselCard = ({ carouselItem }) => {
    return (
        <article className={styles.CarouselCard}>
            <NavLink className={styles.Link} to="/">
                <h1>{carouselItem.title}</h1>
            </NavLink>
        </article>
    )
}

export default CarouselCard;