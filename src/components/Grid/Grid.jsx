import { useContext, useState } from "react";

import ItemCard from "../ItemCard/ItemCard";
import { ItemsContext } from "../../context/ItemsContextProvider/ItemsContextProvider";
import placeholderImg from "../../assets/placeholder.jpg";

import styles from "./Grid.module.scss";


const Grid = ({ items }) => {
    // const [itemsList, setItemsList] = useState(null);
    // const { items } = useContext(ItemsContext);

    // placeholder list
    // const itemsList = [
    //   {id: 1, item: "Item 1", img: placeholderImg}, 
    //   {id: 2, item: "Item 2", img: placeholderImg}, 
    //   {id: 3, item: "Item 3", img: placeholderImg}, 
    //   {id: 4, item: "Item 4", img: placeholderImg}, 
    //   {id: 5, item: "Item 5", img: placeholderImg},
    //   {id: 6, item: "Item 6", img: placeholderImg}, 
    //   {id: 7, item: "Item 7", img: placeholderImg}, 
    //   {id: 8, item: "Item 8", img: placeholderImg}, 
    //   {id: 9, item: "Item 9", img: placeholderImg}, 
    //   {id: 10, item: "Item 10", img: placeholderImg},
    //   {id: 11, item: "Item 11", img: placeholderImg}, 
    //   {id: 12, item: "Item 12", img: placeholderImg}, 
    //   {id: 13, item: "Item 13", img: placeholderImg}, 
    //   {id: 14, item: "Item 14", img: placeholderImg}, 
    //   {id: 15, item: "Item 15", img: placeholderImg},
    //   {id: 16, item: "Item 16", img: placeholderImg}, 
    //   {id: 17, item: "Item 17", img: placeholderImg}, 
    //   {id: 18, item: "Item 18", img: placeholderImg}, 
    //   {id: 19, item: "Item 19", img: placeholderImg}, 
    //   {id: 20, item: "Item 20", img: placeholderImg}
    // ]

    return (
      <div className={styles.Grid}>
        {items.map((item) => 
            <ItemCard key={item.id} item={item}/>
        )}
      </div>
    );
};
  
export default Grid;