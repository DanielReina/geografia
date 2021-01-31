import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import Cover from "./components/Cover";

function App() {
  return (
    <>
      <main>
        <Switch>
          <Route path="/" exact render={() => <Cover/>} />
          <Route path="/aplicacion" render={() => <Form />} />
        </Switch>
      </main>
      <footer></footer>
    </>
  );
}

export default App;

