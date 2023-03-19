import React from 'react';
import {CategoryItem} from '../../../../../../types/product';
import {ModalProps} from './types';
import {Modal as NativeBaseModal} from 'native-base';
import Categories from '../..';

export const title = 'Categories';

export const seeAllCategory: CategoryItem = {
  name: 'See all',
  icon: 'https://picsum.photos/id/200/200/200',
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  categoryList,
  setSeeAllCategories,
  setCategoryItemSelected,
  setIsRecentlyClosedModal,
}) => {
  return (
    <NativeBaseModal isOpen={isOpen} onClose={onClose} size="full">
      <NativeBaseModal.Content minH="100%">
        <NativeBaseModal.CloseButton />
        <NativeBaseModal.Header>{title}</NativeBaseModal.Header>
        <NativeBaseModal.Body>
          <Categories
            isDrawer
            display="grid"
            categoryList={categoryList}
            setCategoryItemSelected={setCategoryItemSelected}
            setSeeAllCategories={setSeeAllCategories}
            setIsRecentlyClosedModal={setIsRecentlyClosedModal}
            textProps={{fontSize: '20px'}}
            boxProps={{px: '10%', mb: 5}}
            iconWidth={120}
            iconHeight={120}
          />
        </NativeBaseModal.Body>
      </NativeBaseModal.Content>
    </NativeBaseModal>
  );
};

export default Modal;
