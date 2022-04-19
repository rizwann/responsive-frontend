import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./Navbar.css";
import { Badge } from "@mui/material";

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
          <img
            src="https://images.prismic.io/puc-com/959a4f356c316f73a03ab2311f7a7f30a801caf5_peek-cloppenburg-companies-2018-fashiondigital.jpg?auto=compress,format"
            alt="logo"
            className="navbar-logo"
          />
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
