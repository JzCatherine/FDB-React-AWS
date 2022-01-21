import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TaskList from "./components/TaskList";


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
