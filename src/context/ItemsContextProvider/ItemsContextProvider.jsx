import { createContext, useEffect, useState } from "react";

import { getAllItems } from "../../services/data-service";

export const ItemsContext = createContext(null);

const ItemsContextProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getAllItems().then((items) => setItems(items));
    }, []);

    return (
        <ItemsContext.Provider value={{ items, setItems }}>
            {children}
        </ItemsContext.Provider>
    )
}

export default ItemsContextProvider;