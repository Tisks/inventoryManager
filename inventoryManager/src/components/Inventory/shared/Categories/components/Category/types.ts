import { InterfaceBoxProps } from 'native-base/lib/typescript/components/primitives/Box';
import { InterfaceTextProps } from 'native-base/lib/typescript/components/primitives/Text/types';
import { CategoryItem } from '../../../../../../types/product';

export interface CategoryProps {
  item: CategoryItem;
  onPress: () => void;
  isDrawer?: boolean;
  boxProps?: InterfaceBoxProps;
  iconWidth?: number;
  iconHeight?: number;
  textProps?: InterfaceTextProps;
}
