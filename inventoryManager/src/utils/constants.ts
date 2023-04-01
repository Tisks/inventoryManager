import { FC } from 'react';
import Login from '../views/Authentication/Login';
import SignUp from '../views/Authentication/SignUp';
import Dashboard from '../views/Inventory/Dashboard';
import { AllRoutes, AuthRoutes, InventoryRoutes } from './routes';

export const allRouteAndComponent: Record<
  AllRoutes,
  {component: FC<any>; icon: string}
> = {
  Login: {component: Login, icon: ''},
  SignUp: {component: SignUp, icon: ''},
  Dashboard: {component: Dashboard, icon: ''},
};

export const authRouteAndComponent: Record<AuthRoutes, any> = {
  Login: Login,
  SignUp: SignUp,
};

export const inventoryRouteAndComponent: Record<InventoryRoutes, any> = {
  Dashboard: Dashboard,
};

export const providerNames = {
  Google: 'Google',
  Twitter: 'Twitter',
  Facebook: 'Facebook',
};

export type TProviderNames = keyof typeof providerNames;
