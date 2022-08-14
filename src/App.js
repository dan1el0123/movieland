import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

const API_URL = "https://www.omdbapi.com?apikey=4cff05c8";

function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      if (!response.ok) throw new Error("Failed to get response");
      const data = await response.json();
      setMovies(data.Search);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <SearchBar searchMovies={searchMovies} />

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
