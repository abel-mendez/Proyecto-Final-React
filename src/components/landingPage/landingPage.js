import "./landingPage.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home from "../home/home";

export default function Landing() {
  return (
    <section>
      <div className="landingButtons">
        <div className="m-5">
          <Link className="text-white text-decoration-none" to="/home">
            <Button variant="warning">Enter</Button>
          </Link>
        </div>
        <div className="m-5">
          <Link className="text-white text-decoration-none" to="/about">
            <Button variant="warning">About us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
