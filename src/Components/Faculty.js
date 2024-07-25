import React from 'react'
import {Row,Col,Container} from 'reactstrap'
import bg from '../Images/john doe.webp'
import bg1 from '../Images/Jane Smith.jpg'
import bg2 from '../Images/Emily Johnson.webp'
import bg3 from '../Images/Michael Brown.jpg'
import bg4 from '../Images/Sophia Davis.webp'
import bg5 from '../Images/David Wilson.jpg'
function Faculty()
{
    return(
        <div>
          <Container >

          
       <h1 style={{textAlign:'start',padding:'20px',color:'white',background:'linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(72,21,168,0.8099614845938375) 69%)'}}>Faculty:</h1>
       <div className='primary1'>Profiles:</div><br/>
       <Row>
       <Col sm={4}>
       <div className='principal'>
       <img src={bg} className='image1'/><br/>
        <h1>John Doe:</h1>
        <span style={{ fontWeight: 'bold', fontSize: '1.2em',listStyle:'disc' }}>Principal,</span>  M.Ed, 20 years of experience in educational administration.
       </div>
       </Col>
       <Col sm={4}>
       <div className='principal'>
       <img src={bg1} className='image1'/><br/>
        <h1>Jane Smith:</h1>
        <span style={{ fontWeight: 'bold', fontSize: '1.2em',listStyle:'disc' }}>Vice Principal,</span> M.Sc. in Physics, 15 years of teaching experience.
       </div>
       </Col>
       <Col sm={4}>
       <div className='principal'>
       <img src={bg2} className='image1'/><br/>
        <h1>Emily Johnson:</h1>
        <span style={{ fontWeight: 'bold', fontSize: '1.2em',listStyle:'disc' }}>English Teacher,</span> M.A. in English, 10 years of teaching experience.
       </div>
       </Col>
       </Row><br/><br/>
       <Row>
       <Col sm={4}>
       <div className='principal'>
       <img src={bg3} className='image1'/><br/>
        <h1>Michael Brown:</h1>
        <span style={{ fontWeight: 'bold', fontSize: '1.2em',listStyle:'disc' }}>Mathematics Teacher,</span>  M.Sc. in Mathematics, 8 years of teaching experience.
       </div>
       </Col>
       <Col sm={4}>
       <div className='principal'>
       <img src={bg4} className='image1'/><br/>
        <h1>Sophia Davis:</h1>
        <span style={{ fontWeight: 'bold', fontSize: '1.2em',listStyle:'disc' }}>Science Teacher,</span>   M.Sc. in Chemistry, 12 years of teaching experience <br/>in Chemistry.
       </div>
       </Col>
       <Col sm={4}>
       <div className='principal'>
       <img src={bg5} className='image1'/><br/>
        <h1>David Wilson: </h1>
        <span style={{ fontWeight: 'bold', fontSize: '1.2em',listStyle:'disc' }}>Computer Science Teacher,</span>  B.Tech in Computer Science, 5 years of teaching  experience.
       </div>
       </Col>  
       </Row>
       </Container>
        </div>
    );
}
export default  Faculty


