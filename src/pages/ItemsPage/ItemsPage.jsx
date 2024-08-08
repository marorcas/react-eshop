import { useParams } from "react-router-dom";

import Grid from "../../components/Grid/Grid";

import styles from "./ItemsPage.module.scss";
import { getPageTitle } from "../../services/data-service";

const ItemsPage = () => {
    const { itemsCategory, itemsType } = useParams();

    return (
        <>
            <h1 className={styles.Title}>{getPageTitle(itemsCategory, itemsType)}</h1>
            <Grid/>
        </>
    )
}

export default ItemsPage;