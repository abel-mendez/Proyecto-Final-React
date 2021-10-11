import "./App.css";
import Header from "./components/header/header";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <h1>Soy un home</h1>
        </Route>
        <Route exact path="/about">
          <h1>Soy una About</h1>
        </Route>
        <Route exact path="/:search">
          <h1>Buscando con search</h1>
        </Route>
        <Route exact path="/food/:nombre">
          <h1>Soy una Comida</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
