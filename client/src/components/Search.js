import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Search from "./search/Search";
import SearchHeader from "./header/SearchHeader";
import "../App.css";
import Axios from "axios";

const SearchResult = (props) => {
  //get the search params from the url
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const service = searchParams.get("service");
  const town = searchParams.get("town");

  //fetch the data from the server
  const [suggestions, setSuggestions] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get(
          `http://localhost:3001/search?service=${service}&town=${town}`
        );
        console.log(res.data);
        setSuggestions(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, [service, town]);

  return (
    <div className="App">
      <SearchHeader></SearchHeader>
      <Search data={suggestions} town={town}></Search>
    </div>
  );
};

export default SearchResult;
