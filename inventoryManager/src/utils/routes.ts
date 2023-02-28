enum Routes {
  Login = 'Login',
  SignUp = 'SignUp',
  Example = 'Example',
}
export type TRoutes = keyof typeof Routes
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
export const outsideMainRoutes = [Routes.Login, Routes.SignUp] as string[];

export default Routes;
