import { Application } from "https://deno.land/x/abc@v1.0.0-rc8/mod.ts";

const app = new Application();

// static files
app.static('/', './public');

// routes
app.get('/', async (ctx) => {
  await ctx.file('./public/index.html');
});

// listen to port
app.start({ port: 3000 });
console.log('server listening on port 3000');