import { useParams } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { ItemsContext } from "../../context/ItemsContextProvider/ItemsContextProvider";
import { getItemById, getItemName } from "../../services/data-service";

import styles from "./ItemPage.module.scss";

const ItemPage = ({ item }) => {
    // const { itemsCategory, itemsType, id } = useParams();

    // const { items } = useContext(ItemsContext);

    // const [item, setItem] = useState({});

    // useEffect(() => {
    //     if (id) {
    //         const returnedItem = getItemById(items, id);
    //         setItem(returnedItem);
    //     }
    // }, [id]);

    // const itemName = getItemName(item);

    return (
        <div className={styles.ItemPage}>
            <div className={styles.ItemPageLeft}>
                <img 
                    className={styles.Img}
                    src={item.imageUrl}
                />
                <h4>DESCRIPTION</h4>
                <p>{item.description}</p>
            </div>

            <div className={styles.ItemPageRight}>
                {/* <h3>{itemName}</h3> */}
                <h2 className={styles.Price}>${item.price}</h2>
            </div>
        </div>
    )
}

export default ItemPage;