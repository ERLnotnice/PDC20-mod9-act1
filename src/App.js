import './App.css';
import Nav from './components/Nav';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MyHome from './components/MyHome';
import MyProfile from './components/MyProfile';
import ContactUs from './components/ContactUs';
import MyMainForms from './MyMainForms/MyMainForms';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // For Bootstrap JS
import RegistrationForm from "./RegsiterForm/RegistrationForm";

function App() {
  return (

    // <div>
    // <MyMainForms />
    // </div>
  <Router>
    <Nav/>
    <div className='container'>
      <Routes>
        <Route path='/' element={<MyHome/>}/>
        <Route path='/profile' element={<MyProfile/>}/>
        <Route path='/contact'  element={<ContactUs/>}/>
        <Route path='/mymainforms/*' element={<MyMainForms/>}/>
        <Route path='*' element={<h2>404 Not Found</h2>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
