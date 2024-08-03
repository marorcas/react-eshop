import styles from "./ItemCard.module.scss";

const ItemCard = ({ item }) => {
    return (
        <article className={styles.ItemCard}>
            <img 
                className={styles.Img}
                src={item.imageUrl}
            />
            <p>{item.name}</p>
            <p>${item.price}</p>
        </article>
    )
}

export default ItemCard;