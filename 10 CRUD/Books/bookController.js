import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";

import * as bookService from "./bookService.js";


const eta = new Eta({ views: `${Deno.cwd()}/templates/` });


const showForm = async (c) => c.html(eta.render("books.eta", {books: await bookService.listBooks()}));

const createBook = async (c) => {
  const body = await c.req.parseBody();
  //console.log(body);
  await bookService.createBook(body);
  return c.redirect("/books")}

  const showBook = async (c) => {
    const id = c.req.param("id");
  return c.html(
    eta.render("book.eta", { book: await bookService.getBook(id) }),
  )};

  const updateBook = async (c) => {
    const id = c.req.param("id");
    const body = await c.req.parseBody();
    await bookService.updateBook(id, body);
    return c.redirect(`/books/${id}`);
  };

  const deleteBook = async (c) => {
    const id = c.req.param("id");
    await bookService.deleteBook(id);
    return c.redirect("/books");
  };

export { showForm  ,createBook,showBook,updateBook,deleteBook};