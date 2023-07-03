import {FC} from 'react';
import {
  AllRoutes,
  AuthRoutes,
  InventoryRoutes,
  ManagementRoutes,
} from '../routes';
import Account from '../views/Authentication/Account';
import Login from '../views/Authentication/Login';
import SignUp from '../views/Authentication/SignUp';
import {InventoryDashboard} from '../views/Inventory/Dashboard';
import {ManagementDashboard} from '../views/Management/Dashboard';
import Group from '../views/Management/Group';
import Inventory from '../views/Management/Inventory';

export const allRouteAndComponent: Record<
  AllRoutes,
  {component: FC<any>; icon: string}
> = {
  Login: {component: Login, icon: ''},
  SignUp: {component: SignUp, icon: ''},
  InventoryDashboard: {component: InventoryDashboard, icon: 'clipboard-list'},
  ManagementDashboard: {
    component: ManagementDashboard,
    icon: 'clipboard-list',
  },
  Group: {
    component: Group,
    icon: 'people-carry',
  },
  Inventory: {
    component: Inventory,
    icon: 'square',
  },
  Account: {
    component: Account,
    icon: 'user',
  },
};

export const authRouteAndComponent: Record<AuthRoutes, any> = {
  Login,
  SignUp,
  Account,
};

export const inventoryRouteAndComponent: Record<InventoryRoutes, any> = {
  InventoryDashboard,
};

export const managementRouteAndComponent: Record<ManagementRoutes, any> = {
  ManagementDashboard,
  Group,
  Inventory,
};

export const providerNames = {
  Google: 'Google',
  Twitter: 'Twitter',
  Facebook: 'Facebook',
};

export type TProviderNames = keyof typeof providerNames;
