// // uuid module
import { v4 } from "https://deno.land/std/uuid/mod.ts";

const uid = v4.generate();
console.log(uid);

// // fs module
import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts";

const jsonObj = await readJson('ninjas.json');
console.log(jsonObj);

const books = [
  { title: 'the way of kings', author: 'brandon sanderson' },
  { title: 'name of the wind', author: 'patrick rothfuss' },
];

await writeJson('books.json', books, { spaces: 2 });
console.log('created books.json');

// http module (server)
import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 3000 });
console.log('listening for requests on port 3000');

for await (const req of server) {
  req.respond({ body: `Hello again Ninjas, you visited ${req.url}` });
}
