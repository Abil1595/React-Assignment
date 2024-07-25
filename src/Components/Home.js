import React from 'react'
import bg from '../Images/logo.png'
import { UncontrolledCarousel } from 'reactstrap';
import bg1 from '../Images/annual sports day.jpg'
import bg2 from '../Images/exhibition.webp'
import bg3 from '../Images/culturals.webp'
import {Row,Col,Container} from 'reactstrap'

function Home()
{
  const items = [ 
    {
      src: bg1,
      altText: 'Slide 1',
      caption: 'Celebrating Excellence in Sports' ,
      header: 'Annual Sports Day',
      key: '1' ,
      
    },
    {
      src: bg2,
      altText: 'Slide 2',
      caption: 'Showcasing Student Innovations',
      header: 'Science Exhibition',
      key: '2'
    },
    {
      src: bg3,
      altText: 'Slide 3',
      caption: 'Embracing Diversity and Creativity',
      header: 'Cultural Fest',
      key: '3'
    }
  ];
    return(
        <div>
          <Container >
          <h1>Springdale Public School</h1>  
      <img src={bg}/><br/><br/>
      <div className='intro'>
      Welcome to Springdale Public School, where we nurture young minds for a brighter future
      </div><br/><br/>
      <Row>
        <Col sm={12}>
        <UncontrolledCarousel items={items} />
        </Col>
      </Row>
          </Container>
      
      
        </div>
    );
}
export default Home
