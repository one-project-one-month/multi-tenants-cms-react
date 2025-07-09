import { z } from 'zod';

export interface OwnerType {
  id: string;
  name: string;
  email: string;
  role: ROLE;
  name_space: string;
  verified?: boolean;
  request: number;
  request_page: number;
}

export interface OwnerDataType {
  id: string;
  name: string;
  email: string;
  role: ROLE;
  name_space: string;
}

export const OwnerSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  name_space: z.string(),
  role: z.enum(['CMS_CUSTOMER', 'CMS_ADMIN']),
});

export interface OwnerCRUDType {
  name: string;
  name_space?: string | null;
  email: string;
  role?: ROLE;
}

export type ROLE = 'CMS_CUSTOMER' | 'CMS_ADMIN';
