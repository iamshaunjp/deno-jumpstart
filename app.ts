import { Application } from "https://deno.land/x/abc@v1.0.0-rc8/mod.ts";
import { 
  get_all_books,
  get_book,
  create_book,
  delete_book
} from './controllers/bookController.ts';


const app = new Application();

// static files
app.static('/', './public');

// routes
app.get('/', async (ctx) => {
  await ctx.file('./public/index.html');
});

app
  .get('/books', get_all_books)
  .get('/books/:id', get_book)
  .post('/books', create_book)
  .delete('/books/:id', delete_book);

// listen to port
app.start({ port: 3000 });
console.log('server listening on port 3000');
