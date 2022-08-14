import SearchIcon from "./search.svg";
import { useState } from "react";

const SearchBar = ({ searchMovies }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(searchTerm);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">
        <img src={SearchIcon} alt="search" />
      </button>
    </form>
  );
};

export default SearchBar;
