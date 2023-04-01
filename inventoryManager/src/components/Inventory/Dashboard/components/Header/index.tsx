import {
  Flex,
  Input,
  InputGroup, InputRightAddon, SearchIcon
} from 'native-base';
import React from 'react';
import Categories from '../../../shared/Categories';
import { HeaderProps } from './types';

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
