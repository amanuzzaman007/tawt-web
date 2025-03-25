import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is requird.",
  }),
  password: z.string().min(1, { message: "password is required." }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is requird.",
  }),
  password: z.string().min(6, { message: "Minimum 6 characters required!" }),
  name: z.string().min(1, {
    message: "Name is required.",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is requird.",
  }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, { message: "Minimum 6 characters required!" }),
});
