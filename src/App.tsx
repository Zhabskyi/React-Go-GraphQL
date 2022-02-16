import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Movies from "./components/Movies";
import Admin from "./components/Admin";
import Home from "./components/Home";
import OneMovie from "./components/OneMovie";
import Genres from "./components/Genres";
import OneGenre from "./components/OneGenre";
import EditMovie from "./components/EditMovie";
import { usePrevious } from "./utilities/usePrevious";

export default function App() {
  const [item, setItem] = useState<null | string>(null);
  usePrevious(item);

  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">Go Watch a Movie!</h1>
          <hr className="mb-3"></hr>
        </div>

        <div className="row">
          <div className="col-md-3">
            <nav>
              <ul className="list-group">
                <li className="list-group-item" onClick={() => setItem("Home")}>
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item" onClick={() => setItem("Movies")}>
                  <Link to="/movies">Movies</Link>
                </li>
                <li className="list-group-item" onClick={() => setItem("Genres")}>
                  <Link to="/genres">Genres</Link>
                </li>
                <li className="list-group-item" onClick={() => setItem(null)}>
                  <Link to="/admin/add">Add movie</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin">Manage Catalogue</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-md-9">
            <Switch>
              <Route path="/movies/:id" component={OneMovie} />

              <Route path="/movies">
                <Movies />
              </Route>
              <Route path="/genres/:id" component={OneGenre} />
              <Route exact path="/genres">
                <Genres />
              </Route>
              <Route path="/admin/add" component={EditMovie} />
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
