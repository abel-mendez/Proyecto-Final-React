import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Landing from "./components/landingPage/landingPage";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
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
          <About />
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
        <Route exact path="*">
          <Header />
          <div className="notfound">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKeiojHtqSReVaxvF870o1YK1YXHPcTgUw-AyoLyEhIWQrIDwoPNxp_6_NMVGewa_IVtE&usqp=CAU"></img>
          </div>

          <Footer />
        </Route>
      </Switch>
    </>
  );
}

export default App;
