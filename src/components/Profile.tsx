import { useState } from "react";

const students = [
        {
            studentId: 1,
            name: 'Juliet',
            gender: 'female',
            score: 90,
        },
        {
            studentId: 2,
            name: 'Kemi',
            gender: 'female',
            score: 70,
        },
        {
            studentId: 3,
            name: 'Adewale',
            gender: 'male',
            score: 92,
        },
        {
            studentId: 4,
            name: 'Kenneth',
            gender: 'male',
            score: 67,
        },
    ];


function Profile(){

  const [showContent, setShowContent] = useState(false);

  const onClick = () =>{
    if(showContent === true){
      setShowContent(false)
    }else{
      setShowContent(true)
    }
  }

  return( 
    <>
      <div className="button">
        <button  className = "click" onClick={onClick}>{showContent? "HIDE": "REVEAL"}</button>
      </div>
      { showContent && 
        <div className="content">
          <h2 className="title">NAME GENDER SCORE</h2>
          <div>{students.map((student) => (
            <div className="student">
              <p>{student.studentId}.</p>  
              <p>{student.name}</p>
              <p>{student.gender}</p>
              <p>{student.score}</p>
            </div>
          ))}</div>
        </div>}
                          
    </>
        )
}

export default Profile