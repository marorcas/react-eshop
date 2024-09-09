import { createContext, useState } from "react";

export const ItemsContext = createContext(null);

const ItemsContextProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [itemTitle, setItemTitle] = useState("");
    const [favouriteItems, setFavouriteItems] = useState([]);

    return (
        <ItemsContext.Provider value={{ 
            items, 
            setItems, 
            itemTitle, 
            setItemTitle, 
            favouriteItems, 
            setFavouriteItems }}>
            {children}
        </ItemsContext.Provider>
    )
}

export default ItemsContextProvider;