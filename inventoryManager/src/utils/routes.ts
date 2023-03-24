export enum AllRoutes {
  Login = 'Login',
  SignUp = 'SignUp',
  Dashboard = 'Dashboard',
}
export type TAllRoutes = keyof typeof AllRoutes;

export enum AuthRoutes {
  Login = 'Login',
  SignUp = 'SignUp',
}
export type TAuthRoutes = keyof typeof AuthRoutes;

export enum ManagementRoutes {}
export type TManagementRoutes = keyof typeof ManagementRoutes;

export enum InventoryRoutes {
  Dashboard = 'Dashboard',
}
export type TInventoryRoutes = keyof typeof InventoryRoutes;

export enum NoNavigationBarRoutes {
  Dashboard = 'Dashboard',
}
export type TNoNavigationBarRoutes = keyof typeof NoNavigationBarRoutes;

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
export const outsideMainRoutes = [
  AuthRoutes.Login,
  AuthRoutes.SignUp,
] as string[];
