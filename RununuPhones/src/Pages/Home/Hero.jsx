import "./Home.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="HeroWrapper">
      <h1>
        Rununu <span> Phones</span>
      </h1>
      <h3>
        Connect the wo<span>rld with us</span>
      </h3>
      <div className="Button">
        <Link className="linkjoin">Hello John Doe</Link>
        <Link className="LinkDev">Message Friends</Link>
      </div>
    </div>
  );
}

export default Hero;
