import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { sendFormToAdmin } from "./services/sendFormToAdmin.ts";
import type { FormData } from "./models/forms.ts";
// import { type RouterContext } from "https://deno.land/x/oak@v12.6.1/router.ts";

const router = new Router();

router.post("/forms/contact", async (ctx) => {
  const body = ctx.request.body();
  const formData: FormData = await body.value;
  const name = await sendFormToAdmin(formData);
  ctx.response.body = { name };
});

const app = new Application();
app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
