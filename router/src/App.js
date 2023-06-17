import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import Profile from './components/Profile';
import {useCookies} from 'react-cookie'
import RCookies from './components/RCookies';
import ViewProduct from './components/ViewProduct';
import UseRef from './components/UseRef';

// Install : npm i react-router-dom
  // import routes,route from it
  // import browser router in index.js and wrap <app/> inside browserrouter tag
  //import pages (login/signup)
  //create routes

function App() {

  const [cookies, setCookie, removeCookies] = useCookies('name')
  setCookie('name','vishu')

  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Signup/>}/> */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/landingPage' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/' element={<RCookies/>}/>
        <Route path='/view/:id' element={<ViewProduct/>}/>
        <Route path='/useref' element={<UseRef/>}/>
      </Routes>
      {/* <button onClick={()={removeCookies('name')}}></button> */}
    </>
  );
}

export default App;
