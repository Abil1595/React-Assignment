import React, { useState } from 'react'
import {Row,Col,Container,Collapse} from 'reactstrap'

function Contact()
{
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')
  const[pass,setPass]=useState('')
  const handleSubmit=(e)=>{
   e.preventDefault();
   console.log(username)
   console.log(email)
   console.log(message)
   setPass("Thank you for submitting the form we will get back to you soon")
   setUsername(' ')
   setEmail(' ')
   setMessage('')
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return(
        <div>  
          <Container >  
          <h1 style={{textAlign:'start', padding:'20px',color:'white',background:'linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(72,21,168,0.8099614845938375) 69%)'}}>Contact Us</h1><br/>
   <Row style={{background:'skyblue',marginLeft:'2px',marginRight:'2px'}} >
   
  <Col sm={12}>
     <br/>
      <div className='address'>
      <li> <span style={{ fontWeight: 'bold', fontSize: '1.2em',listStyle:'disc' }}>Address</span>: "Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code"</li>
      </div><br/><br/>
      <div className='address'>
      <li><span style={{ fontWeight: 'bold', fontSize: '1.2em',listStyle:'disc' }}>Phone</span>: "+1 (123) 456-7890"</li>
      </div><br/><br/>
      <div className='address'>
      <li><span style={{ fontWeight: 'bold', fontSize: '1.2em',listStyle:'disc' }}>Email</span>: "info@springdale.edu"</li>
      </div><br/><br/>
      <div className='address'>
      <li><span style={{ fontWeight: 'bold', fontSize: '1.2em',listStyle:'disc' }}>Contact Form</span>:<br/> <br/>
      <form onSubmit={handleSubmit}>

      <label><h4>Name:</h4></label><br/><input type='text' className='inputs' placeholder='please enter your name' value={username} onChange={(e)=>setUsername(e.target.value)} required/><br/>
      <label><h4>Email:</h4></label><br/><input type='email' className='inputs' placeholder='please enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}required /><br/>
      <label><h4>Message:</h4></label><br/><textarea  className='inputs' rows={5} placeholder='please enter your message' cols={40} value={message} onChange={(e)=>setMessage(e.target.value)} required/><br/>
      <button>Submit</button><br/>
      <span style={{color:'green'}}>{pass}</span>
      </form>
      
      </li>

      </div><br/><br/>
     
      </Col>
      
       </Row>
       <Row style={{background:'skyblue',marginLeft:'2px',marginRight:'2px'}}>
        
        <Col sm={12} >    
        <button onClick={toggle}><i className="ri-rocket-2-fill">Map</i>
        <Collapse isOpen={isOpen}>
          

        <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1075230351976!2d77.6839875!3d13.0288243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae10e0820b26d7%3A0x5f24a00c72eb6b89!2s1st%20Cross%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1721824642759!5m2!1sen!2sin"
        width="100"
        height="130"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </Collapse>
      </button>
       <br/><br/>
        </Col>
       </Row>
      
       </Container>
        </div>
    );
}
export default Contact

