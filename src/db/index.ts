// import { Database } from "bun:sqlite";
// export default new Database("db.sqlite");
import { PrismaClient } from "@prisma/client";

export default new PrismaClient();

