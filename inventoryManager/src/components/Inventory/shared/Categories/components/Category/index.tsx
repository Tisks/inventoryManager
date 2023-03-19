import React from 'react';
import {Box, Button, Flex, Text} from 'native-base';
import {CategoryProps} from './types';
import {Image} from 'react-native';

const Category: React.FC<CategoryProps> = ({
  item,
  onPress,
  isDrawer,
  boxProps,
  iconWidth = 80,
  iconHeight = 80,
  textProps,
}) => {
  return (
    <Box width={iconWidth + 10} height={iconHeight + 10} {...boxProps}>
      <Button
        bgColor={
          !isDrawer
            ? !item.selected
              ? 'transparent'
              : 'lightblue'
            : 'transparent'
        }
        mx={0}
        p={0}
        onPress={onPress}>
        <Flex alignItems="center" pt="2px">
          <Image
            source={{uri: item.icon}}
            style={{width: iconWidth, height: iconHeight}}
          />
          <Text {...textProps}>{item.name}</Text>
        </Flex>
      </Button>
    </Box>
  );
};

export default Category;
