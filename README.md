# React Learnings (Hero Vired)
## About Project
 
 This project is about learning React framework. So far we have completed following : 

    - States and props  
    - useffect
    - components
    - hooks
    - routes
    - api calling




```js
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/landingPage' element={<LandingPage/>}/>
      </Routes>
    </>
  );
}
```
### List of Routes
+ http://localhost:3000/
+ http://localhost:3000/login
+ http://localhost:3000/landingPage
