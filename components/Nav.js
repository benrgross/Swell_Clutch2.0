import { Nav, Navbar, Container } from "react-bootstrap";
import { useUser } from "@auth0/nextjs-auth0";

function Navigation() {
  const { user } = useUser();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand style={{ color: "#0070f3" }} href="/">
          Swell Clutch
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {user ? (
              <Nav.Link href="/api/auth/logout">Log Out</Nav.Link>
            ) : (
              <Nav.Link href="/api/auth/login">Log In</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
