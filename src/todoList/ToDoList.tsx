import React from 'react';
import TaskList from './TaskList';

function ToDoList() {
    const [tasks, setTask] = React.useState<string[]>(() => {
        const existingTasks = localStorage.getItem("my-react-app");
        if (existingTasks) {
            const valueRetrieved = JSON.parse(existingTasks);
            return valueRetrieved.value || [];
        }
        return [];
    });
    const [userInput, setUserInput] = React.useState<string>('');


    // Keep only THIS hook to save data when tasks change
    React.useEffect(() => {
        const valueToStore = { value: tasks };
        localStorage.setItem("my-react-app", JSON.stringify(valueToStore));
    }, [tasks]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        e.preventDefault();
        const value = e.target.value;
        setUserInput(value);
    }


    const onClickAdd = () => {
        if(userInput === '') {
            alert("Please enter task");
            return;
        }
        if(!tasks.includes(userInput)) setTask((prev) => [...prev, userInput]);
        // const valueToStore = { value: tasks };
        // localStorage.setItem("my-react-app", JSON.stringify(valueToStore));
        // console.log("loc", localStorage.getItem("my-react-app"))
    }

    const onClickDelete = (index: number) => {
        setTask((prev) => prev.filter((k, id) => index !== id));
        // const valueToStore = { value: tasks };
        // localStorage.setItem("my-react-app", JSON.stringify(valueToStore));
    }

    return (
        <div className='container'>
            <section>
                <div className='section1'>
                    <input type='text' onChange={onChange} placeholder='Enter task'/>
                    <button className='btn1' onClick={onClickAdd}>Add</button>
                </div>
            </section>

            <section>
                <TaskList tasks={tasks} onClickDelete={onClickDelete} />
            </section>
        </div>
    )
}

export default ToDoList;