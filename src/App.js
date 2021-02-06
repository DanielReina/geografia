import React from "react";
import { Switch, Route } from "react-router-dom";
import Capital from "./components/Capital";
import Cover from "./components/Cover";
import Flags from './components/Flags'
import Navbar from './components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Switch>
          <Route path="/" exact render={() => <Cover />} />
          <Route path="/capitales" render={() => <Capital />} />
          <Route path="/banderas" render={() => <Flags />} />
        </Switch>
      </main>
      <footer></footer>
    </>
  );
}

export default App;

