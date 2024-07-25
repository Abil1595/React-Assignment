import React,{useState} from 'react'
import {Nav,Navbar,NavbarToggler,Collapse,NavItem,NavLink,NavbarBrand} from 'reactstrap';
import { Link } from 'react-router-dom';
import bg from '../Images/logo.png'
function Layout()
{
    const [nav,setNav]=useState(false);       
    const Navtoggle=()=>setNav(!nav); 
    return(
 <div className="App"> 
    <Navbar color="light" light expand="lg">
     <NavbarBrand href='/'><img src={bg} className='logo-image1'/></NavbarBrand>
     <NavbarToggler onClick={Navtoggle}/>
     <Collapse isOpen={nav} navbar>    
    <Nav className="mr-auto" navbar>
    <NavItem>        
    <NavLink><Link  to="/" className='layout-design'>HOME</Link></NavLink>
    </NavItem>
    <NavItem>
    <NavLink><Link  to="/about" className='layout-design'>About Us</Link></NavLink>
    </NavItem>
    <NavItem>
    <NavLink><Link  to="/academics" className='layout-design'>Academics</Link></NavLink>
    </NavItem>
    <NavItem>
    <NavLink><Link  to="/admissions" className='layout-design'>Admissions</Link></NavLink>
    </NavItem>
    <NavItem>
    <NavLink><Link  to="/faculty" className='layout-design'>Faculty</Link></NavLink>
    </NavItem>
    <NavItem>
    <NavLink><Link  to="/students" className='layout-design'>Students</Link></NavLink>
    </NavItem>
    <NavItem>
    <NavLink><Link  to="/gallery" className='layout-design'>Gallery</Link></NavLink>
    </NavItem>
    <NavItem>
    <NavLink><Link  to="/contact" className='layout-design'>Contact Us</Link></NavLink>
    </NavItem>
    </Nav>
     </Collapse>
     </Navbar><br/>
  </div>
    );
}
export default Layout
