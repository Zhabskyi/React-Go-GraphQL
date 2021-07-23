import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Match, MatchParams } from "../model/Interfaces";
import { Movie } from "./Movies";

interface Props extends RouteComponentProps {
  match: Match<MatchParams>;
}

const OneMovie = (props: Props) => {
  const [movie, setMovie] = useState<Movie | undefined>(undefined);

  useEffect(() => {
    setMovie({
      id: props.match.params.id,
      title: "Some movie",
      runtime: 150
    });
  }, [props.match.params.id]);

  return (
    <>
      <h2>
        Movie: {movie?.title} {movie?.id}
      </h2>

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
              <strong>Run time:</strong>
            </td>
            <td>{movie?.runtime} minutes</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default OneMovie;
