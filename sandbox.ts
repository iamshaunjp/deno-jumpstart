// reading files

const decoder = new TextDecoder("utf-8");

// const data = await Deno.readFile('readme.txt');
// console.log(decoder.decode(data));

// const data = await Deno.readTextFile('readme.txt');
// console.log(data);

// writing files

const encoder = new TextEncoder();
const text = encoder.encode('hello again, ninjas');

await Deno.writeFile('readme.txt', text);
await Deno.writeFile('readme.txt', text, { append: true });

// renaming & deleting files

await Deno.rename('readme.txt', 'deleteme.txt');
await Deno.remove('deleteme.txt');

// fetch api

const res = await fetch('https://swapi.dev/api/films/');
const data = await res.json();
console.log(data);