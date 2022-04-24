import { Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { BsCartPlus } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  const cart = useSelector((state) => state.productReducer.cartItems);
  return (
    // <div className="navbar-container">
    //   {/* <header>
    //     <div className="navbar-menu">
    //       <div>
    //         <NavLink to="/">
    //           <img src="logo.svg" alt="" width="50" className="nav-logo" />
    //         </NavLink>
    //       </div>
    //       <div className="navbar-items">
    //         <NavLink to="/" className="navbar-item">
    //           Home
    //         </NavLink>
    //         <NavLink to="/" className="navbar-items">
    //           Home
    //         </NavLink>
    //         <NavLink to="/" className="navbar-items">
    //           Home
    //         </NavLink>
    //       </div>
    //     </div>

    //     <div>
    //       <Link to="/cart" className="cartIcon">
    //         <BsCartPlus />

    //         <span className="cart-number">{cart.length}</span>
    //       </Link>
    //     </div>
    //   </header> */}
    // </div>

    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          {" "}
          <NavLink to="/">
            <img src="logo.svg" alt="" width="180" className="nav-logo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/productList">Shop</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/statistics">Statistics</NavLink>
            </Nav.Link>
            <Nav.Link href="https://www.fashionid.de/" target="_blank">
              Visit Original Shop
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
