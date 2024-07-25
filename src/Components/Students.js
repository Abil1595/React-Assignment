import React from 'react'
import bg from '../Images/John Smith (1).webp'
import bg1 from '../Images/Sarah Lee.webp'
import bg2 from '../Images/Tech Innovators Club.jpg'
import bg3 from '../Images/Amy Parker.webp'
import bg4 from '../Images/Rajiv Mehta.jpg'
import bg5 from '../Images/Lisa Wong.webp'
import {Row,Col,Container} from 'reactstrap'
function Students()
{
    return(    
        <div>
          <Container>
     <h1 style={{textAlign:'start',padding:'20px',color:'white',background:'linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(72,21,168,0.8099614845938375) 69%)'}}>Students:</h1>
       <ul>
      
        
       <div className='Life'><li>Life at Springdale:</li></div>
       <div className='Life1'><li>Extracurricular Activities: "Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club"</li></div>
       <div className='Life1'><li>Clubs and Societies: : "Literary Society, Environmental Club, Astronomy Club, Coding Club"</li></div>
       </ul><br/>
       <ul>
       <div className='Life'><li>Achievements:</li></div>
       </ul>
       <Row>
       <Col sm={4}>
       <div className='principal'>
       <img src={bg} className='image1'/><br/>
        <h2>John Smith:</h2>
        National Level Math Olympiad Winner
       </div>
       </Col>
       <Col sm={4}>
       <div className='principal'>
       <img src={bg1} className='image1'/><br/>
        <h1>Sarah Lee:</h1>
        Gold Medalist Swimming Championship
       </div>
       </Col>
       <Col sm={4}>
       <div className='principal'>
       <img src={bg2} className='image1'/><br/>
        <h2>TechInnovatorsClub:</h2>
        Winners of Inter-School Robotics
       </div>
       </Col>
       </Row><br/><br/>
       <div className='Life'><li>Student Council:</li></div>
       <Row>
       <Col sm={4}>
       <h1>President</h1>
       <div className='principal'>
       <img src={bg3} className='image1'/><br/>
        <h1> Amy Parker:</h1>
        Grade 12
       </div>
       </Col>
       <Col sm={4}>
       <h1>Vice President</h1>
       <div className='principal'>
       <img src={bg4} className='image1'/><br/>
        <h1>Rajiv Mehta:</h1>
        Grade 11
       </div>
       </Col>
       <Col sm={4}>
       <h1>Secretary</h1>
       <div className='principal'>
       <img src={bg5} className='image1'/><br/>
        <h1> Lisa Wong:</h1>
        Grade 10
       </div>
       </Col>
       </Row><br/><br/>
       </Container>
        </div>
    );       
}
export default Students

