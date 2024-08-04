import { NavLink } from "react-router-dom";

import { getItemName } from "../../services/data-service";

import styles from "./ItemCard.module.scss";

const ItemCard = ({ item }) => {
    const itemName = getItemName(item);

    let itemAddress;

    if (item.category === "bows") {
        itemAddress = `/bows/${item.type[1]}/${item.id}`;
    } else {
        itemAddress = `/${item.category}/${item.type[0]}/${item.id}`;
    }
    
    return (
        <NavLink className={styles.ItemCard} to={itemAddress}>
            <img 
                className={styles.Img}
                src={item.imageUrl}
            />
            <p className={styles.Name}>{itemName}</p>
            <p>${item.price}</p>
        </NavLink>
    )
}

export default ItemCard;