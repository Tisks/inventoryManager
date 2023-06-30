import React from 'react';
import {Box} from 'native-base';
import {LogBox} from 'react-native';
import {CategoriesProps} from './types';
import CategoryGrid from './components/Category/Grid';
import CategoryList from './components/Category/List';
import {CategoryItem} from '../../../../types/product';
import {CategoryWrapper} from './components/Category/SingleItem';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
]);

export const seeAllCategory: CategoryItem = {
  name: 'View all',
  icon: 'https://picsum.photos/id/237/200/200',
};

const Categories: React.FC<CategoriesProps> = ({
  isDrawer,
  categoryList,
  setSeeAllCategories,
  display = 'flex',
  textProps,
  boxProps,
  iconWidth,
  iconHeight,
  setCategoryItemSelected,
  setIsRecentlyClosedModal,
}) => {
  const renderItem = (item: any) => {
    const {item: categoryItem} = item;
    return (
      <CategoryWrapper
        isDrawer={isDrawer}
        item={categoryItem}
        textProps={textProps}
        boxProps={boxProps}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        setSeeAllCategories={setSeeAllCategories}
        setIsRecentlyClosedModal={setIsRecentlyClosedModal}
        setCategoryItemSelected={setCategoryItemSelected}
      />
    );
  };

  return (
    <Box mt="15px" w="100%">
      {display === 'flex' ? (
        <CategoryList
          {...{
            isDrawer,
            categoryList,
            setSeeAllCategories,
            textProps,
            boxProps,
            iconWidth,
            iconHeight,
            setCategoryItemSelected,
            setIsRecentlyClosedModal,
          }}
        />
      ) : (
        <CategoryGrid categories={categoryList} renderItem={renderItem} />
      )}
    </Box>
  );
};

export default Categories;
