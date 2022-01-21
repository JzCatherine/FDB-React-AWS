import { useState } from "react";
import Task from "./Task";

function TaskList(){

        const [taskItemsList, setTaskItemList] = useState ([
            "Follow Edukasyon.ph on FB",
            "Follow AWS siklab Pilipinas on FB",
            "Follow Zuitt Coding Bootcamp on FB",
            "ฅ^•ﻌ•^ฅ",    
        ]);
      

    const [taskValue, setTaskValue] = useState("Just another task")
    console.log("TaskValue>> ", taskValue)

    const inputChangeHandler = (e) => {
        setTaskValue(e.target.value)
    };

    const addTaskHandler = (e) => {
        setTaskItemList([taskValue, ...taskItemsList]);
        setTaskValue("");
    };

    return(
        <div>

            <input 
                className="task-input" 
                placeholder="Create a New Task"
                onChange={inputChangeHandler}
                onBlur = {addTaskHandler}
                value = {taskValue}
            />
        
            <ul>
                {taskItemsList.map((task, index) => {
                    return <Task key={index} taskName={task}/>
                })}
            </ul>

        </div>
    );
}

export default TaskList;