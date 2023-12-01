import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import db from "../db";
import { $user } from "./schema";
import service from "./service";

export default {
  async create(ctx: Context) {
    const body = await ctx.req.json();
    const parse = $user.safeParse(body);
    if (parse.success) {
      const user = await service.register(parse.data);
      return ctx.json(user);
    } else return ctx.text(parse.error.message, 500);
  },
  getUnique(ctx: Context) {
    const { email, password } = ctx.req.param();
    const user = service.login({ email, password });
    return ctx.json(user);
  },
  getAllByServiceId(ctx: Context) {
    const id = ctx.req.query("serviceId");
    const users = db.contract.findMany({
      where: { serviceId: Number(id) },
      select: { user: true },
    });
    return ctx.json(users);
  },
  async update(ctx: Context) {
    try {
      const { id } = ctx.req.param();
      const user = db.user.update({
        where: { id: Number(id) },
        data: await ctx.req.json(),
      });
      return ctx.json(user);
    } catch (error) {
      throw new HTTPException(500, { message: "Error al actualizar" });
    }
  },
  async delete(ctx: Context) {
    const { id, email, password } = ctx.req.param();
    await service.login({ email, password });
    await db.user.delete({ where: { id: Number(id) } });
    return ctx.text("Usuario eliminado", 200);
  },
};
