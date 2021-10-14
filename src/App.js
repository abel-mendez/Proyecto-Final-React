import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Contact from "./components/contact/contact";
import { Switch, Route } from "react-router-dom";
import FoodCard from "./components/card/foodCard";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
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
      <FoodCard />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
