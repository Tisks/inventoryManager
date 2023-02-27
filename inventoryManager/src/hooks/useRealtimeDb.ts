export const console = 'asd';
/*

import {db_rt} from '../config';
import {useObjectVal} from 'react-firebase-hooks/database';
import {ref, remove, set, update} from 'firebase/database';

const submitRequest = async (reference: string, data: any) => {
  try {
    await set(ref(db_rt, reference), data);
  } catch (error) {
    console.error(error);
  }
};

export const submitToRealtime = (reference: string, data: any) =>
  submitRequest(reference, data);
export const useSubmitToRealtime = () => submitRequest;

const updateRequest = async (reference: string, data: any) => {
  try {
    await update(ref(db_rt, reference), data);
  } catch (error) {
    console.error(error);
  }
};

export const updateToRealtime = (reference: string, data: any) =>
  updateRequest(reference, data);
export const useUpdateToRealtime = () => updateRequest;

const deleteRequest = async (reference: string) => {
  try {
    await remove(ref(db_rt, reference));
  } catch (error) {
    console.error(error);
  }
};

export const deleteToRealtime = (reference: string) => deleteRequest(reference);
export const useDeleteToRealtime = () => deleteRequest;

export const useGetFromRealtime = <T>(objectRef: string) => {
  return useObjectVal<T>(ref(db_rt, objectRef));
};

*/
