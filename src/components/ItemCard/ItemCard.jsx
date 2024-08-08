import { NavLink } from "react-router-dom";

import { getItemAddress, getItemName } from "../../services/data-service";

import styles from "./ItemCard.module.scss";

const ItemCard = ({ item }) => {
    return (
        <NavLink className={styles.ItemCard} to={getItemAddress(item)}>
            <img 
                className={styles.Img}
                src={item.imageUrl}
            />
            <p className={styles.Name}>{getItemName(item)}</p>
            <p>${item.price}</p>
        </NavLink>
    )
}

export default ItemCard;