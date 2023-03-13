import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        {/* <Navbar.Brand href='#home'>Dunlok Dev</Navbar.Brand> */}
        <NavLink className='navbar-brand' to='/'>
          Dunlok Dev
        </NavLink>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink className='nav-link' to='/'>
              Home
            </NavLink>
            <NavLink className='nav-link' to='/users'>
              Users
            </NavLink>
            <NavLink className='nav-link' to='/admins'>
              Admin
            </NavLink>
          </Nav>
          <Nav>
            <Button variant='outline-secondary' className='btn-login'>
              Log in
            </Button>
            <Button variant='dark'>Sign up</Button>

            {/* <NavDropdown title='Settings' id='basic-nav-dropdown'>
              <NavDropdown.Item>Log in</NavDropdown.Item>
              <NavDropdown.Item>Log out</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
