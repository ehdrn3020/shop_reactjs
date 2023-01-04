import { useState } from "react";
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link} from 'react-router-dom';
import './App.css';
import data from './data';
import Detail from './routes/Detail';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Brand</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Nav.Link href="/detail">detail</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
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
          </>
        } />
        <Route path="/detail" element={ <Detail /> } />
      </Routes>
      
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
