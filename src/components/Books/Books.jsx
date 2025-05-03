import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Book from "./Book";

const Books = ({ searchQuery }) => {
  const allBooks = useLoaderData();
  const [visibleCount, setVisibleCount] = useState(8);

  // Filter books based on search query
  const filteredBooks = searchQuery
    ? allBooks.filter((book) =>
        book.bookName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allBooks;

  const handleSeeMore = () => {
    setVisibleCount(filteredBooks.length); // Show all matching books
  };

  // Reset visible count when search changes
  React.useEffect(() => {
    setVisibleCount(8);
  }, [searchQuery]);

  return (
    <div className="w-11/12 mx-auto py-12">
      <h2 className="font-bold text-2xl mb-6">
        {searchQuery ? `Search Results for "${searchQuery}"` : "Latest Books"}
      </h2>

      {filteredBooks.length === 0 ? (
        <p className="text-center text-gray-500">
          No books found matching your search.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredBooks.slice(0, visibleCount).map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </div>

          {visibleCount < filteredBooks.length && (
            <div className="text-center mt-8">
              <button
                onClick={handleSeeMore}
                className="inline-block bg-gray-300 hover:bg-gray-400 transition-colors duration-200 mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded text-center"
              >
                See More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Books;
