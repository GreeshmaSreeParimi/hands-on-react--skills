import React, { Component,useEffect, useState } from 'react';
import ListCast from './components/ListCast';
import Modals from './components/Modals';
import Nav from './components/Nav';
import "./App.scss";
import Welcome  from './components/Welcome';
import Support from './components/Support';

// class Welcome extends React.Component{
//   constructor(props){
//     super(props);
//   }

//   render() {
//     return (
//       <h1>hi {this.props.name} !!!</h1>
//     )
//   }
// }

// const Hello = (props) => {
//   return (<h1>Hi <i>{props.name}</i></h1>)
// }


function App() {
  const name = "Star Gazers";
  const str = "Say hello";
  const [memberInfo,setMemberInfo] = useState(null);

  return (
      <div className="container">
          <hgroup>
            <img src="images/group.svg" alt="StarGazers Group" />
            {/* <h1>Meet the <i style={{color : 'steelblue'}}>{name}</i></h1> */}
            <Welcome name={name}/>
            {/* <Hello name= {str} /> */}
            <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
            <ListCast onChoice={(info)=>{setMemberInfo(info)}}></ListCast>

            {memberInfo &&
            <article>
              <hgroup>
                <div style={{display :'flex',gap:'5 rem'}}>
                  <img style={{width:"200px"}} src={`images/${memberInfo.slug}_tn.svg`} alt={memberInfo.name}></img>
                  <hgroup>
                    <h1>{memberInfo.name}</h1>
                    <p>{memberInfo.bio}</p>
                  </hgroup>
                  
                </div>
              </hgroup>
            </article>
            }
            <Support></Support>
            
          </hgroup>
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
