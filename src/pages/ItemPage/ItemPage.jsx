import { useContext, useState } from "react";

import { ItemsContext } from "../../context/ItemsContextProvider/ItemsContextProvider";
import { getItemById, getVariantLabel, getVariantOptions, updateFavourited } from "../../services/data-service";
import FavouritedIcon from "./FavouritedIcon";
import UnfavouritedIcon from "./UnfavouritedIcon";

import styles from "./ItemPage.module.scss";

const ItemPage = () => {
    const { items, setItems, itemTitle } = useContext(ItemsContext);

    const [selectOption, setSelectOption] = useState('option1');
    const [isFavourited, setIsFavourited] = useState(items.favourited);

    console.log("initial: ", isFavourited)
    console.log(items.favourited)

    const handleChange = (event) => {
        setSelectOption(event.target.value);
    }

    const toggleFavourite = async () => {
        const favouritedStatus = !isFavourited;
        console.log("status: ", favouritedStatus)
        setIsFavourited(favouritedStatus);

        await updateFavourited(items, favouritedStatus);

        setItems(await getItemById(items.id));
        // console.log("set favourite: ", isFavourited)
        
        console.log("update doc: ", items)
        console.log("new isFave: ", isFavourited)
    }

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
                <h3>{itemTitle}</h3>
                <h2 className={styles.Price}>${items.price}</h2>

                {items.variants && (
                    <form>
                        <label className={styles.Label} htmlFor="selectOption">{getVariantLabel(items)}</label>
                        <select className={styles.Select} id="selectOption" value={selectOption} onChange={handleChange}>
                            <option value="option1">{getVariantOptions(items)[0]}</option>
                            <option value="option2">{getVariantOptions(items)[1]}</option>
                        </select>
                    </form>
                )}

                <div className={styles.Buttons}>
                    <button 
                        className={styles.FavouriteBtn}
                        onClick={toggleFavourite}
                    >
                        {items.favourited ? <FavouritedIcon/> : <UnfavouritedIcon/>}
                    </button>

                    <button className={styles.CartBtn}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ItemPage;