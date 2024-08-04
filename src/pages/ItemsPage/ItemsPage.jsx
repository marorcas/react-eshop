import { useContext, useEffect, useState } from "react";

import { ItemsContext } from "../../context/ItemsContextProvider/ItemsContextProvider";
import { useParams } from "react-router-dom";
import { getItemsByCategory, getItemsByType } from "../../services/data-service";
import Grid from "../../components/Grid/Grid";

import styles from "./ItemsPage.module.scss";

const ItemsPage = ({ items, title }) => {
    // const { itemsCategory, itemsType } = useParams();

    // const { items } = useContext(ItemsContext);
    // const [filteredItems, setFilteredItems] = useState([]);
    // const [pageTitle, setPageTitle] = useState("");

    // useEffect(() => {
    //     let data;

    //     if (itemsType) {
    //         data = getItemsByType(items, itemsType);
    //         setPageTitle(itemsType.charAt(0).toUpperCase() + itemsType.slice(1) + " Bows");
    //     } else {
    //         data = getItemsByCategory(items, itemsCategory);
    //         setPageTitle(itemsCategory.charAt(0).toUpperCase() + itemsCategory.slice(1));
    //     }

    //     setFilteredItems(data);
    // }, [itemsCategory, itemsType]);
    
    return (
        <>
            <h1 className={styles.Title}>{title}</h1>
            <Grid items={items}/>
        </>
    )
}

export default ItemsPage;