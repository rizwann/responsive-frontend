import { BsCartPlus } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <header>
        <div>
          <NavLink to="/">Fashion Digital - Frontend Task</NavLink>
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
