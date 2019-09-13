import React from "react";
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const CharacterCard = props => {
    return (
        <div className="character-list" key={props.id}>
        <Card body>
            <CardTitle>{props.name}</CardTitle>
            <CardText>Height: {props.height} Mass: {props.mass}</CardText>
            <Button src={props.films}>Films</Button>
        </Card>
            {/* <h2>{props.name}</h2>
            <p>Height: {props.height} Mass: {props.mass}</p>
            <p>Films: {props.films}</p> */}
        </div>
    )
}

export default CharacterCard;