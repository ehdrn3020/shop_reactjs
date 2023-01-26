import { Container, Row, Col, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store'

function Detail(props) {

    let {id} = useParams();
    const img_id = parseInt(id)+1;
    // props순서에 관계없이 id값으로 find
    let target_id = props.shoes.find( x=> x.id==id );
    let [alert, setAlert] = useState(true);
    let [alertFade, setAlertFade] = useState('');
    let [tab, setTab] = useState(true);
    let [buy, setBuy] = useState(0);
    let [buyFade, setBuyFade] = useState('');

    let dispatch = useDispatch()

    useEffect(()=>{
      setTimeout(()=>{setAlertFade('end')},300);
      let time = setTimeout(()=>{ setAlert(false) }, 2000);
      return ()=>{ 
        clearTimeout(time) 
        setAlertFade('')
      }
    }, []);

    useEffect(()=>{
      setBuyFade('end');
      let time = setTimeout(()=>{ setBuy(false) }, 2000);
      return ()=>{ 
        clearTimeout(time);
        setBuyFade('');
      }
    }, [buy]);

    return (
      <Container>
        {
          alert == true ?
          <div className={`alert alert-warning ${alertFade}`}>
            2초 이내 구매시 할인
          </div>
          : null
        }
        {
          buy == true ?
          <div className={`alert alert-warning ${buyFade}`}>
            주문완료
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
              <button className="btn btn-danger" onClick={()=>{
                dispatch(addItem({id: target_id.id, name : target_id.title, count : 1}));
                setBuy(true);
              }}>주문하기</button> 
            </Col>
            </Row>
        }
        <Nav fill variant="tabs" defaultActiveKey="link1">
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={()=>{ setTab(1) }}>Button1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={()=>{ setTab(2) }}>Button2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link3" onClick={()=>{ setTab(3) }}>Button3</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tab={tab} />
      </Container>   
    );
  }

  function TabContent({tab}) {
    
    let [fade, setFade] = useState('')
    useEffect(()=>{
      setTimeout(()=>{setFade('end')},300);
      return ()=>{setFade('')}
    },[tab])

    return (
      <div className={`start ${fade}`}>
        { [<div>내용1</div>,<div>내용2</div>,<div>내용3</div>][tab-1] }
      </div>
    )
  }
  

export default Detail