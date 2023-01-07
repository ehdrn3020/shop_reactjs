import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Detail(props) {

    let {id} = useParams();
    // props순서에 관계없이 id값으로 find
    let target_id = props.shoes.find( x=> x.id==id );

    return (
      <Container>
      {
        target_id === undefined ? <div>404 Not Found</div> :
          <Row>
          <Col sm>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </Col>
          <Col sm>
            <h4>{target_id.title}</h4>
            <p>{target_id.content}</p>
            <p>{target_id.price}</p>
            <button className="btn btn-danger">주문하기</button> 
          </Col>
          </Row>
      }
      </Container>
    );
  }

export default Detail