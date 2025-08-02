import { getApiClient } from '../api/index.js';

// category
export const getCategory = async () => {
  const api = getApiClient();
  return (await api.get('/categories', {})).data;
};

export const FetchCategoryQuery = () => ({
  queryKey: ['category'] as const,
  queryFn: getCategory,
});
