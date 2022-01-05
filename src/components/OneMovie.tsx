import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Match, MatchParams } from "../model/Interfaces";
import { Movie } from "./Movies";

interface Props extends RouteComponentProps {
  match: Match<MatchParams>;
}

const OneMovie = (props: Props) => {
  const [movie, setMovie] = useState<Movie | undefined>(undefined);

  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch(`http://localhost:8080/v1/movie/${props.match.params.id}`)
      .then((res) => res.json())
      .then((json) => {
        let movie = { ...json.movie };
        if (json.movie.genres) {
          movie.genres = Object.values(json.movie.genres);
        } else {
          movie.genres = [];
        }
        movie.mpaaRating = json.movie.mpaa_rating;
        setMovie(movie);
        setIsLoaded(true);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(true);
      });
  }, [props.match.params.id]);

  return (
    <>
      {error && <div>Something went wrong...</div>}
      <h2>
        Movie: {movie?.title} {`(${movie?.year})`}
      </h2>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="float-start">
            <small>Rating: {movie?.mpaaRating}</small>
          </div>
          <div className="float-end">
            {movie?.genres &&
              movie?.genres.map((genre, index) => (
                <span className="badge bg-secondary me-1" key={index}>
                  {genre}
                </span>
              ))}
          </div>
          <div className="clearfix"></div>
          <hr />
          <table className="table table-compact table-striped">
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <strong>Title:</strong>
                </td>
                <td>{movie?.title}</td>
              </tr>
              <tr>
                <td>
                  <strong>Description:</strong>
                </td>
                <td>{movie?.description}</td>
              </tr>
              <tr>
                <td>
                  <strong>Run time:</strong>
                </td>
                <td>{movie?.runtime} minutes</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default OneMovie;
