import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com?apikey=4cff05c8";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let controller = new AbortController();
    const searchMovies = async (title) => {
      try {
        const response = await fetch(`${API_URL}&s=${title}`, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Failed to get response");
        const data = await response.json();
        setMovies(data.Search);
      } catch (err) {
        console.log(err.message);
      }
    };

    searchMovies("Spiderman");

    return () => controller.abort();
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

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
