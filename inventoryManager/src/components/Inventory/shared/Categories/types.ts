import {CategoryItem} from '../../../../types/product';
import {CategoryProps} from './components/Category/types';

export type categoryLayout = 'flex' | 'grid';

export interface CategoriesProps
  extends Omit<CategoryProps, 'item' | 'onPress'> {
  isDrawer?: boolean;
  categoryList: CategoryItem[];
  categoryNumberShown?: number;
  setCategoryItemSelected?: React.Dispatch<
    React.SetStateAction<CategoryItem | undefined>
  >;
  setSeeAllCategories?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRecentlyClosedModal?: React.Dispatch<React.SetStateAction<boolean>>;
  display?: categoryLayout;
}

export interface CategoriesArray extends Omit<CategoriesProps, 'layout'> {}

export interface CategoryWrapperProps
  extends Omit<CategoriesProps, 'layout' | 'categoryList'>, Pick<CategoryProps, 'item'> {}
