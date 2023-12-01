import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { sendFormToAdmin } from "./services/sendFormToAdmin.ts";
import type { FormData } from "./models/forms.ts";

const router = new Router();

router.post("/forms/contact", async (context) => {
  const body = await context.request.body();
  console.log("Received Form Data:", JSON.stringify(body.value));

  const formData: FormData = body.value;

  const response = sendFormToAdmin(formData);
  context.response.body = response;
});

const app = new Application();
app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
