import { getApiClient } from '../api/index';

// courses
export const getCourses = async () => {
  const api = getApiClient();
  console.log(api);
  return (await api.get('lms/courses')).data;
};
export const FetchCourseQuery = () => ({
  queryKey: ['courses'] as const,
  queryFn: getCourses,
});




