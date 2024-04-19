import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "E-mail é necessário",
  }),
  password: z.string().min(1, {
    message: "Senha é necessária",
  }),
});

