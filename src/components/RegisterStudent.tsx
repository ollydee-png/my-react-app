/*
# READ THE INSTRUCTIONS CAREFULLY AND ATTEMPT THE QUESTIONS INTELLIGENTLY

1. In your react-app, create a new folder and name it `components`. Create a component named `Profile`. Do everything in this question inside the Profile file.

- Using the following data, create a profile page that displays the following students.

- Introduce a button at the top of the profile with the following behavior: 
    * When the profile is visible, the button should show `hide`. 
    * When the profile is hidden, the button should display `Reveal`.
    * When the button is clicked, it should perform the action that is displays i.e Reveal or Hide the profile.

```ts
    const students = [
        {
            studentId: 1,
            name: 'Juliet',
            sex: 'female',
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
```

2. Create another component called `RegisterStudent`. It should render `input` markups that can be used to extract students inputs such as :
    - name
    - gender
    - score

When the component is mounted, it should always render a button that says : `Apply For Adminssion`. Students willing to register clicks the button and it will display the form. 
Note: The form is a collection of several `input` components described above. The user can then use the form to enter their detail.

When the user is done, the form should display a button that says `submit`. This button, when clicked will add the information to the list of students in the `Profile` component. 

Hints: 

- When the `submit` button is clicked, it should hide the form and display the Profile component.

- Requires a couple of react state.
- Use conditionals or ternaries where you're convenient.
*/

/**
 * Score script
 * 
 * folder - Profile.tsx = 1
 * 
 */

import { useState } from "react"
import Profile from "./Profile"


function RegisterStudent(){

const [showBio, setShowBio] = useState(false)
const [showProfile, setShowProfile] = useState(false)

const registration = () =>{
    if(showBio === false){
        setShowBio(true);
    }
}

const profilePage = () => {
    if(showProfile === false){
        setShowProfile(true);    
    }else{
        setShowProfile(false);
    }
}

    return(
        <>
        <button onClick={registration}>Apply For Admission</button>
        {showBio && <div>
        <label>NAME:</label>
        <input type="text"></input><br />
        <label>GENDER:</label>
        <input type="text"></input><br />
        <label>SCORE:</label>
        <input type="number"></input><br />
        <button onClick={profilePage}>SUBMIT</button>
        </div>}
        {showProfile && <Profile/>}
       
        
        </>
    )
    }

export default RegisterStudent