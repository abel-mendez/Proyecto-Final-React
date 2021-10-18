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
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/contact">
          <Header />
          <Contact />
          <Footer />
        </Route>
        <Route exact path="/about">
          <Header />
          <h1>Soy una About</h1>
          <Footer />
        </Route>
        <Route exact path="/home">
          <Header />
          <Home key="default" />
          <Footer />
        </Route>

        <Route exact path="/home/:search">
          <Header />
          <Home key="search" />
          <Footer />
        </Route>
        <Route exact path="/food/:id">
          <Header />
          <FoodCard />
          <Footer />
        </Route>
      </Switch>
    </>
  );
}

export default App;
