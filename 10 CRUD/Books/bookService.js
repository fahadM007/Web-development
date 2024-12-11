//function used to create the resource 
const createBook = async (book) => {
  book.id = crypto.randomUUID();

  const kv = await Deno.openKv();
  await kv.set(["books", book.id], book);
};



//function use to list books from the database 
const listBooks =async () => {
  const kv = await Deno.openKv();
  const bookEntries = await kv.list({ prefix: ["books"] });
  //add the books in an array
  const books = [];
  for await (const entry of bookEntries) {
    books.push(entry.value);
  }

  return books;

};


const getBook = async (id) => {
  const kv = await Deno.openKv();
  const todo = await kv.get(["books", id]);
  return todo?.value ?? {};
};

const updateBook = async (id, book) => {
  book.id = id;
  const kv = await Deno.openKv();
  await kv.set(["books", id], book);
}

const deleteBook = async (id) => {
  const kv = await Deno.openKv();
  await kv.delete(["books", id]);
};





export { listBooks,createBook,getBook,updateBook,deleteBook};