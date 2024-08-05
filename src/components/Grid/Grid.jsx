import { useContext } from "react";

import ItemCard from "../ItemCard/ItemCard";
import { ItemsContext } from "../../context/ItemsContextProvider/ItemsContextProvider";

import styles from "./Grid.module.scss";


const Grid = () => {
    const { items } = useContext(ItemsContext);

    return (
      <div className={styles.Grid}>
        {items.map((item) => 
            <ItemCard key={item.id} item={item}/>
        )}
      </div>
    );
};
  
export default Grid;