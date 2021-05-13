import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import CharacterComics from "./containers/CharacterComics";

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
  const [searchCharacter, setSearchCharacter] = useState();
  const [searchComic, setSearchComic] = useState();

  // Routes
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/comics">
          <Comics
            page={pageComics}
            setPage={setPageComics}
            search={searchComic}
            setSearch={setSearchComic}
          />
        </Route>
        <Route path="/character/:id">
          <CharacterComics />
        </Route>
        <Route path="/">
          <Characters
            page={pageCharacters}
            setPage={setPageCharacters}
            search={searchCharacter}
            setSearch={setSearchCharacter}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
