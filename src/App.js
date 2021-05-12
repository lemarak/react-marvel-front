import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSpinner,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
library.add(faSpinner, faAngleLeft, faAngleRight);

function App() {
  // Pagination
  const [pageCharacters, setPageCharacters] = useState(1);
  const [pageComics, setPageComics] = useState(1);

  // Routes
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/comics">
          <Comics page={pageComics} setPage={setPageComics} />
        </Route>

        <Route path="/">
          <Characters page={pageCharacters} setPage={setPageCharacters} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
