import "./Header.css";
import React from "react";
import licence from "../licence.png";

function App(props) {
    return (
        <div className="App">
            <div className="header">
                <div></div>
                <h1>BE DICE</h1>
                <div></div>
            </div>
            <div className="main">{props.children}</div>
            <footer className="licence">
                <a href="https://creativecommons.org/licenses/by/4.0/deed.fr" target="_blank">
                    Sous licence CC-BY 4.0
                </a>
                <img src={licence}></img>
            </footer>
        </div>
    );
}
export default App;
