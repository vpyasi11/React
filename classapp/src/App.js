import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// hooks/state
import { useState } from 'react';



function App() {
  

  //Porps: properties
  
  // let obj = {
  //   name:"hello",
  //   age:10,
  //   copyright:"@hello"
  // }

  // states : state of website (intial-static/dynamic)
  // hooks : for managing state of webpage (usestate)

  // let [statevariable, statefunction] = useState(defaultstate/initialstate)

  const [name, setName]  = useState('hero')
  const [num, setNum]  = useState(0)
  // statevariable :stores state of your component
  // statefunction : responsible for manipulating or changing state variable according to events

  function handleClick(){
    // to change the state of our name, we will use statefunction
    setName('vishu')
  }

  function increment(){
    setNum(num+1)
  }
  function decrement(){
    setNum(num-1)
  }

  const [showTitlePage, setTitlePage] = useState(true)

  return (
    // <>
    //   <Header myName = {obj.name} myAge={obj.age}/>
    //   <Footer mycopyright = {obj.copyright}/>
    // </>

    <>
      {/* my organization name is {name}
      <button onClick={handleClick}>Change the name</button><br></br> */}
      
      
      my counter 
      <button onClick={decrement}>-</button>{num}
      <button onClick={increment}>+</button>

      <div>
        <Header name={name} setName={setName} showTitlePage={showTitlePage} setTitlePage={setTitlePage}></Header>
        {/* <Footer name={name}></Footer> */}
      </div>
    </>
    
  );
}

export default App;
