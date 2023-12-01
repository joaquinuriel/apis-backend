import { Context } from "hono";
import db from "../db";
import { $service } from "./schema";

export default {
  async create(ctx) {
    const body = await ctx.req.json();
    const parse = $service.safeParse(body);
    if (parse.success) {
      const service = db.service.create({ data: parse.data });
      return ctx.json(service);
    } else return ctx.text(parse.error.message, 500);
  },
  async getUnique(ctx) {
    const id = ctx.req.query("id");
    const service = db.service.findUnique({ where: { id: Number(id) } });
    if (service) return ctx.json(service);
    else return ctx.text("Servicio no encontrado", 404);
  },
  async getAll(ctx) {
    const services = db.service.findMany({
      where: JSON.parse(ctx.req.query("where") || "{}"),
    });
    return ctx.json(services);
  },
  async update(ctx) {
    const { id } = ctx.req.param();
    const service = db.service.update({
      where: { id: Number(id) },
      data: await ctx.req.json(),
    });
    return ctx.json(service);
  },
  async delete(ctx) {
    const { id } = ctx.req.param();
    await db.service.delete({ where: { id: Number(id) } });
    return ctx.text("Servicio eliminado", 200);
  },
} satisfies Record<string, (ctx: Context) => Promise<Response>>;
