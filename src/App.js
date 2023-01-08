import { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import './App.css';
import data from './data';
import Detail from './routes/Detail';

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Brand</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>detail</Nav.Link>
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
                        <Product 
                        key={i}
                        item={item} 
                        i={i+1} 
                      />
                    )
                })}
              </Row>
            </Container>
          </>
        } />
        <Route path="/detail/:id" element={ <Detail shoes={shoes} /> } />
        <Route path="/about" element={ <About /> }>
          <Route path="member" element={ <div>this is member</div> } />
          <Route path="location" element={ <div>this is location</div> } />
        </Route>
        <Route path="*" element={<div>404 Page</div>} />
      </Routes>
      
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Product(props) {
  return (
    <Col sm>
      <a href={`detail/${props.item.id}`}>
        <img src={process.env.PUBLIC_URL + 'img/shoes'+props.i+'.jpg'} width="90%"></img>
      </a>
      <h4>{props.item.title}</h4>
      <p>{props.item.price}</p>
    </Col>
  )
}


export default App;
