import React from 'react';
import b4 from '../Images/logo.png'; 
import { Container ,Col,Row} from 'reactstrap';
function Beauty()
{
    return(
        <div>
            <br/><br/><br/>
            <Container fluid>
       <div className='footer1'>
        <Row style={{background:' #535B62'}}>
          <Col sm={4} xs={4}>
         <h4>Available On</h4>
          <i className="ri-facebook-fill"></i> <i className="ri-instagram-line"></i> <i className="ri-twitter-x-line"></i> <i className="ri-whatsapp-line"></i>
          </Col>
          <Col sm={4} xs={4}>
         <h4>Help Topics</h4>
          FAQs<br/>
          TERMS & CONDITIONS<br/>
          
        </Col>
    <Col sm={4} xs={4}>
  <h4>All rights reserved</h4> 
  copyrights@e&tclothing
    </Col>
    </Row>
  </div>
  </Container>
        </div>
       
    );
}
export default Beauty;