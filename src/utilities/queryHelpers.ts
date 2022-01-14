import * as H from "history";
const queryString = require("query-string");

export const getGenreNameFromUrl = (path: H.Location<unknown>): string => {
  console.log("path", path);
  const queryParams = queryString.parse(path.search);
  return queryParams.genreName;
};
