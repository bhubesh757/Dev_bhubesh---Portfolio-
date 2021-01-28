// import logo from './logo.svg'; 
import './App.css';
import Navbar from './Portfolio/Navbar';

import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import { HelpRounded } from '@material-ui/icons';
import { NavLogo } from './Portfolio/NavbarElements';
import HomePage from './Portfolio/Pages/HomePage';
import Skills from './Portfolio/Skills/Skills';
import Certification from './Portfolio/Certification/Certification';
import ContactFooter from './Portfolio/Footer/ContactFooter';
import Experience from './Portfolio/Experience/Experience';
import Projects from './Portfolio/Projects/Projects';


function App() {
  return (
    <Router className="App">
      {/* <h1> I am Bhubesh</h1> */}
      {/* Navbar */}
      <Navbar></Navbar>
      <Switch>
        <Route path = '/'>
          <HomePage></HomePage>
          <br></br>
          <Skills></Skills>
          <br></br>
          <Route path = '/'>
          <Certification></Certification>
          </Route>
          <br></br>
          <Experience></Experience>
          <br></br>
          <Projects></Projects>
          <ContactFooter path = './contact'></ContactFooter>
        
          {/*  */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
