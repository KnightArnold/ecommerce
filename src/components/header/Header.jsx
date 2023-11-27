import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import CartWidget from "../cart/CartWidget";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container>
        <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
            <Navbar.Brand>Electro-Shop</Navbar.Brand>
          </NavLink>          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/category/televisions"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Televisores
              </NavLink>
              <NavLink
                to="/category/refrigerators"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Heladeras
              </NavLink>
              <NavLink
                to="/category/kitchens"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Cocinas
              </NavLink>                           
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
                }
              >
                <CartWidget />
              </NavLink>              
            </Nav>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
    </div>
  );
}

export default Header