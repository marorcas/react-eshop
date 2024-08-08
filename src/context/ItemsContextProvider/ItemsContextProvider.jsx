import { createContext, useState } from "react";

export const ItemsContext = createContext(null);

const ItemsContextProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [itemTitle, setItemTitle] = useState("");

    return (
        <ItemsContext.Provider value={{ items, setItems, itemTitle, setItemTitle }}>
            {children}
        </ItemsContext.Provider>
    )
}

export default ItemsContextProvider;