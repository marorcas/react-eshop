import { useContext, useEffect, useState } from "react";

import { ItemsContext } from "../../context/ItemsContextProvider/ItemsContextProvider";
import { useParams } from "react-router-dom";
import { getItemsByType } from "../../services/data-service";
import Grid from "../../components/Grid/Grid";

import styles from "./ItemsPage.module.scss";

const ItemsPage = () => {
    const { itemsType } = useParams();

    const { items } = useContext(ItemsContext);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        const data = getItemsByType(items, itemsType);

        setFilteredItems(data);
    }, [itemsType]);

    // Make first letter of itemsType uppercase for display purposes
    const pageTitle = itemsType.charAt(0).toUpperCase() + itemsType.slice(1);
    
    return (
        <>
            <h1 className={styles.Title}>{pageTitle}</h1>
            <Grid items={filteredItems}/>
        </>
    )
}

export default ItemsPage;