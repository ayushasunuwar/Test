import { StrictMode } from 'react'
import {useState} from 'react';
import { createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Heading1 } from 'lucide-react';


// function Car(props){
//   const mystyles = {
//     color: "red",
//     fontSize: "20px",
//     backgroundColor: "lightYellow"
//   };

//   return(
//     <>
//       <h1 style={mystyles}>My Car</h1>
//       <p>I am {props.color} colored.</p>
//     </>
//   );
// }

// function Fruit(){
//   const x = 5;
//   let y = "Apple";
//   if(x<10){
//     return "Banana";
//   }

//   return(
//     <h1>{y}</h1>
//   );
// }

// function Garage(){
//   return(
//     <>
//       <h1>who lives in my Garage?</h1>
//       <Car color="Red"/>
//       <Car color="Yellow"/>
//     </>
//   );
// }

// function Son(props){
//   return(
//     <div style={{background: "lightyellow", color: "black"}}>
//       <h2>Son</h2>
//       <div>{props.children}</div>
//     </div>
//   );
// }

// function Daughter(props){
//   return(
//     <div style={{background: "lightblue", color:"black"}}>
//       <h2>Daughter</h2>
//       <div>{props.children}</div>
//     </div>
//   );
// }

// function Parent(){
//   return(
//     <div>
//       <h1>My two children</h1>
//       <Son>
//           <p>This was written in parent component,
//              but displayed as a part of son component.
//           </p>
//       </Son>

//       <Daughter>
//         <p>This was written inside parent component 
//           but displajyed as a part of daughter component.
//         </p>
//       </Daughter>
//     </div>
//   );
// }

// function Football(){
//   const shoot = (a) => {
//     alert(a);
//   }

//   return(
//     <button onClick = {() => shoot("Great shot")}>Take the shot</button>
//   );
// }

// //Conditional rendering

// //using if else statement

// function MissedGoal(){
//   return (
//     <h1>Missed</h1>
//   );
// }

// function MadeGoal(){
//   return (
//     <h1>Goal!!</h1>
//   );
// }

// function Goal(props){
//   const isGoal = props.isGoal;
//   if (isGoal){
//     return <MadeGoal />
//   } else{
//     return <MissedGoal />
//   }
// }

// //using && operator
// function Car1(props){
//   return(
//     <>
//       {props.brand && <h1>My car is {props.brand}</h1>}
//     </>
//   );
// }

//Form
function MyForm(){
  return(
    <form action="">
      <label>Enter your name: <input type="text" /></label>
    </form>
  );
}

createRoot(document.getElementById('root')).render(
  <>
    {/* <Car color="White"/>
    <Fruit />
    <Garage />
    <Parent />
    <Football />
    <Goal isGoal={true}/>
    <Car1 brand="Ford"/> */}
    <MyForm />
  </>
)
