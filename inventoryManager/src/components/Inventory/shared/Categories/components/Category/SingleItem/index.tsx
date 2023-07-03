import {Box, Button, Flex, Text} from 'native-base';
import React from 'react';
import {Image} from 'react-native';
import {onCategoryPressed} from '../../../utils';
import {CategoryProps, CategoryWrapperProps} from './types';
import Icon from 'react-native-vector-icons/AntDesign';

export const CategoryWrapper: React.FC<CategoryWrapperProps> = ({
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
      onPress={() =>
        onCategoryPressed(
          item,
          isDrawer,
          setCategoryItemSelected,
          setSeeAllCategories,
          setIsRecentlyClosedModal,
        )
      }
      textProps={textProps}
      boxProps={boxProps}
      iconWidth={iconWidth}
      iconHeight={iconHeight}
    />
  );
};

const Category: React.FC<CategoryProps> = ({
  item,
  onPress,
  isDrawer,
  boxProps,
  iconWidth = 80,
  iconHeight = 80,
  textProps,
  imageSrc = 'uri',
  iconProps,
}) => {
  return (
    <>
      {imageSrc === 'uri' ? (
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
              {item.name && <Text {...textProps}>{item.name}</Text>}
            </Flex>
          </Button>
        </Box>
      ) : (
        <Icon name={item.icon} onPress={onPress} {...iconProps} />
      )}
    </>
  );
};

export default Category;
