import React from "react";
import Meta from "../../components/Meta";
import SearchForm from "./../../components/Form/Form";

const SearchPage = () => {
  return (
    <>
      <Meta
        title="Search"
        canonical='/search'
        meta={{
          name: "description",
          content: "Search for repositories & users",
        }}
      />
      <SearchForm />
    </>
  );
};

export default SearchPage;
