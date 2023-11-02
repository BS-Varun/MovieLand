import { useState ,useEffect} from 'react';
import './App.css';
// const Person=(props)=>{
//   return(
//     <>
//     <h1>First Name:{props.name}</h1>
//     <h2>Last Name:{props.LastName}</h2>
//     <h2>Age: {props.age}</h2></>
//   )
// }
const App=()=> {
  // const name='Jane';
 const[counter,setCounter]=useState(0);

 useEffect(()=>{
// alert('Reload')
alert("You have cahnged the counter to"+ counter);
 },[counter]);
  return (
    <div className="App">
       <button onClick={()=>setCounter((prevCount)=>prevCount-1)}>-</button>
       <h1>{counter}</h1>
       <button onClick={()=>setCounter((prevCount)=>prevCount+1)}>+</button>

      {/* <Person name={'Varun'} LastName={'B S'} age={20}/>
      <Person name="Nagaraj" LastName="yernool" age={6+8}/>
      <Person/>
      <Person/>
      
      <h1>Hello,{name}!</h1> */}
    </div>
  );
}

export default App;
