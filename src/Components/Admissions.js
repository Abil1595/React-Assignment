import React from 'react'
import { Container } from 'reactstrap';
function Admissions()
{
    return(
        <div>
          <Container >
     <h1 style={{textAlign:'start',padding:'20px',color:'white',background:'linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(72,21,168,0.8099614845938375) 69%)'}}>Admissions</h1>
     <div style={{background:'skyblue'}}>
      <br/>
     <div className='Curriculum'>
          <ul>
          <li><div className='primary'>Process:</div>
          "Admission forms are available for download. Submit the completed form along with required documents at the school office."
          </li><br/><br/>
          <li><div className='primary'>Criteria:</div>
          "Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades."
          </li><br/><br/>
          <li><div className='primary'>Important Dates:</div></li>
          <div className='avail'>
            <li>"Admission Form Availability: March 1st"</li>
            <li>"Last Date for Submission: March 31st"</li>
            <li>"Entrance Test: April 15th"</li>
            <li>"Announcement of Results: April 30th"</li>
          </div>
          <br/><br/>
          </ul>
        </div>
     </div>
     </Container>
        </div>
    );
}
export default Admissions

