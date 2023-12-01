import { z } from "zod";

export const $user = z.object({
  name: z
    .string()
    .trim()
    .min(3, "El nombre debe tener minimo 3 letras")
    .max(30, "El nombre debe tener minimo 3 letras"),
  lastname: z.string().trim(),
  phone: z.string().trim().min(10, "El telefono debe tener minimo 10 numeros"),
  email: z.string().trim().email("El email no es valido"),
  password: z
    .string()
    .trim()
    .min(6, "La contraseña debe tener minimo 6 caracteres")
    .max(12, "La contraseña debe tener maximo 12 caracteres"),
});

export type $User = z.infer<typeof $user>;
