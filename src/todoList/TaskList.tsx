import React from 'react';
import { Trash2 } from "lucide-react";

export interface TaskListProp {
    tasks: string[];
    onClickDelete: (index: number) => void;
}

export default function TaskList({ tasks, onClickDelete }: TaskListProp) {
  return (
    <div className='taskContainer'>
        {
            tasks && tasks.length > 0 && tasks.map((task, index) => (
                <div className='tasklist' key={index}>
                    <h1 className='h1crew'>{task}</h1>
                    <button className='btn2' onClick={() => onClickDelete(index)}>
                        <Trash2 />
                    </button>
                </div>
            ))
        }
    </div>
  )
}
