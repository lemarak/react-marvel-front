import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Characters from "./containers/Characters";

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
  const [pageCharacters, setPageCharacters] = useState(10);
  // Routes
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Characters page={pageCharacters} setPage={setPageCharacters} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
