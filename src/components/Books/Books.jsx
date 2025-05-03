import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Book from "./Book";

const Books = () => {
  const books = useLoaderData();
  const [visibleCount, setVisibleCount] = useState(8);

  const handleSeeMore = () => {
    setVisibleCount(books.length); // Show all books
  };

  return (
    <div className="w-11/12 mx-auto py-12">
      <h2 className="font-bold text-2xl mb-6">Latest Books</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {books.slice(0, visibleCount).map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>

      {visibleCount < books.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleSeeMore}
            className="inline-block  bg-gray-300 hover:bg-gray-400transition-colors duration-200 mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded text-center"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Books;
