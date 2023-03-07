import Login from '../views/Authentication/Login';
import SignUp from '../views/Authentication/SignUp';
import Example from '../views/Inventory/Dashboard';
import Routes, {TRoutes} from './routes';

export const routeAndComponent: Record<TRoutes, any> = {
  Login: Login,
  SignUp: SignUp,
  Example: Example,
};

export const providerNames = {
  Google: 'Google',
  Twitter: 'Twitter',
  Facebook: 'Facebook'
}

export type TProviderNames = keyof typeof providerNames