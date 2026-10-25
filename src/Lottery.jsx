import { useState } from "react";
import "./Lottery.css";
import { genTicket, ticketSum } from "./helper";

export default function Lottery() {
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = ticketSum(ticket) === 15;
    let buyTicket = () => {
        setTicket(genTicket(3));
    }

    return(
        <div className="Lottery">
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button className="counter" onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations, you WON"}</h3>
        </div>
    )
}