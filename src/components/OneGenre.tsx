import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import { getGenreNameFromUrl } from "../utilities";
import { Movie } from "./Movies";

const OneGenre = () => {
  const { id } = useParams<{ id: string }>();
  let location = useLocation();
  const [movies, setMovies] = useState<Movie[]>([]);

  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [genreName, setGenreName] = useState<string | undefined>("");
  console.log("props.location", location);
  console.log("id", id);
  console.log("genreName", genreName);

  useEffect(() => {
    fetch(`http://localhost:8080/v1/movies/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setMovies([...json.movies]);
        setIsLoaded(true);
        setGenreName(getGenreNameFromUrl(location));
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(true);
      });
  }, [id, location]);

  return (
    <>
      <h2>Genre: {genreName}</h2>
      {error && <div>Something went wrong...</div>}
      {!isLoaded ? (
        <p>Loading...</p>
      ) : (
        <div className="list-group">
          {movies.map((movie) => (
            <Link to={`/movies/${movie.id}`} key={movie.id} className="list-group-item list-group-item-action">
              {movie.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default OneGenre;
