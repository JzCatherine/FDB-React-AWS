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
    return(
        <ul>
            <Task taskName="Follow Edukasyon.ph on FB"/>
            <Task taskName="Follow AWS siklab Pilipinas on FB"/>
            <Task taskName="Follow Zuitt Coding Bootcamp on FB"/>
            <Task taskName="ฅ^•ﻌ•^ฅ"/>
        </ul>
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
