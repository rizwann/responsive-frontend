import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-info-container">
        <img
          src="https://img.fidcdn.net/r18/content/00_2022/PuC/Filling/03_Maerz/Gendersplit/Gendersplit_1996x902,50px.jpg.webp"
          alt="logo"
          className="welcome-image"
        />
        <div className="welcome-text-container">
          <h1>Welcome to our store</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, urna eu tincidunt consectetur,
          </p>
          <Link to="/productList" className="welcome-button">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
