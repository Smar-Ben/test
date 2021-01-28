import React, { useState, Fragment } from "react";
import "./Roll.css";
import Result from "../Result/Result";
import useEvent from "../../hook/useEvent";

function App() {
    const [numDice, setDice] = useState(1);
    const [numFace, setFace] = useState(6);
    const [result, setResult] = useState([]);
    const [pseudo, setPseudo] = useState("");
    const [isReady, setReady] = useState(false);

    const reset = () => {
        setPseudo("");
        setReady(false);
        setResult([]);
        setFace(6);
        setDice(1);
    };
    const pressHandle = (event) => {
        if (isReady !== false) {
            if (event.keyCode === 13) {
                setReady(true);
            }
        }
    };

    useEvent("keydown", pressHandle);

    //useEffect(() =>  []);

    const changeNumber = () => {
        const newNum = new Array(numDice);
        for (let i = 0; i < numDice; i++) {
            newNum[i] = Math.floor(Math.random() * numFace) + 1;
        }
        setResult(newNum);
    };

    const changeNumberDice = (e) => {
        setDice(e.target.value);
    };

    const changeFaceNum = (e) => {
        setFace(parseInt(e.target.value));
    };

    if (!isReady) {
        return (
            <Fragment>
                <image src="../licence.PNG"></image>

                <input
                    type="text"
                    value={pseudo}
                    onChange={(e) => setPseudo(e.target.value)}
                    placeholder="Pseudo"
                    style={{ marginLeft: 30, marginRight: 30 }}
                ></input>
                <button
                    onClick={() => {
                        setReady(true);
                    }}
                >
                    Submit
                </button>
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                <div className="selector">
                    <h3>
                        Roll your dice
                        {/* <br /> Pseudo: {pseudo} */}
                    </h3>
                    <p>
                        Roll{" "}
                        <input
                            type="number"
                            id="dices"
                            name="dices"
                            min="1"
                            max="200"
                            value={numDice}
                            onChange={changeNumberDice}
                        ></input>{" "}
                        dices with{" "}
                        <select name="faces" id="faces" value={numFace} onChange={changeFaceNum}>
                            <option value={4}>4</option>
                            <option value={6}>6</option>
                            <option value={8}>8</option>
                            <option value={10}>10</option>
                            <option value={12}>12</option>
                            <option value={20}>20</option>
                        </select>{" "}
                        faces
                    </p>
                </div>
                <button onClick={changeNumber}>Roll a dice</button>
                <button onClick={reset}>Change pseudo</button>
                <Result dices={result.length} faces={numFace} num={result} pseudo={pseudo}></Result>
            </Fragment>
        );
    }
}

export default App;
