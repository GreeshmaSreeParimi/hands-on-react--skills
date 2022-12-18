import React, { Component,useEffect, useState } from 'react';
import ListCast from './components/ListCast';
import Modals from './components/Modals';
import Nav from './components/Nav';
import "./App.scss";

class Welcome extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <h1>hi {this.props.name} !!!</h1>
    )
  }
}


function App() {
  const name = "Star Gazer Greeshma";
  return (
      <div className="container">
        <article>
          <hgroup>
            <img src="images/group.svg" alt="StarGazers Group" />
            {/* <h1>Meet the <i style={{color : 'steelblue'}}>{name}</i></h1> */}
            <Welcome name={name}/>
            <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
            <button className="outline" onClick= {()=> alert("Hi staar gazers !!!")}>Click Me</button>
          </hgroup>
        </article>
      </div>
  )
}

// function App() {
//   const [cast, setCast] = useState([]);
//   let [memberInfo, setMemberInfo] = useState(null);

//   async function fetchCast() {
//     const response = await fetch('cast.json');
//     setCast(await response.json());
//   }

//   useEffect(() => {
//     fetchCast();
//   });

//   return (
//     <>
//       <Nav cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
//       <div className="container">
//         <article>
//           <hgroup>
//             <img src="images/group.svg" alt="StarGazers Group" />
//             <h1>Meet the Stargazers</h1>
//             <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
//             <ListCast cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
//             {memberInfo && <Modals member={memberInfo} handleChange={(info) => { setMemberInfo(cast[info]) }} handleClose={() => { setMemberInfo(null) }} />}
//           </hgroup>
//         </article>
//       </div>
//     </>
//   )
// }
export default App
