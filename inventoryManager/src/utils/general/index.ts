import { TLooseObject } from '../../types/general';

export const isObjectEmpty = (obj: TLooseObject) => !Object.keys(obj).length;
