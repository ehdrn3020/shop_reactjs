import './App.css';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container>
        <Row>
          <Col sm>
            <img src={process.env.PUBLIC_URL + 'img/shoes1.jpg'} width="90%"></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img src={process.env.PUBLIC_URL + 'img/shoes2.jpg'} width="90%"></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img src={process.env.PUBLIC_URL + 'img/shoes3.jpg'} width="90%"></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
