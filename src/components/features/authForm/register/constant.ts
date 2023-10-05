import { z } from 'zod';

export const registerFormSchema = z.object({
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
  firstname: z.string().min(1, {
    message: 'First name is required',
  }),

  lastname: z.string().min(1, {
    message: 'Last name is required',
  }),
  email: z.string().min(1, {
    message: 'Email is required',
  }),
});
