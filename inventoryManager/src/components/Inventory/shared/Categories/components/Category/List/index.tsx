import React from 'react';
import {CategoryListProps} from './types';
import {CategoryWrapper} from '../SingleItem';
import {Flex, Text} from 'native-base';
import {GenericIconButton} from '../../../../../../../common/GenericIconButton';

const CategoryList: React.FC<CategoryListProps> = ({
  isDrawer,
  categoryList,
  setSeeAllCategories,
  textProps,
  boxProps,
  iconWidth,
  iconHeight,
  setCategoryItemSelected,
  setIsRecentlyClosedModal,
}) => {
  return (
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
        <Flex alignItems="center">
          <GenericIconButton
            onPress={() => setSeeAllCategories?.(prev => !prev)}
            iconName="arrowright"
            iconColor="green"
            bgColor="transparent"
            variant="outline"
            h="82px"
          />
          <Text>View all</Text>
        </Flex>
      )}
    </Flex>
  );
};

export default CategoryList;
