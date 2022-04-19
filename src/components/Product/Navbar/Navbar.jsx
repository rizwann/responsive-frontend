import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from "@mui/material";

import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <div className="navbar-languages">EN</div>
          <div className="navbar-searchContainer">
            <input type="text" className="navbar-search" placeholder="Search" />
            <FiSearch style={{ color: "grey", fontSize: "25px" }} />
          </div>
        </div>

        <div className="navbar-center">
          <NavLink to="/" className="navbar-logo">
            Fashion Digital
          </NavLink>
        </div>

        <div className="navbar-right">
          <div className="navbar-menuList">Register</div>
          <div className="navbar-menuList">Login</div>
          <div className="navbar-menuList cart">
            <Badge badgeContent={2} color="secondary">
              <AiOutlineShoppingCart style={{ fontSize: "30px" }} />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
