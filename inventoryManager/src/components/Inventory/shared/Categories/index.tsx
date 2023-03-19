import React from 'react';
import {Box, Flex, Text} from 'native-base';
import {CategoriesProps, CategoryWrapperProps} from './types';
import Category from './components/Category';
import {CategoryItem} from '../../../../types/product';
import {FlatList} from 'react-native';
import {onCategoryPressed} from './utils';
import {LogBox} from 'react-native';
import {GenericIconButton} from '../../../../common/GenericIconButton';
import {signOut} from '../../../../api/services/user';
LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
]);

export const seeAllCategory: CategoryItem = {
  name: 'View all',
  icon: 'https://picsum.photos/id/237/200/200',
};

const CategoryWrapper: React.FC<CategoryWrapperProps> = ({
  isDrawer,
  setSeeAllCategories,
  setCategoryItemSelected,
  setIsRecentlyClosedModal,
  textProps,
  boxProps,
  iconWidth,
  iconHeight,
  item,
}) => {
  return (
    <Category
      item={item}
      isDrawer={isDrawer}
      onPress={() => {
        console.log({item})
        onCategoryPressed(
          item,
          isDrawer,
          setCategoryItemSelected,
          setSeeAllCategories,
          setIsRecentlyClosedModal,
        );
      }}
      textProps={textProps}
      boxProps={boxProps}
      iconWidth={iconWidth}
      iconHeight={iconHeight}
    />
  );
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
        <Flex flexDir="row" justifyContent="space-evenly">
          {categoryList.map((item, key) => (
            <CategoryWrapper
              key={key}
              item={item}
              isDrawer={isDrawer}
              textProps={textProps}
              boxProps={boxProps}
              iconWidth={iconWidth}
              iconHeight={iconHeight}
              setSeeAllCategories={setSeeAllCategories}
              setIsRecentlyClosedModal={setIsRecentlyClosedModal}
              setCategoryItemSelected={setCategoryItemSelected}
            />
          ))}
          {!isDrawer && (
            <Flex>
              <GenericIconButton
                onPress={() => setSeeAllCategories?.(prev => !prev)}
                iconName="arrowright"
                iconColor="green"
                bgColor="transparent"
                variant="outline"
                py={0}
                h="50%"
              />
              <Text>View all</Text>
            </Flex>
          )}
        </Flex>
      ) : (
        <Flex flexDir="column" justifyContent="center" alignItems="center">
          <FlatList
            numColumns={3}
            data={categoryList}
            renderItem={renderItem}
          />
        </Flex>
      )}
    </Box>
  );
};

export default Categories;
