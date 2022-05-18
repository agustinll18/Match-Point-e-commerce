import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import DarkModeToggle from "./darkModeToggle/DarkModeToggle";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        fixed="top"
        style={{ borderBottom: "2px solid #000", margin: "0% 0% 10% 0%" }}
      >
        <Container style={{ margin: "0% 10% 0% 10%" }}>
          <Navbar.Brand className="brandN" onclick="topFunction()">
            <Nav.Link className="links" href="/">
              <h1
                style={{
                  textDecoration: "none",
                  color: " rgb(0, 0, 0) ",
                  fontWeight: 600,
                }}
              >
                <span style={{ color: " #ff6200 ", fontWeight: "bold" }}>
                  Match
                </span>{" "}
                Point
              </h1>
            </Nav.Link>
          </Navbar.Brand>
          <DarkModeToggle />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ justifyContent: "flex-end" }}
          >
            <Nav className="me-auto" id="navLinks">
              <Nav.Link className="links" href="/#productos">
                Productos
              </Nav.Link>
              <Nav.Link className="links" href="/#quienesSomos">
                Quienes somos
              </Nav.Link>
              <Nav.Link className="links" href="/#contacto">
                Contacto
              </Nav.Link>
              <NavDropdown title="Dropdown" className="links" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
