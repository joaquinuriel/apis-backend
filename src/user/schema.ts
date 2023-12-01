import { z } from "zod";

export default z.object({
  name: z
    .string()
    .min(3, "El nombre debe tener minimo 3 letras")
    .max(30, "El nombre debe tener minimo 3 letras"),
  email: z.string().email("El email no es valido"),
  password: z
    .string()
    .min(6, "La contraseña debe tener minimo 6 caracteres")
    .max(12, "La contraseña debe tener maximo 12 caracteres"),
});
