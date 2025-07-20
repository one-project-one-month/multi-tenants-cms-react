import { z } from 'zod';

export interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  instructor: string;
  createdAt: string; // ISO date string
}

export const CourseSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  instructor: z.string(),
  createdAt: z.string() // optionally use `.datetime()` for validation
});
