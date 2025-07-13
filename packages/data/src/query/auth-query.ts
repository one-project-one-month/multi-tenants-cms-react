import { CMSAuth } from 'src/types/auth.js';
import { getApiClient } from '../api/index.js';

export const RegisterCMSAccount = async (data: CMSAuth) => {
  const client = getApiClient();
  return (
    await client.post('/auth/register', data, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
  ).data;
};
