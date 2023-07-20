import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import {SuitHeartFill, Cart4 } from 'react-bootstrap-icons';
  

function NavScroll({searchbtn,loginWithRedirect, logout, user, isAuthenticated}) {

  const handleSearch=() =>{
    const searchCategory = document.getElementById('navSearch').value
    if(searchCategory!=='') searchbtn (searchCategory);
    document.getElementById('navSearch').value='';
  }

  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Enter') {
        event.preventDefault();

        handleSearch();
      }
    };
    document.getElementById('navSearch').addEventListener('keydown', keyDownHandler);

    return () => {
      document.getElementById('navSearch').removeEventListener('keydown', keyDownHandler);
    };
  }, []);
 

  return (
    <>  
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid>
      <NavLink to="/QuickCart/">
            <img 
              src="https://source.unsplash.com/1900x600/?logo"
              width="100"
              height="30"
              className="d-inline-block align-top"
              alt="E-commerce logo"
            />
          </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="mx-auto my-2 my-lg-0 d-flex">
            <Form.Control
              id='navSearch'
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={() => handleSearch()}>Search</Button>
          </Form>
          <Nav
            className="d-flex"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to='/QuickCart/wishlist' className='ms-3'>Wishlist<SuitHeartFill color='red'/></NavLink>
            <NavLink to='/QuickCart/cart' className='mx-3'>Cart<Cart4 /></NavLink>
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
        <Nav variant="tabs" defaultActiveKey="/" className="mx-auto my-2 my-lg-0 d-flex">
          <Nav.Item>
            {/* <Nav.Link eventKey="link-0" className="px-4" href='/'> */}
              <Link className="px-4" to='/QuickCart/' >Home</Link>
            {/* </Nav.Link> */}
          </Nav.Item>
          <Nav.Item>
            {/* <Nav.Link eventKey="link-1" className="px-4"> */}
              <Link className="px-4" to='/QuickCart/product'>Product</Link>
            {/* </Nav.Link> */}
          </Nav.Item>
          <Nav.Item>
            {/* <Nav.Link eventKey="link-2" className="px-4"> */}
              <Link className="px-4" to='/QuickCart/about'>About</Link>
            {/* </Nav.Link> */}
          </Nav.Item>
          <Nav.Item>
            {/* <Nav.Link eventKey="link-3" className="px-4"> */}
              <Link className="px-4" to='/QuickCart/contact'>Contact</Link>
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