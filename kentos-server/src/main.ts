import { handler } from "./handler";

const port = Number(Deno.env.get("PORT") || 4202);
Deno.serve({ port }, handler);
