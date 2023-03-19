export type TCollection = keyof typeof Collection;

export enum Collection {
  Product = 'Product',
  User = 'User',
  Group = 'Group',
  Category = 'Category',
  User_Group = 'User_Group',
  Inventory = 'Inventory',
  Group_Inventory = 'Group_Inventory',
}
