import { getApiClient } from "src/api"

export const getEnrollments = async () => {
  const api = getApiClient();
  return (await api.get('/enrollments')).data
}

export const FetchEnrollmentQuery = () => ({
  queryKey : ['enrollments'] as const,
  queryFn: getEnrollments,
})

export const getCourses = async () => {
  const api = getApiClient();
  return (await api.get('/courses')).data;
};

export const FetchCourseQuery = () => ({
  queryKey: ['courses'] as const,
  queryFn: getCourses,
});
