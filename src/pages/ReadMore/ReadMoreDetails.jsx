import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const ReadMoreDetails = () => {
  const booksData = useLoaderData();
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    const bookDetails = booksData.find((b) => b.id == id);
    setBook(bookDetails || {});
  }, [booksData, id]);

  return (
    <div className="mt-6 grid md:grid-cols-2 max-w-4xl bg-white mx-4 md:mx-auto rounded-xl shadow-md overflow-hidden">
      {/* Image Section */}
      <img
        src={
          book?.img ||
          "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/newsletter/image.png"
        }
        alt={book?.bookName || "Book cover"}
        className="w-full h-64 md:h-auto object-cover md:rounded-l-xl"
      />

      {/* Content Section */}
      <div className="relative flex flex-col justify-center px-4 py-8 md:p-10 text-center">
  

        <div className="w-full">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {book?.bookName || "Untitled Book"}
          </h1>
          <p className="text-gray-600 mb-1">
            Author: {book?.author || "Unknown"}
          </p>
          <p className="text-gray-600 mb-1">
            Edition: {book?.totalEdition || "N/A"}
          </p>
          <p className="text-gray-600 mb-4">
            Published: {book?.publishYear || "N/A"}
          </p>
          <p className="text-gray-500 mb-6 text-sm">
            Subscribe to get updates on similar books, releases, and promotions!
          </p>
        </div>
              {/* Back Button for Mobile & Desktop */}
              <div className="flex justify-end md:justify-center mb-4">
          <button
            className="text-sm text-white bg-[#8D27AE] px-4 py-2 rounded-md  transition w-full md:w-auto"
            onClick={() => window.history.back()}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadMoreDetails;
