import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ItemsContext } from "../../context/ItemsContextProvider/ItemsContextProvider";
import ItemsPage from "../../pages/ItemsPage/ItemsPage";
import ItemPage from "../../pages/ItemPage/ItemPage";
import { getItemsByCategory, getItemsByType, getItemById } from "../../services/data-service";

const ContentLoader = () => {
    const { itemsCategory, itemsType, id } = useParams();

    const { items, setItems } = useContext(ItemsContext);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true); // Set loading to true before fetching data

        if (id) {
            getItemById(id)
                .then((data) => {
                    setLoading(false);
                    setItems(data);
                })
                .catch((error) => {
                    setLoading(false);
                    setError(error);
                });
        } else if (itemsType) {
            getItemsByType(itemsType)
                .then((data) => {
                    setLoading(false);
                    setItems(data);
                })
                .catch((error) => {
                    setLoading(false);
                    setError(error);
                });
        } else if (itemsCategory) {
            getItemsByCategory(itemsCategory)
                .then((data) => {
                    setLoading(false);
                    setItems(data);
                })
                .catch((error) => {
                    setLoading(false);
                    setError(error);
                })
        } else {
            setLoading(false); // Set loading to false if no valid params
        }
    }, [itemsCategory, itemsType, id])

    return (
        <>
            {loading && <p>Loading content...</p>}

            {!loading && (
                items?.length > 1 ? (
                    <ItemsPage/>
                ) : (
                    <ItemPage/>
                )
            )}
        </>
    )
}

export default ContentLoader;