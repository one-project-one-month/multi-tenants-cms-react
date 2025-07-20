import { CMSAuth, CMSMFASetup } from 'src/types/auth.js';
import { getApiClient } from '../api/index.js';

export const RegisterCMSAccount = async (data: CMSAuth) => {
  const client = getApiClient();
  return (
    await client.post('auth/register', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).data;
};

export const MFaSetUp = async (data: CMSMFASetup) => {
  const cliennt = getApiClient();
  return (
    await cliennt.post(
      `auth/mfa/verify/${data.user_id}`,
      {
        token_id: data.token_id,
        code: data.code,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    )
  ).data;
};

export const getMfaSetup = async (userId: string) => {
  const client = getApiClient();
  return (await client.post(`auth/mfa/setup/${userId}`)).data;
};
