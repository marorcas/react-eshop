import { useContext, useEffect, useState } from "react";
import { ItemsContext } from "../../context/ItemsContextProvider/ItemsContextProvider";
import { useParams } from "react-router-dom";
import ItemsPage from "../../pages/ItemsPage/ItemsPage";
import ItemPage from "../../pages/ItemPage/ItemPage";
import { getItemsByCategory } from "../../services/data-service";

const ContentLoader = () => {
    const { itemsCategory, itemsType, id } = useParams();

    const { items } = useContext(ItemsContext);

    const [filteredItems, setFilteredItems] = useState([]);
    const [item, setItem] = useState(null);
    const [pageTitle, setPageTitle] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true); // Set loading to true before fetching data

        if (id) {
            const returnedItem = getItemById(items, id);
            setItem(returnedItem);
            setLoading(false); // Set loading to false after fetching data
        } else if (itemsType) {
            const returnedData = getItemsByType(items, itemsType);
            setFilteredItems(returnedData);
            setPageTitle(itemsType.charAt(0).toUpperCase() + itemsType.slice(1) + " Bows");
            setLoading(false); // Set loading to false after fetching data
        } else if (itemsCategory) {
            const returnedData = getItemsByCategory(items, itemsCategory);
            setFilteredItems(returnedData);
            setPageTitle(itemsCategory.charAt(0).toUpperCase() + itemsCategory.slice(1));
            setLoading(false); // Set loading to false after fetching data
        } else {
            setLoading(false); // Set loading to false if no valid params
        }
    }, [itemsCategory, itemsType, id])

    return (
        <>
            {item ? (
                <ItemPage item={item} />
            ) : (
                <ItemsPage items={filteredItems} title={pageTitle} />
            )}
        </>
    )
}

export default ContentLoader;