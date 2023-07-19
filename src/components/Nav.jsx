import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import {SuitHeartFill, Cart4 } from 'react-bootstrap-icons';
  

function NavScroll({searchbtn,loginWithRedirect, logout, user, isAuthenticated}) {

  const[search, setSearch] = useState();
 

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
            <Button variant="outline-success" onClick={() => searchbtn (search)}>Search</Button>
          </Form>
          <Nav
            className="d-flex"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to='/wishlist' className='ms-3'>Wishlist<SuitHeartFill color='red'/></NavLink>
            <NavLink to='/cart' className='mx-3'>Cart<Cart4 /></NavLink>
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
            {/* <Nav.Link eventKey="link-0" className="px-4" href='/'> */}
              <Link className="px-4" to='/' >Home</Link>
            {/* </Nav.Link> */}
          </Nav.Item>
          <Nav.Item>
            {/* <Nav.Link eventKey="link-1" className="px-4"> */}
              <Link className="px-4" to='/product'>Product</Link>
            {/* </Nav.Link> */}
          </Nav.Item>
          <Nav.Item>
            {/* <Nav.Link eventKey="link-2" className="px-4"> */}
              <Link className="px-4" to='/about'>About</Link>
            {/* </Nav.Link> */}
          </Nav.Item>
          <Nav.Item>
            {/* <Nav.Link eventKey="link-3" className="px-4"> */}
              <Link className="px-4" to='/contact'>Contact</Link>
            {/* </Nav.Link> */}
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  );
}

export default NavScroll;