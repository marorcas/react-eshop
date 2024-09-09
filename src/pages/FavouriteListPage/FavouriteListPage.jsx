import { useContext, useEffect, useState } from "react";
import { getFavouritedItems } from "../../services/data-service";
import FavouriteListCard from "../../components/FavouriteListCard/FavouriteListCard";

import styles from "./FavouriteListPage.module.scss";
import { ItemsContext } from "../../context/ItemsContextProvider/ItemsContextProvider";

const FavouriteListPage = () => {
    const { favouriteItems, setFavouriteItems} = useContext(ItemsContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        getFavouritedItems()
            .then((data) => {
                setLoading(false);
                setFavouriteItems(data);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
            })

        console.log(favouriteItems);
    }, [setFavouriteItems]);

    return (
        <>
            <h1 className={styles.Title}>Favourite Items</h1>
            <div className={styles.FavouriteListPage}>
                {favouriteItems.length > 0 &&
                    (favouriteItems.map((item) => 
                        <FavouriteListCard key={item.id} item={item}/>
                    )) 
                }
            </div>

            {error && <p>No items added</p>}
        </>
    )
}

export default FavouriteListPage;