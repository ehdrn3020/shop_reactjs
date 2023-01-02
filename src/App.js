import './App.css';
import { useState } from "react";
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import data from './data';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Brand</Navbar.Brand>
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
          { shoes.map((item, i)=>{
              return (
                <Product item={item} i={i+1} />
              )
          })}
        </Row>
      </Container>
      
    </div>
  );
}

function Product(props) {
  return (
    <Col sm key={props.item.id}>
      <img src={process.env.PUBLIC_URL + 'img/shoes'+props.i+'.jpg'} width="90%"></img>
      <h4>{props.item.title}</h4>
      <p>{props.item.price}</p>
    </Col>
  )
}

export default App;
