import {create} from 'zustand';
import {TUser} from '../../types/user';

const initialUser: TUser = {
  displayName: undefined,
  email: null,
  phoneNumber: null,
  photoURL: null,
  providerId: '',
  uid: '',
  token: '',
};

type UserStore = {
  user: TUser;
  setUser: (payload: Partial<TUser>) => void;
};

const useUserStore = create<UserStore>(set => ({
  user: initialUser,
  setUser: payload => set(state => ({user: {...state.user, ...payload}})),
  resetUser: () => set({user: initialUser}),
}));

export default useUserStore;
