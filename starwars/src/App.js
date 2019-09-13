import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const AppDiv = styled.div`
    display: flex;
    flex-flow: column;
    align-content: center;
    margin-bottom: 10%;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <AppDiv>
        <h1 className="Header">React Wars</h1>
        <CharacterList />
      </AppDiv>
    </div>

  );
}

export default App;
