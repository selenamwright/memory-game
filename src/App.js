import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Webpage from './components/webpage';
import AboutMe from './components/AboutMe'
import Resume from './components/Resume'
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
<Router>
  <div className='flex flex-col h-screen justify-between'>
<Navbar/>
<div className="container">
  <Routes>
      <Route 
       path="/" 
      element={<AboutMe />} 
              />
                <Route 
       path="/Portfolio" 
      element={<Webpage />} 
              />
  <Route 
      path="/Contact" 
      element={<Contact />} 
              />
               <Route 
      path="/Resume" 
      element={<Resume />} 
              />
    </Routes>
 </div>
 <Footer/>
 </div>
    </Router>
  );
}

export default App;
