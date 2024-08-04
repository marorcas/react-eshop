import { useContext, useEffect, useState } from "react";

import { ItemsContext } from "../../context/ItemsContextProvider/ItemsContextProvider";
import { useParams } from "react-router-dom";
import { getItemsByType } from "../../services/data-service";
import Grid from "../../components/Grid/Grid";

const ItemsPage = () => {
    const { itemsType } = useParams();

    const { items } = useContext(ItemsContext);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        const data = getItemsByType(items, itemsType);

        setFilteredItems(data);
    }, [itemsType]);

    console.log(itemsType)
    console.log(items)
    console.log(filteredItems)
    
    return (
        <>
            <h1>{itemsType}</h1>
            <Grid items={filteredItems}/>
        </>
    )
}

export default ItemsPage;