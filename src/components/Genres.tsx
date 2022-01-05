import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Props {}

const Genres = (props: Props) => {
  const [genres, setGenres] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch("http://localhost:8080/v1/genres")
      .then((res) => res.json())
      .then((json) => {
        setGenres([...json.genres]);
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
      <ul>
        {genres?.map((genre: any, index: number) => (
          <li key={index}>
            <Link to={`/genre/${genre.id}`}>{genre.genreName}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Genres;
