// # READ THE INSTRUCTIONS CAREFULLY AND ATTEMPT THE QUESTIONS INTELLIGENTLY

// 1. In your react-app, create a new folder and name it `components`. Create a component named `Profile`. Do everything in this question inside the Profile file.

// - Using the following data, create a profile page that displays the following students.

// - Introduce a button at the top of the profile with the following behavior: 
//     * When the profile is visible, the button should show `hide`. 
//     * When the profile is hidden, the button should display `Reveal`.
//     * When the button is clicked, it should perform the action that is displays i.e Reveal or Hide the profile.

// ```ts
//     const students = [
//         {
//             studentId: 1,
//             name: 'Juliet',
//             sex: 'female',
//             score: 90,
//         },
//         {
//             studentId: 2,
//             name: 'Kemi',
//             gender: 'female',
//             score: 70,
//         },
//         {
//             studentId: 3,
//             name: 'Adewale',
//             gender: 'male',
//             score: 92,
//         },
//         {
//             studentId: 4,
//             name: 'Kenneth',
//             gender: 'male',
//             score: 67,
//         },
//     ];
// ```

// 2. Create another component called `RegisterStudent`. It should render `input` markups that can be used to extract students inputs such as :
//     - name
//     - gender
//     - score

// When the component is mounted, it should always render a button that says : `Apply For Adminssion`. Students willing to register clicks the button and it will display the form. 
// Note: The form is a collection of several `input` components described above. The user can then use the form to enter their detail.

// When the user is done, the form should display a button that says `submit`. This button, when clicked will add the information to the list of students in the `Profile` component. 

// Hints: 

// - When the `submit` button is clicked, it should hide the form and display the Profile component.

// - Requires a couple of react state.
// - Use conditionals or ternaries where you're convenient.

    export const STUDENTS : StudentData[] = [
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

    export interface StudentData {
        name: string;
        studentId: number;
        gender: string;
        score: number;
    }

    import React from 'react'
// import Profile from '../Profile';
    
    interface ProfileCProp {
        showProfile: boolean;
        onClick: () => void;
        profile: StudentData[];
        removeItem: () => void;
    }

    export default function ProfileC(props: ProfileCProp) {
        const { showProfile, onClick, profile, removeItem } = props;
        

        return (
            <>
            <div className='container'>
                {/* Profile render */}
                <div className='profile'>
                {
                        profile.map(({name, score, studentId, gender }, ) => (
                            <div className= "profile-container" style = {{display: showProfile? '': 'none' }}>
                                <div>{studentId}</div>
                                <div>{gender}</div>
                                <div>{name}</div>
                                <div>{score}</div>
                            </div>
                    )) 
                }
                </div>
                <div>
                    <button onClick={removeItem} className='btnGroup'>click</button>
                    <button onClick={onClick } className='btnChild'>
                    {showProfile? 'Hide' : 'Reveal'}
                </button>
                </div>
                               
                
                </div>
            </>
        )
    }
    