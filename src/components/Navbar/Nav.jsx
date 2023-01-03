import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navibar() {
  return (
    <>
      <Navbar className='navegacion' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Nahuel Gianfranceschi</Navbar.Brand>
          <Nav className="me-auto">
            {/* 
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#ProjectsLayer">Projects</Nav.Link>
            */}
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default Navibar;