import { z } from "zod";

export const $service = z.object({
  id: z.number().optional(),
  teacherId: z.number(),
  name: z.string(),
  type: z.string(),
  price: z.number(),
  category: z.string(),
  duration: z.number(),
  frequency: z.string(),
  description: z.string(),
});

export type $Service = z.infer<typeof $service>;
