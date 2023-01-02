enum Routes {
  HOME = '/',
  LOGIN = '/login',
  DASHBOARD = '/dashboard',
  EDITOR = '/editor',
  ACCOUNT = '/account',
  SHOPPING_CART = '/shopping-cart',
  SIGNUP = '/signup',
  EDIT_INVENTORY = '/inventory-edit',
  NEW_INVENTORY = '/inventory-new',
  INVENTORY_LIST = '/inventory-list',
  GROUP_LIST = '/group-list',
  EDIT_GROUP = '/group-edit',
  NEW_GROUP = '/group-new',
  GROUP_INVITATIONS = '/group-invitations',
  TESTING_AREA = '/testing-area',
}

export const outsideMainRoutes = [Routes.HOME, Routes.LOGIN, Routes.SIGNUP];

export default Routes;
