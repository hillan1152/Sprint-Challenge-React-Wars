import React from "react";
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const CardDiv = styled.div`
    border-radius: 15px;
    width: 30%;
    margin-left: 35%;

    
`;




const CharacterCard = props => {
    return (
        <CardDiv className="character-list" key={props.id}>
            <Card body>
                <CardTitle>{props.name}</CardTitle>
                <CardText>Height: {props.height} Mass: {props.mass}</CardText>
                <Button src={props.films}>Films</Button>
            </Card>
        </CardDiv>
    )
}

export default CharacterCard;