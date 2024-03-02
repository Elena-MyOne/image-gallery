import { doc, setDoc, serverTimestamp, collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase.config';

const Firestore = {
  readDocs: (...args) => {
    const [collection_name] = args;
    let docs = [];
    const ref = collection(db, 'stocks');

    return new Promise(async (resolve, reject) => {
      try {
        const snapshots = await getDocs(ref);
        snapshots.forEach((doc) => {
          const d = { ...doc.data(), id: doc.id };
          docs.push(d);
        });
        resolve(docs);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  },

  writeDoc: (...args) => {
    const [inputs, collection_name] = args;

    return new Promise(async (resolve, reject) => {
      const randomIndex = Math.floor(Math.random() * 1000000000000);

      try {
        //docRef - the function reference
        //db - our database
        //stocks - name of the collection
        //randomIndex - we need to pass a unique index as a string

        const docRef = doc(db, 'stocks', `${randomIndex}`);
        await setDoc(docRef, {
          title: inputs.title,
          path: inputs.path,
          createdAt: serverTimestamp(),
          user: inputs.user,
        });
        resolve('new doc successfully inserted');
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  },
};
export default Firestore;
