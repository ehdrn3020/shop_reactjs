import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

function Detail(props) {

    let {id} = useParams();
    const img_id = parseInt(id)+1;
    // props순서에 관계없이 id값으로 find
    let target_id = props.shoes.find( x=> x.id==id );
    let [alert, setAlert] = useState(true);

    useEffect(()=>{
      let time = setTimeout(()=>{ setAlert(false) }, 2000);
      return ()=>{ clearTimeout(time) }
    }, []);

    return (
      <Container>
        {
          alert == true ?
          <div className="alert alert-warning">
            2초 이내 구매시 할인
          </div>
          : null
        }
        {
          target_id === undefined ? <div>404 Not Found</div> :
            <Row>
            <Col sm>
              <img src={`../img/shoes${img_id}.jpg`} width="100%" />
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