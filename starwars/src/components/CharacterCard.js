import React from "react";

const CharacterCard = props => {
    return (
        <div className="character-list" key={props.id}>
            <h2>{props.name}</h2>
            <p>Height: {props.height} Mass: {props.mass}</p>
            <p>Films: {props.films}</p>
        </div>
    )
}

export default CharacterCard;