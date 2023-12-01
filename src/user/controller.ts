import { Context } from "hono";
import schema from "./schema";
import db from "../db";

export default {
  // getAll: (c: Context) => c.json({ message: "get all users" }),
  create: (c: Context) => {
    const parse = schema.safeParse(c.body);
		if (parse.success) {
			db.user.create(parse.data)
		} else {
			c.
			c.error(parse.error)
		}
    return c.json({ message: "create user" });
  },
  getUnique: (c: Context) => c.json({ message: "get unique user" }),
};
