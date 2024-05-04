import { UserRole } from "@prisma/client";
import * as z from "zod";

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "Nova senha é necessária!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Senha é necessária!",
      path: ["password"],
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Mínimo de 6 caracteres necessários",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "E-mail é necessário",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "E-mail é necessário",
  }),
  password: z.string().min(1, {
    message: "Senha é necessária",
  }),
  code: z.optional(
    z.string().length(6, {
      message: "O código deve conter 6 números",
    })
  ),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "E-mail é necessário",
  }),
  name: z.string().min(4, {
    message: "Mínimo de 4 caracteres necessários",
  }),
  password: z.string().min(6, {
    message: "Mínimo de 6 caracteres necessários",
  }),
});
