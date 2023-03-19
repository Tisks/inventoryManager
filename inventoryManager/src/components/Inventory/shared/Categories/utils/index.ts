import React from 'react';
import {CategoryItem} from '../../../../../types/product';

export const onCategoryPressed = (
  categoryItem: CategoryItem,
  isDrawer?: boolean,
  setCategoryItemSelected?: React.Dispatch<
    React.SetStateAction<CategoryItem | undefined>
  >,
  setSeeAllCategories?: React.Dispatch<React.SetStateAction<boolean>>,
  setIsRecentlyClosedModal?: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (isDrawer) {
    setIsRecentlyClosedModal?.(true);
    setSeeAllCategories?.(false);
  }
  setCategoryItemSelected?.({...categoryItem});
};

export const setCurrentCategory = (
  electedItem: CategoryItem,
  swapCase: 'firstItem' | 'belongsToCategoryBar' | 'generic',
  categoryListAll: CategoryItem[],
  setCategoryListAll: React.Dispatch<React.SetStateAction<CategoryItem[]>>,
  categoryListBar: CategoryItem[],
  setCategoryListBar: React.Dispatch<React.SetStateAction<CategoryItem[]>>,
) => {
  const categoryListCopy = categoryListAll.slice();
  const categoryListBarCopy = categoryListBar.slice();

  if (swapCase === 'firstItem') {
    if (electedItem.selected) electedItem.selected = false;
    else electedItem.selected = true;

    const currentFirstItemAllListIndex = categoryListCopy.findIndex(
      cat => cat.name === electedItem.name,
    );
    categoryListCopy[currentFirstItemAllListIndex].selected =
      electedItem.selected;

    //Assign the item that is selected atm in the first place
    categoryListBarCopy[0] = electedItem;
  } else if (swapCase === 'belongsToCategoryBar') {
    const currentFirstItem = categoryListBarCopy[0];
    //Deselect the prior selected item and select the current one
    const currentFirstItemBarListIndex = categoryListBarCopy.findIndex(
      cat => cat.name === currentFirstItem.name,
    );
    categoryListBarCopy[currentFirstItemBarListIndex].selected = false;

    electedItem.selected = true;
    const electedItemBarListIndex = categoryListBarCopy.findIndex(
      cat => cat.name === electedItem.name,
    );
    categoryListBarCopy[electedItemBarListIndex].selected = true;

    //Assign the item that is selected atm in the first place and the current one in the place of the prior selected
    categoryListBarCopy[0] = electedItem;
    categoryListBarCopy[electedItemBarListIndex] = currentFirstItem;

    const electedItemAllListIndex = categoryListCopy.findIndex(
      cat => cat.name === electedItem.name,
    );
    categoryListCopy[electedItemAllListIndex].selected = true;

    const currentFirstAllListIndex = categoryListCopy.findIndex(
      cat => cat.name === currentFirstItem.name,
    );
    categoryListCopy[currentFirstAllListIndex].selected = false;
  } else {
    const currentFirstItem = categoryListBarCopy[0];

    //Deselect the prior selected item and select the current one
    const currentFirstItemAllListIndex = categoryListCopy.findIndex(
      cat => cat.name === currentFirstItem.name,
    );
    categoryListCopy[currentFirstItemAllListIndex].selected = false;

    electedItem.selected = true;
    const electedItemAllListIndex = categoryListCopy.findIndex(
      cat => cat.name === electedItem.name,
    );
    categoryListCopy[electedItemAllListIndex].selected = true;

    //Assign the item that is selected atm in the first place
    categoryListBarCopy[0] = electedItem;
  }

  //Update
  setCategoryListBar(categoryListBarCopy);
  setCategoryListAll(categoryListCopy);
};
