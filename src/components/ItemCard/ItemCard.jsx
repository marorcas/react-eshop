import { getItemTitle } from "../../services/data-service";
import styles from "./ItemCard.module.scss";

const ItemCard = ({ item }) => {
    const itemName = getItemTitle(item);
    
    return (
        <article className={styles.ItemCard}>
            <img 
                className={styles.Img}
                src={item.imageUrl}
            />
            <p className={styles.Name}>{itemName}</p>
            <p>${item.price}</p>
        </article>
    )
}

export default ItemCard;