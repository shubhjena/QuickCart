import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import {SuitHeartFill, Cart4, Search } from 'react-bootstrap-icons';
  

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
      <Navbar expand="lg" className="bg-beta">
        <Container fluid>
          <NavLink to="/" className='px-3 text-white no-underline font-extrabold text-4xl '>
            QuickCart<span className='text-xs font-mono bg-gray-600 rounded px-1 py-0.5 mx-1 font-thin'>BETA</span>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="flex w-full justify-center">
              <input 
                id='navSearch'
                type="search"
                placeholder="Search"
                className="w-9/12 max-w-lg mr-2 p-1.5 text-center border-2 hover:border-accent font-base rounded-lg"
                aria-label="Search" />
              <button onClick={() => handleSearch()} className='flex-none bg-accent px-4 rounded-lg text-white font-semibold border-1 border-accent hover:border-alpha'>
                <span className='hidden md:inline-block'>Search</span>
                <span className='md:hidden'><Search/></span>
              </button>
            </Form>
            <Nav style={{ maxHeight: '100px' }} navbarScroll className="flex mx-3 gap-3" >
              <NavLink to='/wishlist' className='flex m-auto no-underline font-semibold gap-1 text-white'>WishList<SuitHeartFill className='m-auto'/></NavLink>
              <NavLink to='/cart' className='flex m-auto no-underline font-semibold gap-1 text-white'>Cart<Cart4 className='m-auto'/></NavLink>
              <>
                {isAuthenticated?
                  (<>
                    <NavDropdown title={`Hello, ${user.given_name}`} id="basic-nav-dropdown" className='font-semibold'>
                      {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                      {/* <NavDropdown.Divider /> */}
                      <NavDropdown.Item onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                          Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>)
                  :(<button onClick={() => loginWithRedirect()} className='px-3 py-1.5 bg-gamma text-white text-sm rounded border-1 border-gamma shadow hover:border-alpha'>Login</button>)
                }
              </>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="bg-alpha">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav defaultActiveKey="//" className="mx-auto my-2 my-lg-0 d-flex">
              <Nav.Item>
                  <Link className="px-4 font-bold text-accent no-underline hover:underline" to='/' >Home</Link>
              </Nav.Item>
              <Nav.Item>
                  <Link className="px-4 font-bold text-accent no-underline hover:underline" to='/product'>Product</Link>
              </Nav.Item>
              <Nav.Item>
                  <Link className="px-4 font-bold text-accent no-underline hover:underline" to='/about'>About</Link>
              </Nav.Item>
              <Nav.Item>
                  <Link className="px-4 font-bold text-accent no-underline hover:underline" to='/contact'>Contact</Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScroll;