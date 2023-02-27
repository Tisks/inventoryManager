export type TCollection = keyof typeof Collection;

export enum Collection {
  Product = 'Product',
  User = 'User',
  Group = 'Group',
  User_Group = 'User_Group',
  Inventory = 'Inventory',
  Group_Inventory = 'Group_Inventory',
}
