import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import CartWidget from "../cart/CartWidget";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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
                to="/categorias/televisores"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Televisores
              </NavLink>
              <NavLink
                to="/categorias/heladeras"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Heladeras
              </NavLink>
              <NavLink
                to="/categorias/cocinas"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Cocinas
              </NavLink>                           
              <NavLink
                to="/carrito"
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