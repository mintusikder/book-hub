import React from "react";
import { useLoaderData } from "react-router";
import Book from "./Book";

const Books = () => {
  const books = useLoaderData();

  return (
    <div div className="w-11/12 mx-auto py-12">
       <h2 className="font-bold text-2xl">Latest Books</h2>
      <div className="  grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
