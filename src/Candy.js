import React from "react";
import { Link } from "react-router-dom";
import "./Candy.css";
import Message from "./Message";
import candyGif from "./candy.gif";

const Candy = () => {
    return (
        <div className="Candy">
            
            <Message>
                <h1>THE CANDY MAN CAN! YUM!</h1>
                <h1><Link to="/">go back</Link></h1>
                <img src={candyGif} alt="candy man can" />
            </Message>
        </div>
    )
}

export default Candy;