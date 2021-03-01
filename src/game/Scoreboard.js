import React from 'react';

const Scoreboard =(props) => {

    return (
        <div>
            <div>
                <h4>Player throwing: {props.isPlayer1Turn ? props.players[0] : props.players[1]}. Throws Left: {props.throwsLeft}</h4>
            </div>
            <div>
                <h3>{props.players[0]} score: {props.playersScore[0]}</h3>
            </div>
            <div>
                <h3>{props.players[1]} score: {props.playersScore[1]}</h3>
            </div>
        </div>
    )

}
    

export default Scoreboard