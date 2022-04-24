import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";

import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="container">
      <div className="item">
        <div className="callBtn">
          <img src="telephone.png" alt="telephone" width="28" height="28" />
        </div>
        <div className="texts">
          <div className="text">Order Now</div>
          <div className="text"> 017797 38214</div>
        </div>

        <Link to="/" className="mobileLogo">
          <img src="logo.svg" alt="logo" width="90" height="39" />
        </Link>
      </div>

      <div className="item">
        <div className="mobile">
          <Link to="/" className="listItem">
            Home
          </Link>
          <Link to="/productList" className="listItem">
            Products
          </Link>
          <Link to="/statistics" className="listItem">
            Statistics
          </Link>
        </div>
      </div>
      <div className="item">
        <ul className="list">
          <Link to="/" className="listItem">
            Home
          </Link>
          <Link to="/productList" className="listItem">
            Products
          </Link>
          <img src="logo.svg" alt="logo" width="160" height="69" />
          <Link to="/statistics" className="listItem">
            Statistics
          </Link>
          <Link to="/statistics" className="listItem">
            Shop
          </Link>
        </ul>
      </div>
      <div className="item">
        <div className="cart">
          <img src="cart.png" alt="logo" width="30" height="30" />

          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
