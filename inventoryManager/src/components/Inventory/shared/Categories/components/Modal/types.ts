import {CategoriesProps} from '../../types';

export interface ModalProps
  extends Omit<CategoriesProps, 'categoryNumberShown' | 'display'> {
  isOpen: boolean;
  onClose?: () => void;
}
