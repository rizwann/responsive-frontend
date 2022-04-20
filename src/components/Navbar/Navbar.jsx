import { BsCartPlus } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <header>
        <div>
          <NavLink to="/">
            <img src="logo.svg" alt="" width="50" className="nav-logo" />
          </NavLink>
        </div>
        <div>
          <div className="cartIcon">
            <BsCartPlus />

            <span className="cart-number">2</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
