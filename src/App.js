import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Layout from './Components/Layout';
import About from './Components/About ';
import Academics from './Components/Academics';
import Admissions from './Components/Admissions';
import Faculty from './Components/Faculty';
import Students from './Components/Students';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Footer from './Components/Footer'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Layout/>
     <Routes>
      <Route path='/' element={<Home/>}/>  
      <Route path='/about' element={<About/>}/>
      <Route path='/academics' element={<Academics/>}/>
      <Route path='/admissions' element={<Admissions/>}/>
      <Route path='/faculty' element={<Faculty/>}/>
      <Route path='/students' element={<Students/>}/>  
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes> 
     
     </BrowserRouter> 
     <Footer/>
    </div>
  );
}

export default App;
