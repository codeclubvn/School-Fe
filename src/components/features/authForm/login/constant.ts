import { z } from 'zod';

export const loginFormSchema = z.object({
  username: z.string().min(1, {
    message: 'User name is required',
  }),
  password: z
    .string()
    .refine((value) => value.trim().length > 0, {
      message: 'Password is required',
    })
    .refine((value) => value.trim().length >= 6, {
      message: 'Password must be at least 6 characters',
    }),
});
