import "./landingPage.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section>
      <div className="landingMain">
        <div className="mainTitle">
          <center>Good Foods</center>
        </div>
        <div className="landingButtons">
          <div className="m-5">
            <Link className="text-white text-decoration-none" to="/home">
              <Button
                variant="warning"
                size="lg"
                style={{
                  color: "#FFFF",
                }}
              >
                Enter
              </Button>
            </Link>
          </div>
          <div className="m-5">
            <Link className="text-white text-decoration-none" to="/about">
              <Button variant="outline-warning" size="lg">
                About us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
