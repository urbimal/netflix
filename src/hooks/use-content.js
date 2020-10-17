import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firestore } = useContext(FirebaseContext);

  useEffect(() => {
    firestore
      .collection(target)
      .get()
      .then((snapshot) => {
        console.log(snapshot.docs);
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [firestore, target]);

  return { [target]: content };
}
