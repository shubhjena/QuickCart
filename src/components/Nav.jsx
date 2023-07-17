import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {SuitHeartFill, Cart4 } from 'react-bootstrap-icons';
import { useAuth0 } from "@auth0/auth0-react";

  

function NavScroll() {

  const { loginWithRedirect, logout, user, isAuthenticated  } = useAuth0();

  return (
    <>
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand href="#home">
            <img 
              src="https://source.unsplash.com/1900x600/?logo"
              width="100"
              height="30"
              className="d-inline-block align-top"
              alt="E-commerce logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="mx-auto my-2 my-lg-0 d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav
            className="d-flex"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action2">Wishlist <SuitHeartFill color='red'/></Nav.Link>
            <Nav.Link href="#action3">Cart <Cart4 /></Nav.Link>
            <>
            {isAuthenticated?
              (<><NavDropdown title={`Hello, ${user.given_name}`} id="basic-nav-dropdown">
                {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Another action
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#action/3.4" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Logout
                </NavDropdown.Item>
                </NavDropdown>
                <Navbar.Brand href="#home">
                  <img
                    src={user.picture}
                    width="30"
                    height="30"
                    className="d-inline-block align-top rounded-circle"
                    alt="React Bootstrap logo"
                  />
                </Navbar.Brand></>
              ):
              (<Button variant="success" onClick={() => loginWithRedirect()}>Login</Button>)
            }
          </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav variant="tabs" defaultActiveKey="/home" className="mx-auto my-2 my-lg-0 d-flex">
          <Nav.Item>
            <Nav.Link href="/home" className="px-4">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" className="px-4">Product</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" className="px-4">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3" className="px-4">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  );
}

export default NavScroll;