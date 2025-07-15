import { getApiClient } from '../api/index.js';

export const getOwners = async () => {
  const api = getApiClient();
  return (await api.get('/cms/owners')).data;
};

export const FetchOwnerQuery = () => ({
  queryKey: ['owners'] as const,
  queryFn: getOwners,
});
