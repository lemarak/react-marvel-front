import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// Import containers/components
import Header from "./components/Header";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import ComicsDetail from "./containers/ComicsDetail";
import CharacterComics from "./containers/CharacterComics";
import Favorites from "./containers/Favorites";
import Signup from "./containers/Signup";
import Login from "./containers/Login";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSpinner,
  faBackward,
  faFastBackward,
  faForward,
  faFastForward,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

require("dotenv").config();

library.add(
  faSpinner,
  faBackward,
  faFastBackward,
  faForward,
  faFastForward,
  faStar
);

function App() {
  // Pagination
  const [pageCharacters, setPageCharacters] = useState(1);
  const [pageComics, setPageComics] = useState(1);
  // Search
  const [searchCharacter, setSearchCharacter] = useState("");
  const [searchComic, setSearchComic] = useState("");
  // Users
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  // Routes
  return (
    <Router>
      <Header userToken={userToken} setUser={setUser} />
      <Switch>
        <Route path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/comics">
          <Comics
            page={pageComics}
            setPage={setPageComics}
            search={searchComic}
            setSearch={setSearchComic}
            userToken={userToken}
          />
        </Route>
        <Route path="/comic/:id">
          <ComicsDetail userToken={userToken} />
        </Route>
        <Route path="/character/:id">
          <CharacterComics userToken={userToken} />
        </Route>

        <Route path="/favorites">
          <Favorites userToken={userToken} />
        </Route>
        <Route path="/">
          <Characters
            page={pageCharacters}
            setPage={setPageCharacters}
            search={searchCharacter}
            setSearch={setSearchCharacter}
            userToken={userToken}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
