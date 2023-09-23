import { z } from 'zod';

export const forgotPasswordFormSchema = z
  .object({
    email: z.string().min(1, {
      message: 'Email is required',
    }),
    password: z
      .string()
      .refine((value) => value.trim().length > 0, {
        message: 'Password is required',
      })
      .refine((value) => value.trim().length >= 6, {
        message: 'Password must be at least 6 characters',
      }),
    confirmpassword: z
      .string()
      .refine((value) => value.trim().length > 0, {
        message: 'Confirm password is required',
      })
      .refine((value) => value.trim().length >= 6, {
        message: 'Confirm password must be at least 6 characters',
      }),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: 'Password and confirm password must match',
    path: ['confirmpassword'], // path of error
  });
