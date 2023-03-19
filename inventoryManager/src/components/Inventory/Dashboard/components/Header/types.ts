import {Dispatch, SetStateAction} from 'react';
import {CategoryItem} from '../../../../../types/product';
import {CategoriesProps} from '../../../shared/Categories/types';

export interface HeaderProps extends CategoriesProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}
