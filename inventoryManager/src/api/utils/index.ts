import firestore, {
  FirebaseFirestoreTypes
} from '@react-native-firebase/firestore';
import { TCollection } from '../../types';
import { TLooseObject } from '../../types/general';

enum EDocMethods {
  DELETE = 'deleted',
  CREATED = 'created',
  UPDATED = 'updated',
}
type TMethods = keyof typeof EDocMethods;

const logMessage = (
  collectionName: TCollection,
  method: TMethods,
  docId?: string,
) =>
  console.log(
    `Doc ${
      docId ? `with id ${docId}` : ''
    } in the collection ${collectionName} was ${
      EDocMethods[method]
    } successfully`,
  );

export const collection = (name: TCollection) =>
  firestore().collection(String(name));

export const doc = (collectionName: TCollection, docId: string) =>
  collection(collectionName).doc(docId);

export const selectQuery = (
  fieldNames: string[],
  data: FirebaseFirestoreTypes.DocumentData,
): FirebaseFirestoreTypes.DocumentData => {
  //Lacks depth in determining the values that are arrays
  const filteredData: FirebaseFirestoreTypes.DocumentData = Object.entries(data)
    .filter(([key]) => fieldNames.includes(key))
    .reduce((prev, curr) => {
      return {...prev, [curr[0]]: curr[1]};
    }, {});

  return filteredData;
};

export const getFilteredDoc = async (
  collectionName: TCollection,
  queries: [string | number, FirebaseFirestoreTypes.WhereFilterOp, unknown][],
  fieldNames: string[],
) => {
  try {
    let snapshot = await collection(collectionName);
    for (const query of queries) {
      snapshot = snapshot.where(
        ...query,
      ) as FirebaseFirestoreTypes.CollectionReference<FirebaseFirestoreTypes.DocumentData>;
    }

    if (!snapshot?.count()) return undefined;

    const result = await snapshot.get();

    const collections: FirebaseFirestoreTypes.DocumentData[] = [];
    result.forEach(doc => {
      const allData = doc.data();
      const data = fieldNames.length
        ? selectQuery(fieldNames, doc.data())
        : allData;
      return collections.push(data);
    });

    return collections;
  } catch (error) {
    console.log(error);
  }
};

export const getDoc = async (collectionName: TCollection, docId: string) => {
  try {
    return await doc(collectionName, docId).get();
  } catch (error) {
    console.log(error);
  }
};

export const getAllDocs = async (collectionName: TCollection) => {
  try {
    return await collection(collectionName).get();
  } catch (error) {
    console.log(error);
  }
};

export const createDoc = async (
  collectionName: TCollection,
  data: TLooseObject,
  docId?: string,
) => {
  let resDoc: any;
  try {
    if (docId) await doc(collectionName, docId).set(data);
    else {
      resDoc = await collection(collectionName).add(data);
      await updateDoc(collectionName, data, resDoc.id, false);
    }
    logMessage(collectionName, 'CREATED', docId || resDoc.id);
  } catch (error) {
    console.log(error);
  }
};

export const updateDoc = async (
  collectionName: TCollection,
  data: TLooseObject,
  docId: string,
  doLog: boolean = true,
) => {
  try {
    await doc(collectionName, docId).update(data);
    doLog && logMessage(collectionName, 'UPDATED', docId);
  } catch (error) {
    console.log(error);
  }
};

export const deleteDoc = async (collectionName: TCollection, docId: string) => {
  try {
    await doc(collectionName, docId).delete();
    logMessage(collectionName, 'DELETE', docId);
  } catch (error) {
    console.log(error);
  }
};

export const deleteFieldDoc = async (
  collectionName: TCollection,
  fieldName: string,
  docId: string,
) => {
  try {
    await doc(collectionName, docId).update({
      [fieldName]: firestore.FieldValue.delete(),
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteElementsDoc = (
  collectionName: TCollection,
  fieldName: string[],
  docId: string,
) => {
  try {
    for (const name of fieldName)
      doc(collectionName, docId).update({
        [name]: firestore.FieldValue.delete(),
      });
  } catch (error) {
    console.log(error);
  }
};

export const deleteArrayElementsDoc = (
  collectionName: TCollection,
  fieldName: string[],
  docId: string,
  arrayElements: any[],
) => {
  try {
    for (const name of fieldName)
      doc(collectionName, docId).update({
        [name]: firestore.FieldValue.arrayRemove(...arrayElements),
      });
  } catch (error) {
    console.log(error);
  }
};
