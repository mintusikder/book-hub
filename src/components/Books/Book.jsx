import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { id, img, bookName, author, totalEdition, publishYear } = book;

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm text-sm max-w-80">
      <img
        className="rounded-md max-h-40 w-full object-cover"
        src={
          img ||
          "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=400"
        }
        alt={bookName || "Book cover"}
      />
      <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">
        {bookName || "Untitled Book"}
      </p>
      <p className="text-gray-500 ml-2">
        Author: {author || "Unknown"}
      </p>
      <p className="text-gray-500 ml-2">
        Total Edition: {totalEdition || "N/A"}
      </p>
      <p className="text-gray-500 ml-2">
        Publish Year: {publishYear || "N/A"}
      </p>
      <Link
        to={`/read-more/${id}`}
        className="inline-block  bg-gray-300 hover:bg-gray-400transition-colors duration-200 mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded text-center"
      >
        Read More
      </Link>
    </div>
  );
};

export default Book;
