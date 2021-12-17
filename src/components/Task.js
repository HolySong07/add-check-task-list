import React from 'react';

const Task = ({task, ...props}) =>  {

    const ActionBtn = () => (
    <span className="act-btn">
        {task.done ? (
        <span onClick={props.deleteTask}>✓</span>
    )  :  (
        <span onClick={props.doneTask}>х</span>
    )}
    </span>
    );
        
   const className = "task " + (task.done ? "task-done" : "");

    return(
        <p className={className}>
            <span className='title'>{task.title}</span>
            <ActionBtn />
        </p>
        )
    
}

export default Task;