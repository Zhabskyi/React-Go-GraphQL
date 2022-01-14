import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Props {}
interface GenreAPI {
  id: number;
  genre_name: string;
}

interface Genre {
  id: number;
  genreName: string;
}

const Genres = (props: Props) => {
  const [genres, setGenres] = useState<Genre[] | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch("http://localhost:8080/v1/genres")
      .then((res) => res.json())
      .then((json) => {
        setGenres(
          json.genres.map((item: GenreAPI) => ({
            id: item.id,
            genreName: item.genre_name
          }))
        );
        setIsLoaded(true);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(true);
      });
  }, []);

  return (
    <>
      <h2>Genres</h2>
      {error && <div>Something went wrong...</div>}
      {!isLoaded ? (
        <p>Loading...</p>
      ) : (
        <div className="list-group">
          {genres?.map((genre: Genre, index: number) => (
            <Link
              key={index}
              to={{
                pathname: `/genres/${genre.id}`,
                search: `?genreName=${genre.genreName}`
              }}
              className="list-group-item list-group-item-action"
            >
              {genre.genreName}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Genres;
