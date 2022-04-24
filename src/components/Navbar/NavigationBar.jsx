import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./NavigationBar.css";

const NavigationBar = () => {
  const cart = useSelector((state) => state.productReducer.cartItems);
  return (
    <div className="container">
      <div className="item">
        <div className="callBtn">
          <img src="telephone.png" alt="telephone" width="28" height="28" />
        </div>
        <div className="texts">
          <div className="text">Order Now</div>
          <div className="text"> 017797 38***</div>
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
          <Link to="/">
            <img src="logo.svg" alt="logo" width="160" height="69" />
          </Link>
          <Link to="/statistics" className="listItem">
            Statistics
          </Link>
          <span
            onClick={() =>
              window.open("https://www.fashionid.de/", "_blank").focus()
            }
            className="listItem"
          >
            Shop
          </span>
        </ul>
      </div>
      <div className="item">
        <div className="cart">
          <img src="cart.png" alt="logo" width="30" height="30" />

          <div className="counter">{cart.length}</div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
