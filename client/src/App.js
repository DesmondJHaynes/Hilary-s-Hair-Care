import { NavbarBrand, Nav, NavItem, NavLink, Navbar } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar color="info" expand="md">
        <Nav Navbar>
          <NavbarBrand href="/">💅🏽✨Hilary's Hair Care✨💅🏽</NavbarBrand>
          <NavItem>
            <NavLink href="/appointments">Appts</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/clients">Clients</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/stylists">Stylists</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Outlet />
    </>
  );
}

export default App;
