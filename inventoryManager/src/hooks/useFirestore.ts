import {
  collection,
  FieldPath,
  query,
  where,
  WhereFilterOp,
  addDoc,
  setDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
import {db} from '../config';
import {Collection, TCollection} from '../utils/constants';
import {useCollectionData} from 'react-firebase-hooks/firestore';

export const useGetFromFirestore = (
  collectionName: Collection,
  whereClause: [
    fieldPath: string | FieldPath,
    opStr: WhereFilterOp,
    value: unknown,
  ],
) => {
  const collectionRef = collection(db, collectionName);
  return useCollectionData(query(collectionRef, where(...whereClause)));
};

/* eslint-disable @typescript-eslint/no-explicit-any */
const submitRequest = async <T>(
  collectionName: TCollection,
  data: T,
  customId?: string,
) => {
  try {
    let res;
    if (customId) {
      await setDoc(doc(db, collectionName, customId), data);
    } else {
      const collect = collection(db, collectionName);
      res = await addDoc(collect, data);
      updateDoc(res, {id: res.id});
    }
    return {result: !!res};
  } catch (error) {
    console.error(error);
  }
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const submitToFirestore = async (
  collectionName: TCollection,
  data: any,
  customId?: string,
) => submitRequest(collectionName, data, customId);

export const useSubmitToFirestore = () => submitRequest;

/* eslint-disable @typescript-eslint/no-explicit-any */
const updateRequest = async <T>(
  collection: Collection,
  docId: string,
  data: T,
) => {
  try {
    const collectionRef = doc(db, collection, docId);
    await updateDoc(collectionRef, data);
    return true;
  } catch (error) {
    console.error(error);
  }
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const updateToFirestore = async <T>(
  collection: Collection,
  docId: string,
  data: T,
) => updateRequest(collection, docId, data);

export const useUpdateDocFirestore = () => updateToFirestore;
