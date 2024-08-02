import styles from "./ItemCard.module.scss";

const ItemCard = ({ item }) => {
    return (
        <article className={styles.ItemCard}>
            <img 
                className={styles.Img}
                src=""
            />
            <p>{item.item}</p>
            <p>Item price</p>
        </article>
    )
}

export default ItemCard;