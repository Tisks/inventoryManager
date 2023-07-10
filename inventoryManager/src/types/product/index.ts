export enum UnitEnum {
  Unit = 'Unit',
  Kg = 'Kilogram',
  Gram = 'Gram',
  Liter = 'Liter',
}

export enum UnitEnumAbbr {
  Unit = 'U',
  Kg = 'Kg',
  Gram = 'Gr',
  Liter = 'L',
}

export type UnitTypes = keyof typeof UnitEnum;

export const UnitArray = [
  UnitEnum.Unit,
  UnitEnum.Kg,
  UnitEnum.Gram,
  UnitEnum.Liter,
];

export const timeIntervalEquivalentFormat = {
  Daily: 'dd/MM/yyyy',
  Monthly: 'MM/yyyy',
};

export enum timeIntervals {
  Daily = 'Daily',
  Monthly = 'Monthly',
}

export type timeIntervalsTypes = keyof typeof timeIntervals;

export const timeIntervalsTypesArray = [
  timeIntervals.Daily,
  timeIntervals.Monthly,
];

export enum categoryItemLocationsEnum {
  firstItem = 'firstItem',
  belongsToCategoriesInMenu = 'belongsToCategoriesInMenu',
  generic = 'generic',
}

export const categoryItemLocationsArray = [
  categoryItemLocationsEnum.firstItem,
  categoryItemLocationsEnum.belongsToCategoriesInMenu,
  categoryItemLocationsEnum.generic,
];

export interface Product {
  name: string;
  image: string;
  actualQuantity: number;
  minQuantity: number;
  maxQuantity: number;
  unit: UnitTypes;
  comment: string;
  perishable?: boolean;
  productsExpirationRow?: ProductExpirationQuantityRow[];
}

export interface ProductExpirationQuantityRow {
  quantity: number;
  expirationDate: Date;
  timeLapse: timeIntervalsTypes;
  focusInput?: boolean;
}

export interface IProductRow extends Product {
  expandInfoDrawer: boolean;
}
export interface CategoryItem {
  name: string;
  icon: string;
  selected?: boolean;
}

export interface setProductListAttributeProps {
  allProducts: {
    get: IProductRow[];
    set: React.Dispatch<React.SetStateAction<IProductRow[]>>;
  };
  currentFilteredProducts: {
    get: IProductRow[];
    set: React.Dispatch<React.SetStateAction<IProductRow[]>>;
  };
  setProductList: React.Dispatch<React.SetStateAction<IProductRow[]>>;
}
