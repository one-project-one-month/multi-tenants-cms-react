import { FetchCourseQuery } from './../../../../../packages/data/src/lms-dashboard-query/query';
import { createApiClient, setApiClient } from './../../../../../packages/data/src/api/index';

import { queryClient } from '../../lib/queryClient';

setApiClient(createApiClient(import.meta.env.VITE_BACKEND_SERVER));

export const CourseLoader = async () => {
  await queryClient.ensureQueryData(FetchCourseQuery());
};

