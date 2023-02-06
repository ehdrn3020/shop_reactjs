import { useState, useEffect } from "react";
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { useQuery } from 'react-query'
import axios from 'axios';
import './App.css';
import data from './datas/item';
import Detail from './routes/Detail';
import Cart from './routes/Cart';

function App() {

  let [shoes, setShoes] = useState(data);
  let [more, setMore] = useState(2);
  let navigate = useNavigate();

  /* react query example */
  let callUser = useQuery('callUser', () => {
    return axios.get('https://codingapple1.github.io/userdata.json').then(
      (a) => {
        return a.data
      }),
      { staleTime: 10000000 }
  });
  

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>Brand</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
          </Nav> 
          <Nav style={{color:'white'}}>
            { callUser.isLoading && 'Loading' }
            { callUser.error && 'Error' }
            { callUser.data && '반가워요' }  
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
            { more <= 3 ?
              <Button onClick={()=>{
                axios.get('https://codingapple1.github.io/shop/data'+more+'.json')
                .then((data)=>{ 
                  const response = data.data;
                  let copy = [...shoes, ...response];
                  setShoes(copy);
                  setMore(more+1)
                })
                .catch(()=>{
                  console.log('Request Fail!')
                })
  
              }}>더보기</Button>
              : 
              <Button onClick={()=>{
                setShoes(data);
                setMore(2)
              }}>접기</Button>
            }
          </>
        } />
        <Route path="/detail/:id" element={ <Detail shoes={shoes} /> } />
        <Route path="/cart" element={ <Cart /> } />
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
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Product(props) {
  return (
    <Col xs={12} md={4}>
      <Link to={`detail/${props.item.id}`}>
        <img src={process.env.PUBLIC_URL + 'img/shoes'+props.i+'.jpg'} width="90%"></img>
      </Link>
      <h4>{props.item.title}</h4>
      <p>{props.item.price}</p>
    </Col>
  )
}

export default App;
