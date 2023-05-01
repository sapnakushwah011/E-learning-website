import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Forms/Home';
import Login from './Forms/UserLogin';
import About from './Forms/About';
import Contact from './Forms/Contact/Contact';
import Gallery from './Forms/Gallery';
import Registration from './Forms/Registration';
import Events from './Forms/Events';
import Career from './Forms/Career';
import Course from './Forms/Course';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/event' element={<Events/>} />
      <Route path='/career' element={<Career/>} />
      <Route path='/course' element={<Course/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Registration/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

