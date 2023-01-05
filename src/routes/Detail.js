import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Detail(props) {

    let {id} = useParams();
    console.log(id);

    return (
      <Container key={props.shoes[id].id}>
        <Row>
          <Col sm>
            <img src={process.env.PUBLIC_URL + 'img/shoes'+id+'.jpg'} width="100%" />
          </Col>
          <Col sm>
            <h4>{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}</p>
            <button className="btn btn-danger">주문하기</button> 
          </Col>
        </Row>
      </Container>
    )
  }

export default Detail