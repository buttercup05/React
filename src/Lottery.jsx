import { useState } from "react";
import "./Lottery.css";
import { genTicket, ticketSum } from "./helper";
import Ticket from "./Ticket.jsx";

export default function Lottery({n, winningSum}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = ticketSum(ticket) === winningSum;
    let buyTicket = () => {
        setTicket(genTicket(n));
    }

    return(
        <div className="Lottery">
            <h1>Lottery Game!</h1>
            <Ticket ticketArr={ticket}/>
            <button className="counter" onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations, you WON"}</h3>
        </div>
    )
}