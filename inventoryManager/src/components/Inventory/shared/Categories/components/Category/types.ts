import {CategoryItem} from '../../../../../../types/product';
import {InterfaceBoxProps} from 'native-base/lib/typescript/components/primitives/Box';
import {InterfaceTextProps} from 'native-base/lib/typescript/components/primitives/Text/types';

export interface CategoryProps {
  item: CategoryItem;
  onPress: () => void;
  isDrawer?: boolean;
  boxProps?: InterfaceBoxProps;
  iconWidth?: number;
  iconHeight?: number;
  textProps?: InterfaceTextProps;
}
