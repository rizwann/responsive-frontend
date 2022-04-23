import { BsCartPlus } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const cart = useSelector((state) => state.productReducer.cartItems);
  return (
    <div className="navbar-container">
      <header>
        <div>
          <NavLink to="/">
            <img src="logo.svg" alt="" width="50" className="nav-logo" />
          </NavLink>
        </div>
        <div>
          <Link to="/cart" className="cartIcon">
            <BsCartPlus />

            <span className="cart-number">{cart.length}</span>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
