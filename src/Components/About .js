import React,{useState} from 'react'
import { Collapse, Button, CardBody, Card, Container } from 'reactstrap';

function About()
{
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);
  const [isOpen1, setIsOpen1] = useState(true);

  const toggle1 = () => setIsOpen1(!isOpen1);
  const [isOpen2, setIsOpen2] = useState(true);

  const toggle2 = () => setIsOpen2(!isOpen2);
  const [isOpen3, setIsOpen3] = useState(true);

  const toggle3 = () => setIsOpen3(!isOpen3);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggle4 = () => setIsOpen4(!isOpen4);
    return(
        <div>
          <Container>
       <Button outline  color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>History</Button>
      <Collapse isOpen={isOpen}>
        <Card body inverse color="success">
          <CardBody tag='h5'>
          "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students."
          </CardBody>
        </Card>
      </Collapse><br/><br/>
      <Button outline color="primary" onClick={toggle1} style={{ marginBottom: '1rem' }}>Vision</Button>
      <Collapse isOpen={isOpen1}>
        <Card body inverse color="secondary">
          <CardBody tag='h5'>
          "To create a learning environment that fosters academic excellence, critical thinking, and ethical values."
          </CardBody>
        </Card>
      </Collapse><br/><br/>
      <Button outline color="success" onClick={toggle2} style={{ marginBottom: '1rem' }}>Mission: </Button>
      <Collapse isOpen={isOpen2}>
        <Card body inverse color="danger">
          <CardBody tag='h5'>
          "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world."
          </CardBody>
        </Card>
      </Collapse><br/><br/>
      <Button outline color="secondary" onClick={toggle3} style={{ marginBottom: '1rem' }}>Principal's Message: </Button>
      <Collapse isOpen={isOpen3}>
        <Card body inverse color="success">
          <CardBody tag='h5'>
          "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future."
          </CardBody>
        </Card>
      </Collapse><br/><br/>
      <Button outline color="success" onClick={toggle4} style={{ marginBottom: '1rem' }}>Infrastructure and Facilities: </Button>
      <Collapse isOpen={isOpen4}>
        <Card body inverse color="secondary">
          <CardBody tag='h5'>
            <ul className='content'>
           <li>"State-of-the-art science and computer labs"</li> <br/><br/>
            <li>"Spacious and well-equipped classrooms"</li><br/><br/>
            <li>"Library with a vast collection of books and digital resources"</li><br/><br/>
           <li>"Sports facilities including a playground, gymnasium, and swimming pool"</li> <br/>
            </ul>
         
          </CardBody>
        </Card>
      </Collapse><br/><br/>
      </Container>
        </div>
    );
}
export default About
