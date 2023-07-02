export enum AllRoutes {
  Login = 'Login',
  SignUp = 'SignUp',
  ManagementDashboard = 'ManagementDashboard',
  InventoryDashboard = 'InventoryDashboard',
  Group = 'Group',
  Inventory = 'Inventory',
  Account = 'Account',
}
export type TAllRoutes = keyof typeof AllRoutes;

export enum AuthRoutes {
  Login = 'Login',
  SignUp = 'SignUp',
}
export type TAuthRoutes = keyof typeof AuthRoutes;

export enum ManagementRoutes {
  ManagementDashboard = 'ManagementDashboard',
  Group = 'Group',
  Inventory = 'Inventory',
  Account = 'Account',
}
export type TManagementRoutes = keyof typeof ManagementRoutes;

export enum InventoryRoutes {
  InventoryDashboard = 'InventoryDashboard',
  Account = 'Account',
}
export type TInventoryRoutes = keyof typeof InventoryRoutes;

export enum NoNavigationBarRoutes {
  Dashboard = 'Dashboard',
}
export type TNoNavigationBarRoutes = keyof typeof NoNavigationBarRoutes;

export const outsideMainRoutes = [
  AuthRoutes.Login,
  AuthRoutes.SignUp,
] as string[];

/*
  DASHBOARD = '/dashboard',
  EDITOR = '/editor',
  ACCOUNT = '/account',
  SHOPPING_CART = '/shopping-cart',
  EDIT_INVENTORY = '/inventory-edit',
  NEW_INVENTORY = '/inventory-new',
  INVENTORY_LIST = '/inventory-list',
  GROUP_LIST = '/group-list',
  EDIT_GROUP = '/group-edit',
  NEW_GROUP = '/group-new',
  GROUP_INVITATIONS = '/group-invitations',
  TESTING_AREA = '/testing-area',

*/
