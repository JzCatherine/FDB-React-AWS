import Task from "./Task";

function TaskList(){

    const taskItemsList = [
        "Follow Edukasyon.ph on FB",
        "Follow AWS siklab Pilipinas on FB",
        "Follow Zuitt Coding Bootcamp on FB",
        "ฅ^•ﻌ•^ฅ",
    ];

    return(
        <div>

            <input className="task-input" />
        
            <ul>
                {taskItemsList.map((task, index) => {
                    return <Task key={index} taskName={task}/>
                })}
            </ul>

        </div>
    );
}

export default TaskList;