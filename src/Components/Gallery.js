import React from 'react'
import bg from '../Images/sports_day.jpg'
import bg1 from '../Images/science_exhibition.jpg'
import bg2 from '../Images/cultural_fest.jpg'
import bg3 from '../Images/classroom.jpg'
import bg4 from '../Images/library.jpg'
import bg5 from '../Videos/school_tour.mp4'
import bg6 from '../Videos/annual_function.mp4'
import {Row,Col,Container} from 'reactstrap'
function Gallery()
{
    return(
        <div>
          <Container>
    <h1 style={{textAlign:'start',padding:'20px',color:'white',background:'linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(72,21,168,0.8099614845938375) 69%)'}}>Photos:</h1>
    <br/>
    <Row>
       <Col sm={4}>
       <div className='principal'>
       <img src={bg} className='image1'/><br/>
        <h2>Sports Day:</h2>
        "Students participating in various sports."
       </div>
       </Col>
       <Col sm={4}>
       <div className='principal'>
       <img src={bg1} className='image1'/><br/>
        <h1>Science Events:</h1>
        "Students presenting their science projects."
       </div>
       </Col>
       <Col sm={4}>
       <div className='principal'>
       <img src={bg2} className='image1'/><br/>
        <h2>Cultural Fest:</h2>
        "Students performing in the cultural fest."
       </div>
       </Col>
       </Row><br/><br/>
       <Row>
       <Col sm={6}>
       <div className='principal'>
       <img src={bg3} className='image1'/><br/>
        <h1>Classroom:</h1>
        "A glimpse of our interactive classrooms."
       </div>
       </Col>
       <Col sm={6}>
       <div className='principal'>
       <img src={bg4} className='image1'/><br/>
        <h1>Library:</h1>
        "Students reading and studying in the school library."
       </div>
       </Col>
       </Row><br/><br/>
       <h1 style={{textAlign:'start',padding:'20px'}}>Videos:</h1><br/>
       <h1> "Virtual tour of Springdale Public School."</h1>
       <video width="1020" height="540" controls src={bg5}/><br/><br/><br/>
       <h1> "Highlights from the Annual Function 2023."</h1>
       <video width="1020" height="540" controls src={bg6}/><br/><br/><br/>
       </Container>
        </div>
    );
}
export default  Gallery
  
  
