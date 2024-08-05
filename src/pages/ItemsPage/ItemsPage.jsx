import { useContext } from "react";

import Grid from "../../components/Grid/Grid";
import { ItemsContext } from "../../context/ItemsContextProvider/ItemsContextProvider";

import styles from "./ItemsPage.module.scss";
import { useParams } from "react-router-dom";

const ItemsPage = () => {
    const { itemsCategory, itemsType } = useParams();

    let title;

    if (itemsType) {
        title = itemsType.charAt(0).toUpperCase() + itemsType.slice(1) + " ";
        title += itemsCategory.charAt(0).toUpperCase() + itemsCategory.slice(1);
    } else {
        title = itemsCategory.charAt(0).toUpperCase() + itemsCategory.slice(1);
    }

    return (
        <>
            <h1 className={styles.Title}>{title}</h1>
            <Grid/>
        </>
    )
}

export default ItemsPage;