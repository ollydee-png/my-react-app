import React from 'react'
import { STUDENTS, type StudentData } from './ProfileC';

interface RegisterStudentCProps {
    setNewProfile: (arg: StudentData) => void;
    profile: StudentData[];
    removeProfile: (id: number)=> void;
}

type FuncType = 'name' | 'gender' | 'score' | 'id';

export function RegisterStudentC(props: RegisterStudentCProps) {
    const {setNewProfile, profile, removeProfile} = props;

    const [name, setName] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [score, setScore] = React.useState(0);
    const [id, setId] = React.useState(0);

    const whenIsSubmitClicked = () => {
        if (name === '' || gender === "" || score === 0 || id === 0) {
            alert(`Invalid input`);
             return;
        }
        setNewProfile({
            name,
            gender,
            score,
            studentId: profile.length + 1
        })
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>, funcType: FuncType) => {
        event.preventDefault();
        const value = event.target.value;
        switch (funcType) {
            case 'name':
                setName(value);
                break;
            case 'gender':
                setGender(value);
                break;

            case 'score':
                setScore(Number(value));
                break;
        
            default:
                setId(Number(value));
                break;
        }
    }

    const whenRemoveClicked = () =>{
        if(id === 0){
            alert('Enter valid ID')
            return;
        }
        removeProfile(id)            
    }


    

    return (
        <div className='registeration'>
            {/* Admission Button */}
            <div className='admission'>
                Apply for admission
            </div>
            
            
            {/* Form */}
            {
                (
                    <div className='administration'>
                        <div className='inputCol'>
                            <label>Name</label>
                            <input type="text" placeholder='Enter Your Name' onChange={(e) => onChange(e, 'name')}/>
                            <h1>{name}</h1>
                        </div>
                        <div className='inputCol'>
                            <label>Gender</label>
                            <input type="text" placeholder='Enter Your Gender' onChange={(e) => onChange(e, 'gender')} />
                            <h1>{gender}</h1>
                        </div>
                        <div className='inputCol'>
                            <label>Score</label>
                            <input type="number" placeholder='Enter Your Score' onChange={(e) => onChange(e, 'score')} />
                            <h1>{score}</h1>
                        </div>
                        <div className='inputCol'>
                            <label>ID</label>
                            <input type="number" placeholder='Enter ID' onChange={(e) => onChange(e, 'id')} />  
                            <h1>{id}</h1>

                           <div className='regBtn'><button onClick={whenIsSubmitClicked}>Submit</button> <button onClick={whenRemoveClicked}>REMOVE</button></div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default function UnRegisterStudentC() {
  return (
    <div>RegisterStudentC</div>
  )
}

// export default {RegisterStudentC, UnRegisterStudentC}