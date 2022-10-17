import './Navbar.scss'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {

  const mailTo = () => {
    window.open('mailto:paulcydesmond@gmail.com');
  }
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container className='navColor' fluid>
        <Navbar.Brand className='paul' href="#"><span>&lt;</span>Paul<span>&gt;</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className='navscss' id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='navFlex' href="#works">Portfolio</Nav.Link>
            <NavDropdown title="Contact" id="navbarScrollingDropdown">
              <NavDropdown.Item href="mailto: paulcydesmond@gmail.com">Email</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/paulukomadu/" target='_blank' >
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item href="https://twitter.com/Paul_Desii">
                Twitter
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/Paul-Desii">
                Github
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='navFlex' href="#about">About</Nav.Link>
            <Button type='button' onClick={mailTo} className='navButton' variant="outline-success">Hire me</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;