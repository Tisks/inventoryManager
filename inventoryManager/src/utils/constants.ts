import Routes from './routes';

const tabName = (name: string) => name.slice(1, name.length);

export type tabRoute = {
  route: string;
  icon: string;
  label: string;
  tab: string;
};

export const emailPattern = `/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`;

export const emailRegex = RegExp(emailPattern);

export type tabRoutes = tabRoute[][];

export type TCollection = keyof typeof Collection;

export enum Collection {
  Product = 'Product',
  User = 'User',
  Group = 'Group',
  User_Group = 'User_Group',
  Inventory = 'Inventory',
  Group_Inventory = 'Group_Inventory',
}

export const inventoryTabList: tabRoute[] = [
  {
    route: Routes.DASHBOARD,
    icon: 'list',
    label: 'Dashboard',
    tab: tabName(Routes.DASHBOARD),
  },
  {
    route: Routes.SHOPPING_CART,
    icon: 'cart',
    label: 'Shopping Cart',
    tab: tabName(Routes.SHOPPING_CART),
  },
  {
    route: Routes.GROUP_INVITATIONS,
    icon: 'pencil',
    label: 'Editor',
    tab: tabName(Routes.GROUP_INVITATIONS),
  },
  {
    route: Routes.ACCOUNT,
    icon: 'person',
    label: 'Account',
    tab: tabName(Routes.ACCOUNT),
  },
  {
    route: Routes.GROUP_LIST,
    icon: 'tennisball',
    label: 'Group List',
    tab: tabName(Routes.GROUP_LIST),
  }, //testing component
  {
    route: Routes.NEW_GROUP,
    icon: 'tennisball',
    label: 'New group',
    tab: tabName(Routes.NEW_GROUP),
  }, //testing component
];

export const managementTabList: tabRoute[] = [
  {
    route: Routes.INVENTORY_LIST,
    icon: 'list',
    label: 'Inventory list',
    tab: tabName(Routes.INVENTORY_LIST),
  },
  {
    route: Routes.EDIT_INVENTORY,
    icon: 'cart',
    label: 'Edit inventories',
    tab: tabName(Routes.EDIT_INVENTORY),
  },
  {
    route: Routes.EDIT_GROUP,
    icon: 'pencil',
    label: 'Edit groups',
    tab: tabName(Routes.EDIT_GROUP),
  },
  {
    route: Routes.NEW_INVENTORY,
    icon: 'person',
    label: 'Account',
    tab: tabName(Routes.NEW_INVENTORY),
  },
];

export const initialTabListRecord: tabRoutes = [
  inventoryTabList,
  managementTabList,
];
