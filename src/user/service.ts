import { HTTPException } from "hono/http-exception";
import db from "../db";
import type { $User } from "./schema";

export default {
  async login(user: Partial<$User>) {
    const { email, password } = user as $User;
    try {
      const { hash, ...data } = await db.user.findUniqueOrThrow({
        where: { email },
      });
      const isMatch = await Bun.password.verify(password, hash);
      if (isMatch) return data;
      else throw new HTTPException(500, { message: "Contraseña invalida" });
    } catch (error) {
      throw new HTTPException(404, { message: "Usuario no encontrado" });
    }
  },

  async register(user: $User) {
    const hash = await Bun.password.hash(user.password);
    return await db.user.create({ data: { ...user, hash } });
  },
};
