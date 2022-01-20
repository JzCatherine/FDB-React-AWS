import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App(){
    return(
        <div className="App-logo">
            <header className="app-header">
                <h1>To Do List App</h1>
                <p>A simple yet amazing To Do List React App.</p>
            </header>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));
