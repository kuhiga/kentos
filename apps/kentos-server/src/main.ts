import { Application, Router } from 'https://deno.land/x/oak@v12.6.1/mod.ts';
import { oakCors } from 'https://deno.land/x/cors@v1.2.2/mod.ts';
import { sendFormToAdmin } from './services/sendFormToAdmin.ts';
import type { AnalyticsData, FormData } from '@kentos/libs';

const router = new Router();

router.post('/forms/contact', async (ctx) => {
  const body = ctx.request.body();
  const formData: FormData = await body.value;
  const res = await sendFormToAdmin(formData);
  ctx.response.body = { res };
});

router.post('/analytics', async (ctx) => {
  const body = ctx.request.body();
  const analyticsData: AnalyticsData = await body.value;
  // const res = await sendFormToAdmin(formData);
  // ctx.response.body = { res };
});

const app = new Application();
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
