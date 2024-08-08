import { useEffect, useState } from "react";
import { getFavouritedItems } from "../../services/data-service";
import FavouriteListCard from "../../components/FavouriteListCard/FavouriteListCard";

import styles from "./FavouriteListPage.module.scss";

const FavouriteListPage = () => {
    const [favouriteList, setFavouriteList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        getFavouritedItems()
            .then((data) => {
                setLoading(false);
                setFavouriteList(data);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
            })

        console.log(favouriteList)
    }, []);

    return (
        <>
            <h1 className={styles.Title}>Favourite Items</h1>
            <div className={styles.FavouriteListPage}>
                {favouriteList.length > 0 &&
                    (favouriteList.map((item) => 
                        <FavouriteListCard key={item.id} item={item}/>
                    )) 
                }
            </div>

            {error && <p>No items added</p>}
        </>
    )
}

export default FavouriteListPage;