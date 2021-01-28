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
                <div>
                    <a
                        href="https://creativecommons.org/licenses/by/4.0/deed.fr"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Sous licence CC-BY 4.0
                    </a>
                    <img src={licence} alt="licence"></img>
                </div>
				<div>
                <a href="https://github.com/Smar-Ben/test" target="_blank" rel="noreferrer">
                    Code source
                </a>
				<p>This site is powered by Netlify</p>
				</div>
            </footer>
        </div>
    );
}
export default App;
