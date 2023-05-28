import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
// Install : npm i react-router-dom
  // import routes,route from it
  // import browser router in index.js and wrap <app/> inside browserrouter tag
  //import pages (login/signup)
  //create routes

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
