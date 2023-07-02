import {InterfaceBoxProps} from 'native-base/lib/typescript/components/primitives/Box';
import {InterfaceTextProps} from 'native-base/lib/typescript/components/primitives/Text/types';
import {CategoryItem} from '../../../../../../../types/product';
import {CategoriesProps} from '../../../types';

export type TImageSrc = 'uri' | 'library';
export interface CategoryProps {
  item: CategoryItem;
  onPress: () => void;
  isDrawer?: boolean;
  boxProps?: InterfaceBoxProps;
  iconWidth?: number;
  iconHeight?: number;
  textProps?: InterfaceTextProps;
  imageSrc?: TImageSrc;
}

export interface CategoryWrapperProps
  extends Omit<CategoriesProps, 'layout' | 'categoryList'>,
    Pick<CategoryProps, 'item'> {}
