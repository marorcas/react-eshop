import { useContext } from "react";

import { ItemsContext } from "../../context/ItemsContextProvider/ItemsContextProvider";
import { getItemName } from "../../services/data-service";

import styles from "./ItemPage.module.scss";

const ItemPage = () => {
    const { items } = useContext(ItemsContext);

    return (
        <div className={styles.ItemPage}>
            <div className={styles.ItemPageLeft}>
                <img 
                    className={styles.Img}
                    src={items.imageUrl}
                />
                <h4>DESCRIPTION</h4>
                <p>{items.description}</p>
            </div>

            <div className={styles.ItemPageRight}>
                {/* <h3>{getItemName(items)}</h3> */}
                <h2 className={styles.Price}>${items.price}</h2>
            </div>
        </div>
    )
}

export default ItemPage;