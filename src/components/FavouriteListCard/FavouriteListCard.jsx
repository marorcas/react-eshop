import { NavLink } from "react-router-dom";
import { useState } from "react";

import { getItemAddress, getItemById, getItemName, getVariantLabel, getVariantOptions, updateFavourited } from "../../services/data-service";
import FavouritedIcon from "../../pages/ItemPage/FavouritedIcon";
import UnfavouritedIcon from "../../pages/ItemPage/UnfavouritedIcon";

import styles from "./FavouriteListCard.module.scss";


const FavouriteListCard = ({ item }) => {
    const [isFavourited, setIsFavourited] = useState(item.favourited);

    const toggleFavourite = async () => {
        const favouritedStatus = !isFavourited;
        setIsFavourited(favouritedStatus);

        await updateFavourited(item, favouritedStatus);

        window.location.reload();
    }
    return (
        <article className={styles.FavouriteListCardContainer}>
            <NavLink className={styles.FavouriteListCard} to={getItemAddress(item)}>
                <img 
                    className={styles.Img}
                    src={item.imageUrl}
                />

                <div className={styles.Info}>
                    <p className={styles.Name}>{getItemName(item)}</p>
                    <p>${item.price}</p>
                </div>
            </NavLink>

            <div className={styles.FavouriteBtnContainer}>
                <button 
                    className={styles.FavouriteBtn}
                    onClick={toggleFavourite}
                >
                    {item.favourited ? <FavouritedIcon/> : <UnfavouritedIcon/>}
                </button>
            </div>
        </article>
    )
}

export default FavouriteListCard;