import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


export default function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
        .get("https://swapi.co/api/people/")
        .then(response => {
            const people = response.data;
            console.log("All Characters", people);
            setCharacters(characters);
        })
        .catch(error =>{
            console.log("No Characters", error)
        })
    }, []);

    return (
        <div className="character">
            {
                characters.map(person => {
                    return (
                        <CharacterCard
                            key = {person.id}
                            name = {person.name}
                            height = {person.height}
                            mass = {person.mass}
                            films = {person.films}
                        />
                    );
                })
            }
        </div>
    )
}
