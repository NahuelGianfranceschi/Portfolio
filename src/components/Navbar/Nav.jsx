import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navibar() {
  return (
    <>
      <Navbar className='navegacion' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Nahuel Gianfranceschi</Navbar.Brand>
          
          
        </Container>
      </Navbar>
      </>
  );
}

export default Navibar;