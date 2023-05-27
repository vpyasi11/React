import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Header from './components/Header';

function App() {

  let name = "vishu"
  return (
    <>
    <Header myName = {name}/>
    <Hello/>
      <div className="body">
        <h1 className="head">Linked<span>in</span></h1>
        <div className="section">
          <div className="content">
            <div className="SectionHead">
              <h1>Sign in</h1>
              <p>Stay updated on your professional world</p>
            </div>
            <div className="form">
              <input
                type="text"
                placeholder="Email or Phone"
                className="inputs user"
              />
              <input type="password" placeholder="Password" className="inputs pass" />
            </div>class
            <div className="forgetPass">Forgot Password?</div>
            <button className="signin">Sign in</button>
          </div>
        </div>
      </div>
      <div className="foot">foot</div>
    </>
  );
}

export default App;
