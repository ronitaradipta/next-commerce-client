import React from "react";
import { useParams } from "react-router-dom";

const SearchResults = () => {
  const { query } = useParams();

  return (
    <>
      <div className="container py-6 px-5 mx-auto">
        Ini Halaman Search Results dari kata kunci {query}
      </div>
    </>
  );
};

export default SearchResults;
