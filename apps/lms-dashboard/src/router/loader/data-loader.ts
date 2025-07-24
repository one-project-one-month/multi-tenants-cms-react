import { FetchEnrollmentQuery } from './../../../../../packages/data/src/lms-dashboard-query/query';
import { queryClient } from '../../lib/queryClient';
import { createApiClient, setApiClient } from './../../../../../packages/data/src/api/index';
setApiClient(createApiClient(import.meta.env.VITE_BACKEND_SERVER))

export const EnrollmentLoader = async () => {
  await queryClient.ensureQueryData(FetchEnrollmentQuery())
}