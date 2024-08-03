import { useContext } from "react";

import { ItemsContext } from "../../context/ItemsContextProvider/ItemsContextProvider";

const ItemsPage = () => {
    const { items } = useContext(ItemsContext);
    
    return (
        <></>
    )
}

export default ItemsPage;