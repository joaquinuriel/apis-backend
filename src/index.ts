import { Hono } from "hono";
import { cors } from "hono/cors";
import userController from "./user/controller";

const app = new Hono();

app.use("*", cors());

app.get("/", (c) => c.text("Hello World!"));

// app.get("/user", userController.getAll);
app.get("/user:id", userController.getUnique);

app.put("/user:id", userController.update);

app.post("/user", userController.create);

app.delete("/user:id", userController.delete);

export default app;
