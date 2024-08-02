import { useState } from "react";

import ItemCard from "../ItemCard/ItemCard";

import styles from "./Grid.module.scss";

const Grid = () => {
    // const [itemsList, setItemsList] = useState(null);

    // placeholder list
    const itemsList = [
      {id: 1, item: "Item 1"}, 
      {id: 2, item: "Item 2"}, 
      {id: 3, item: "Item 3"}, 
      {id: 4, item: "Item 4"}, 
      {id: 5, item: "Item 5"},
      {id: 6, item: "Item 6"}, 
      {id: 7, item: "Item 7"}, 
      {id: 8, item: "Item 8"}, 
      {id: 9, item: "Item 9"}, 
      {id: 10, item: "Item 10"},
      {id: 11, item: "Item 11"}, 
      {id: 12, item: "Item 12"}, 
      {id: 13, item: "Item 13"}, 
      {id: 14, item: "Item 14"}, 
      {id: 15, item: "Item 15"},
      {id: 16, item: "Item 16"}, 
      {id: 17, item: "Item 17"}, 
      {id: 18, item: "Item 18"}, 
      {id: 19, item: "Item 19"}, 
      {id: 20, item: "Item 20"},
      {id: 21, item: "Item 21"}, 
      {id: 22, item: "Item 22"}, 
      {id: 23, item: "Item 23"}, 
      {id: 24, item: "Item 24"}, 
      {id: 25, item: "Item 25"},
    ]

    return (
      <div className={styles.Grid}>
        {itemsList.map((item) => 
            <ItemCard key={item.id} item={item}/>
        )}
      </div>
    );
};
  
export default Grid;