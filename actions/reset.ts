"use server";

import * as z from "zod";

import { ResetSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { generatePasswordResetToken } from "@/lib/tokens";
import { sendPasswordResetEmail } from "@/lib/mail";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Email inválido" };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    console.log(existingUser);
    return { error: "Email não econtrado" };
  }

  const passwordResetTOken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(
    passwordResetTOken.email,
    passwordResetTOken.token
  );

  return { success: "Email de alteração enviado" };
};
