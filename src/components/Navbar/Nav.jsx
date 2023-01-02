import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Nav.css'
//import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll'

function BasicExample() {
  return (
    <Navbar className='Nav' bg="light" expand="lg">
      <Container>
        <Navbar.Brand Link to='/'>Nahuel Gianfranceschi </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Link className='vinculo' to='/' spy={true} smooth={true} offset={50} duration={500}>Home</Link>
            <Link className='vinculo' to='/Projects' spy={true} smooth={true} offset={50} duration={500}>Projects</Link>              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
