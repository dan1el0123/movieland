import MovieCard from "./MovieCard";

const MoviesContainer = ({ movies }) => {
  return (
    <div className="container">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.imdbID} />
      ))}
    </div>
  );
};

export default MoviesContainer;
