import {CategoryItem} from '../../../../../../../types/product';

export interface CategoryGridProps {
  numColumns?: number;
  categories: CategoryItem[];
  renderItem: (item: any) => JSX.Element
}
