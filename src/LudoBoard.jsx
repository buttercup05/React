import { useState } from "react";
import "./LudoBoard.css";

export default function LudoBoard() {
    let [moves, setMoves] = useState({red : 0, blue : 0, green : 0, yellow : 0});
    let [arr, setArr] = useState(["no moves"]);

    let updateBlue = () => {
        // setMoves( (prevMove) => {
        //     return { ...prevMove,blue: prevMove.blue+1};
        // })

        setArr((prevArr) => {
            return [...prevArr, " blue moves"];
        })
        console.log(arr);
    }
    let updateGreen = () => {
        setMoves( (prevMove) => {
            return { ...prevMove,green: prevMove.green+1};
        })
    }
    let updateYellow = () => {
        setMoves( (prevMove) => {
            return { ...prevMove,yellow: prevMove.yellow+1};
        })
    }
    let updateRed = () => {
        setMoves( (prevMove) => {
            return { ...prevMove,red: prevMove.red+1};
        })
    }

    return (
        <div className="LudoBoard">
            <p>Game begins!</p>
            <div className="btns">
                <p>{arr}</p>
                <p>Blue moves = {moves.blue}</p>
                <button onClick={updateBlue} style={{backgroundColor: "blue"}}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button onClick={updateGreen} style={{backgroundColor: "green"}}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button onClick={updateYellow} style={{backgroundColor: "yellow", color: "black"}}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button onClick={updateRed} style={{backgroundColor: "red"}}>+1</button>
            </div>
        </div>
    )
}