import { data } from "./data"
import { doc, collection, getDoc, getDocs, writeBatch } from "firebase/firestore";
import { db } from "../config/firestore";
import { v4 as uuid } from 'uuid'; // package to generate unique id's for each doc

// add multiple docs at once
export const populateFirestoreDb = async () => {
  try {
    const collectionRef = collection(db, "items");
    const snapshot = await getDocs(collectionRef);

    // only add items if the collection is empty
    if (snapshot.empty) {
      const batch = writeBatch(db);

      data.forEach((item) => {
        const docRef = doc(collectionRef, uuid()); // creates new doc with unque id using uuid function
        batch.set(docRef, item); // adds doc to batch with the generated ref
      });

      await batch.commit()
      console.log("Collection populated successfully.");
    } else {
      console.log("Collection already populated.");
    }
  } catch (e) {
    console.error("Error populating collection:", e);
  }
};

export const getAllItems = async () => {
  const collectionRef = collection(db, "items");
  const snapshot = await getDocs(collectionRef);
  const cleanData = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return cleanData;
};

export const getItemsByCategory = (items, itemsCategory) => {
  const filteredByCategory = items.filter((item) => item.category === itemsCategory);

  return filteredByCategory;
}

export const getItemsByType = (items, itemsType) => {
  const filteredByType = items.filter((item) => item.type.includes(itemsType));

  return filteredByType;
}

export const getItemName = (item) => {
  let itemName = item.brand + " " + item.name;
  
    if (item.type.includes("accessory")) {
        itemName += " " + item.type[1].charAt(0).toUpperCase() + item.type[1].slice(1);
    } else if (item.type.includes("arrow")) {
        itemName += " " + item.type[0].charAt(0).toUpperCase() + item.type[0].slice(1) + "s";
    } else {
        itemName += " " + item.type[1].charAt(0).toUpperCase() + item.type[1].slice(1);
        itemName += " " + item.type[0].charAt(0).toUpperCase() + item.type[0].slice(1);
    }

    return itemName;
}

export const getItemById = (items, id) => {
  const item = items.filter((item) => item.id === id);

  // so it returns as a single object instead of an array with one object
  return item[0];
};