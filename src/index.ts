import { Hono } from "hono";
import { cors } from "hono/cors";
import serviceController from "./service/controller";
import userController from "./user/controller";

const app = new Hono();

app.use("*", cors());

app.get("/", (c) => c.text("Hello World!"));

app.get("/user/:id", userController.getUnique);
app.get("/user/service/:id", userController.getAllByServiceId);

app.get("/service", serviceController.getAll);
app.get("/service/:id", serviceController.getUnique);

app.put("/user/:id", userController.update);
app.put("/service/:id", serviceController.update);

app.post("/user", userController.create);
app.post("/service", serviceController.create);

app.delete("/user/:id", userController.delete);
app.delete("/service/:id", serviceController.delete);

export default app;
