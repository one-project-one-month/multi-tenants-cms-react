import { authApi } from '../action/auth-action';
import { redirect } from 'react-router';
import { useRegistrationStore } from '../../store/register-store';

// export const AuthLoader = async () => {
//   const api = getApiClient();
//   const res = await api.get('me');

//   if (res.status === 401) {
//     return [];
//   }
//   const user: User = res.data;
//   useAuthStore.getState().setAuth(user.name, user.email);
//   return user;
// };

export const loginLoader = async () => {
  const { email } = useRegistrationStore.getState().data;
  if (!email) {
    return redirect('onboarding/register');
  }
  try {
    const response = await authApi.post('/auth/me', { email });
    console.log('response', response);
    if (response.status !== 200) {
      return null;
    }
    return redirect('onboarding/register');
  } catch (error: any) {
    if (error) {
      return redirect('onboarding/register');
    }
    console.log('Loader error:', error);
  }
};
