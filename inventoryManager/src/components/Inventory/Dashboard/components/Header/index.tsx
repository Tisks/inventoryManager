import React from 'react';
import {HeaderProps} from './types';
import {
  Flex,
  Input,
  InputGroup,
  SearchIcon,
  InputRightAddon,
} from 'native-base';
import Categories from '../../../shared/Categories';

const Header: React.FC<HeaderProps> = ({
  searchText,
  setSearchText,
  categoryList,
  setSeeAllCategories,
  setIsRecentlyClosedModal,
  setCategoryItemSelected,
}) => {
  const handleChange = (text: string) => setSearchText(text);

  return (
    <Flex mt="15px">
      <InputGroup flexDir="row" justifyContent="center">
        <Input
          w="85%"
          backgroundColor="white"
          placeholder="Search for specific item"
          value={searchText}
          onChangeText={handleChange}
        />
        <InputRightAddon
          children={<SearchIcon size="5" mt="0.5" color="emerald.500" />}
        />
      </InputGroup>
      <Categories
        categoryList={categoryList}
        setSeeAllCategories={setSeeAllCategories}
        setIsRecentlyClosedModal={setIsRecentlyClosedModal}
        setCategoryItemSelected={setCategoryItemSelected}
      />
    </Flex>
  );
};

export default Header;
