import { getApiClient } from '../api/index';

// courses
export const getCourses = async () => {
  const api = getApiClient();
  return (await api.get('/courses')).data;
};

export const FetchCourseQuery = () => ({
  queryKey: ['courses'] as const,
  queryFn: getCourses,
});



