import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App(){

    const paraStyle = {
        "marginBottom": "15px"
    };

    return(
        <div className="App-logo">
            <header className="app-header">
                <h1>To Do List App</h1>
                <p style={paraStyle}>A simple yet amazing To Do List React App.</p>
                <ul>
                    <li>Follow Edukasyon.ph on FB</li>
                    <li>Follow AWS Siklab Pilipinas on FB</li>
                    <li>Follow Zuitt Coding Bootcamp</li>
                    <li>ฅ^•ﻌ•^ฅ</li>
                </ul>
            </header>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));
