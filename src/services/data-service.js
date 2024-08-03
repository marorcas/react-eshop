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

// export const getItemById = async (id) => {
//   // get the reference
//   const docRef = doc(db, "bows", id);
//   // look up the document based on the reference
//   const snapshot = await getDoc(docRef);
//   // if a document with id doesn't exist throw an error
//   if (!snapshot.exists()) {
//     throw new Error("Could not find item with id " + id);
//   }
//   // otherwise we get the document to grab the data
//   return { id: snapshot.id, ...snapshot.data() };
//   // data() doesn't return the id of the document
//   // return snapshot.data() - THIS WILL STILL WORK
// };