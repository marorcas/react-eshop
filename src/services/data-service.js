import { data } from "./data"
import { doc, collection, getDoc, getDocs, writeBatch, query, where } from "firebase/firestore";
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
  try {
    const collectionRef = collection(db, "items");
    const snapshot = await getDocs(collectionRef);
    const cleanData = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return cleanData;
  } catch (e) {
    return "Error: Could not retrive data.";
  }
};

export const getItemsByCategory = async (category) => {
  try {
    const collectionRef = collection(db, "items");

    // // Create a query to filter by category
    const q = query(collectionRef, where('category', '==', category));

    // // Execute the query
    const snapshot = await getDocs(q);

    const items = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    return items;
  } catch (e) {
    return "Error: Could not retrieve data.";
  }
};

export const getItemsByType = async (type) => {
  try {
    const collectionRef = collection(db, "items");

    // Create a query to filter by category
    const q = query(collectionRef, where('type', 'array-contains', type));

    // Execute the query
    const snapshot = await getDocs(q);

    const items = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    return items;
  } catch (e) {
    return "Error: Could not retrieve data.";
  }
};

export const getItemById = async (id) => {
  try {
    // get the reference
    const docRef = doc(db, "items", id);
    // look up the document based on the reference
    const snapshot = await getDoc(docRef);
    // if a document with id doesn't exist throw an error
    if (!snapshot.exists()) {
      throw new Error("Could not find an item with id " + id);
    }
    // otherwise we get the document to grab the data
    return { id: snapshot.id, ...snapshot.data() };
  } catch (e) {
    return "Error: Could not retrieve data.";
  }
};

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