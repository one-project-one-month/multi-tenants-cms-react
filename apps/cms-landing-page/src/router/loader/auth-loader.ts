import { getApiClient } from '@cms/data';
import useAuthStore from '../../store/auth-store';
import { authApi } from '../action/auth-action';
import { redirect } from 'react-router';

type User = {
  name: string;
  email: string;
};

export const AuthLoader = async () => {
  const api = getApiClient();
  const res = await api.get('me');

  if (res.status === 401) {
    return [];
  }
  const user: User = res.data;
  useAuthStore.getState().setAuth(user.name, user.email);
  return user;
};

export const loginLoader = async () => {
  try {
    const response = await authApi.get('me');
    if (response.status !== 200) {
      return null;
    }
    return redirect('/');
  } catch (error) {
    console.log('Loader error:', error);
  }
};
