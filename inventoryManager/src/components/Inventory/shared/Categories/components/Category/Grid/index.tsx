import React from 'react';
import {CategoryGridProps} from './types';
import {FlatList, Flex} from 'native-base';

const CategoryGrid: React.FC<CategoryGridProps> = ({
  renderItem,
  categories,
  numColumns = 3,
}) => {
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <FlatList
        data={categories}
        numColumns={numColumns}
        renderItem={renderItem}
      />
    </Flex>
  );
};

export default CategoryGrid;
