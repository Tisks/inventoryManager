import {InterfaceBoxProps} from 'native-base/lib/typescript/components/primitives/Box';
import {InterfaceTextProps} from 'native-base/lib/typescript/components/primitives/Text/types';
import {IconProps} from 'react-native-vector-icons/Icon';
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
  iconProps?: Omit<IconProps, 'name'>;
}

export interface CategoryWrapperProps
  extends Omit<CategoriesProps, 'layout' | 'categoryList'>,
    Pick<CategoryProps, 'item'> {}
