
// import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import React from 'react';
import './App.css'
// import image from "./assets/image.png"
// import Profile from './components/Profile'
// import RegisterStudent from './components/RegisterStudent'
import ProfileC, { STUDENTS, type StudentData } from './components/correction/ProfileC';
import UnRegisterStudentC, {RegisterStudentC} from './components/correction/RegisterStudentC';
import Counter from './components/CounterApp';
import ToDoList from './todoList/ToDoList';


function App() {


  return (
    <div className=''>
      <ToDoList />
      {/* <Counter/> */}
    </div>
  )
}


export default App



  // const [showProfile, setShowProfile] = React.useState(false);
  // const [showForm, setShowForm] = React.useState(false);
  // const [profile, setProfile] = React.useState(STUDENTS);
 
  // const onClick = () => {
  //   showProfile? setShowProfile(false) : setShowProfile(true);
  // }

  // const onClickAdmissionButton = () => {
  //   setShowForm(true);
  // }

//   const setNewProfile = (arg: StudentData) => {
//     setProfile((prev) => [...prev, arg]);
//   }

  
//         const removeItem = ()=> {
//             if(profile.length === 0){
//               alert('Remove no student')
//             }else{
//               setProfile((prev) => prev.slice(0, prev.length - 1))
//             }
//             }  
  
// const removeProfile = (id: number)=>{
//     setProfile((prev) => 
//       prev.filter((STUDENT) => STUDENT.studentId !== id) );
// };


  //  <React.Fragment>
  //     <div className='alpha'>
  //       <ProfileC 
  //       onClick={onClick} 
  //       showProfile={showProfile}
  //       profile={profile}
  //       removeItem={removeItem}
  //     />
  //     <RegisterStudentC 
  //       // showForm={showForm} 
  //       // onClickAdmissionButton={onClickAdmissionButton} 
  //       profile={profile}
  //       setNewProfile={setNewProfile} 
  //       removeProfile={removeProfile}
  //     />
  //     </div>
      
  //   </React.Fragment>
    // <RegisterStudent/>

       

    //     <div className='parent1'>
    //   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nemo odio necessitatibus eveniet consectetur, eligendi vitae, provident modi temporibus beatae dolor impedit tempora aliquam? Illo quo at eaque, doloribus architecto in, reprehenderit dicta fugit placeat ea ab? Magnam aspernatur veritatis, expedita provident illum nesciunt praesentium commodi incidunt, laboriosam repellat itaque.</p>
    //   <div className='parent2'>
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, debitis!</p>
    //     <button type='button' className='counter mybutton' style={{color: 'black', padding: '10px', borderRadius: '1px'}}>Find me</button>
    //   </div>
    // </div>


     // const [count, setCount] = useState(10)
  // const [showCongrats, setShowCongrats] = useState(false);
  // const [isCounting, setIsCounting] = useState(false)

  // const onClick = ()=>{
  //   setCount((p) => p -1)};
  
  //  React.useEffect(() => {
  //    if(count === 0){
  //     setShowCongrats(true)
  //   }
  //   if(!isCounting||count === 0) return;
  //     const timer = setTimeout(onClick, 1000)
  //     return () => clearTimeout(timer);
  //   }, [count, isCounting])

  // React.useEffect(() => {
  // if(!showCongrats) return;
  //   const timer = setTimeout(() => {
  //     setShowCongrats(false);
  //         setCount(60);
  //       setIsCounting(false);
  //         }, 3000)
  //     return () => clearTimeout(timer)
  // }, [showCongrats]);

  //   <div className='card'>
  //     <h1 className='head'>Count down</h1>
  //     <p>count down to "0" by pressing the button below</p>
  //     <button  type='button' className='counter'  >{count}</button>
  //     <button className = "start" onClick={() => setIsCounting(true)} disabled = {isCounting}>
  //       {isCounting? "COUNTING..." : "CLICK"}
  //       </button>
  //         {
  //   showCongrats && (
  //     <div className='overlay'>
  //           <h2 className='text'>Congratulations! Yay</h2>
  //           <img className = "image" src={image} alt='profile picture'></img>
  //         </div>
  //       )
  // }
  //   </div>