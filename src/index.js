import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Task(props) {
    console.log(props);
    return(
        <li className="tasks-item">{props.taskName}</li>
    );
}

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

function App(){

    const paraStyle = {
        "marginBottom": "15px"
    };

    return(
        <div className="App-logo">
            <header className="app-header">
                <h1>To Do List App</h1>
                <p style={paraStyle}>A simple yet amazing To Do List React App.</p>
                <TaskList/>
            </header>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));
