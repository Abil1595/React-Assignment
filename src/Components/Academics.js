import React from 'react'
import { Container } from 'reactstrap';
function Academics()
{
    return(
      <div>
        <Container>
      <h1 style={{textAlign:'start',padding:'20px',color:'white',background:'linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(72,21,168,0.8099614845938375) 69%)'}}>Academics</h1>
        <div style={{background:'skyblue'}}>
          
          <br/>
          <div className='Curriculum'>
          <h1>Curriculum</h1>
      <ul>
      <li><div className='primary'>Primary (Grades 1-5):</div>
      English, Mathematics, Science, Social Studies, Art, Physical Education
      </li><br/><br/>
        <li><div className='primary'>Secondary (Grades 6-10)</div>
        English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art
        </li><br/><br/>
        <li><div className='primary'>Senior Secondary (Grades 11-12):</div>
        <div className='Secondary'><li>Science Stream :</li></div>
        Physics, Chemistry, Biology, Mathematics, Computer Science, English
        <div className='Secondary'><li>Commerce Stream:</li></div>
        Accountancy, Business Studies, Economics, Mathematics, English
        
        </li><br/><br/>
        <li><div className='primary'>Teaching Methodologies:</div>
        "We use a blend of traditional and modern teaching techniques to cater to different learning styles."
      </li><br/><br/>
      <li><div className='primary'>Educational Resources:</div>
      "Digital classrooms, interactive learning modules, and access to online educational platforms."

      </li><br/><br/>
      </ul>
          </div>
          
        </div>
        </Container>
        </div>
    );
}
export default Academics
