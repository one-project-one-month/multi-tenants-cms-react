import { FetchOwnerQuery } from '@cms/data';
import { createApiClient, setApiClient } from '@cms/data';

import { queryClient } from '../../lib/queryClient';

setApiClient(createApiClient(import.meta.env.VITE_BACKEND_SERVER));

export const OwnerLoader = async () => {
  await queryClient.ensureQueryData(FetchOwnerQuery());
};
