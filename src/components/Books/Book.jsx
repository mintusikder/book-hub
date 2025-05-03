import React from "react";

const Book = ({ book }) => {
  const { img, bookName, author, totalEdition, publishYear } = book;
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm text-sm max-w-80">
      <img
        className="rounded-md max-h-40 w-full object-cover"
        src={
          book?.img ||
          "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=400"
        }
        alt={book?.title || "Book cover"}
      />
      <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">
        {book?.bookName || "Untitled Book"}
      </p>
      <p className="text-gray-500 mt-3 ml-2">
        Author : {book?.author || "No description available."}
      </p>
      <p className="text-gray-500 mt-3 ml-2">
        Total Edition : {book?.totalEdition || "No description available."}
      </p>
      <p className="text-gray-500 mt-3 ml-2">
        Publish Year : {book?.publishYear || "No description available."}
      </p>
      <button
        type="button"
        className="bg-indigo-500 mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded text-white"
      >
        Read More
      </button>
    </div>
  );
};

export default Book;
