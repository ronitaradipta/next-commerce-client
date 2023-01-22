import React from "react";
import { useParams } from "react-router-dom";

const SearchResults = () => {
  const { param } = useParams();

  return (
    <>
      <div>Ini Halaman Search Results dari kata kunci {param}</div>
    </>
  );
};

export default SearchResults;
