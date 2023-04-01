import React, { useEffect, useState } from 'react';
import { WithNavigation } from '../../../../App';
import { getAllCategories } from '../../../api/services/category';
import Header from '../../../components/Inventory/Dashboard/components/Header';
import Modal from '../../../components/Inventory/shared/Categories/components/Modal';
import { setCurrentCategory } from '../../../components/Inventory/shared/Categories/utils';
import { useAuthStateChange } from '../../../hooks/useAuthStateChange';
import {
  CategoryItem, Product, ProductExpirationQuantityRow,
  timeIntervals,
  UnitEnumAbbr
} from '../../../types/product';
const categoryNumberShown = 3;

const Dashboard: React.FC<WithNavigation> = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  useAuthStateChange(navigation);

  const [productList, setProductList] = useState<Product[]>([]);
  const [categoryListAll, setCategoryListAll] = useState<CategoryItem[]>([]);
  const [categoryListBar, setCategoryListBar] = useState<CategoryItem[]>([]);
  const [isRecentlyClosedModal, setIsRecentlyClosedModal] = useState(false);
  const [menuToggled, setMenuToggled] = useState<boolean>(false);
  const [seeAllCategories, setSeeAllCategories] = useState<boolean>(false);

  const closeCategoryModal = () => setSeeAllCategories(false);

  const [categoryItemSelected, setCategoryItemSelected] =
    useState<CategoryItem>();

  useEffect(() => {
    const generatedProducts: Product[] = [];
    for (let i = 0; i < 30; i++) {
      const properRow: ProductExpirationQuantityRow[] = [];
      for (let i = 0; i < 2; i++) {
        properRow.push({
          quantity: 0,
          expirationDate: new Date(),
          timeLapse: timeIntervals.Daily,
          focusInput: false,
        });
      }
      generatedProducts.push({
        name: `John Brown ${i}`,
        actualQuantity: i,
        maxQuantity: i + 5,
        minQuantity: i - 5,
        comment: `${i}`,
        unit: UnitEnumAbbr.Kg,
        image: `New York No. ${i} Lake Park`,
        productsExpirationRow: properRow,
      });
    }
    setProductList(generatedProducts);

    const getCategories = async () => {
      const categories = await getAllCategories();
      const res = categories as CategoryItem[];
      setCategoryListAll(res);
      setCategoryListBar(res.slice(0, 3));
    };

    getCategories();
  }, []);

  useEffect(() => {
    if (!categoryItemSelected) return;
    /* Cases: 
        The item selected...
        1) Is the same as the first one
        2) Is not the same as the first one but is in the bar
        3) Is not in the bar
    */
    if (categoryListBar[0].name === categoryItemSelected.name) {
      setCurrentCategory(
        categoryItemSelected,
        'firstItem',
        categoryListAll,
        setCategoryListAll,
        categoryListBar,
        setCategoryListBar,
      );
    } else if (
      categoryListBar.map(item => item.name).includes(categoryItemSelected.name)
    ) {
      setCurrentCategory(
        categoryItemSelected,
        'belongsToCategoryBar',
        categoryListAll,
        setCategoryListAll,
        categoryListBar,
        setCategoryListBar,
      );
    } else {
      setCurrentCategory(
        categoryItemSelected,
        'generic',
        categoryListAll,
        setCategoryListAll,
        categoryListBar,
        setCategoryListBar,
      );
    }
  }, [categoryItemSelected]);

  return (
    <>
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
        categoryList={categoryListBar}
        setSeeAllCategories={setSeeAllCategories}
        setCategoryItemSelected={setCategoryItemSelected}
      />

      <Modal
        isOpen={seeAllCategories}
        onClose={closeCategoryModal}
        categoryList={categoryListAll}
        setSeeAllCategories={setSeeAllCategories}
        setCategoryItemSelected={setCategoryItemSelected}
        setIsRecentlyClosedModal={setIsRecentlyClosedModal}
      />
      {/*
      <ProductTable />
      
      */}
    </>
  );
};

Dashboard.displayName = 'Dashboard';

export default Dashboard;
