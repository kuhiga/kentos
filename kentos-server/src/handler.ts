import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

export const handler = async (req) => {
  const router = new Router();
  router
    .get("/", (context) => {
      context.response.body = "Welcome to kentos API!";
    })
    .get("/api", (context) => {
      context.response.body = "this is api";
    });
  const app = new Application();
  app.use(router.routes());
  app.use(router.allowedMethods());
  return app;
};
