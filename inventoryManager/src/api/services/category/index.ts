import {getAllDocs} from '../../utils';
import {CATEGORY_COLLECTION} from './routes';

export const getAllCategories = async () => {
  const res = await getAllDocs(CATEGORY_COLLECTION);
  const data = res?.docs.map(d => d.data());
  return data;
};
