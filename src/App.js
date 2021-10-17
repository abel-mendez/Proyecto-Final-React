import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Landing from "./components/landingPage/landingPage";
import Contact from "./components/contact/contact";
import { Switch, Route } from "react-router-dom";
import FoodCard from "./components/card/foodCard";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/landing">
          <Landing />
        </Route>
        <Route exact path="/">
          <Home key="default" />
        </Route>
        <Route exact path="/about">
          <h1>Soy una About</h1>
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/:search">
          <Home key="search" />
        </Route>
        <Route exact path="/food/:id">
          <FoodCard />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
