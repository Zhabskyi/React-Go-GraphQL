import React, { useState } from "react";
import { Movie } from "./Movies";

const EditMovie = () => {
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  return (
    <>
      <h2>Add/Edit Movie</h2>
      <hr />
      <form action="post">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="title" name="title" value={movie?.title ? movie.title : ""} />
        </div>
        <div className="mb-3">
          <label htmlFor="release-date" className="form-label">
            Release Date
          </label>
          <input
            type="text"
            className="form-control"
            id="release-date"
            name="release-date"
            value={movie?.title ? movie.title : ""}
          />
        </div>
      </form>
    </>
  );
};

export default EditMovie;
