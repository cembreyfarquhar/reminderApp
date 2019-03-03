import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";

const StyledApp = styled.div`
  box-sizing: border-box;
  height: 100vh;
  font-size: 10px;
`;

const StyledHomePage = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 15% auto 15%;
  grid-template-rows: 16% 12% 12% 12% 12% 12% 12% 12%;
  grid-template-areas:
    "header header header"
    ". reminder ."
    ". reminder ."
    ". reminder ."
    ". reminder ."
    ". reminder ."
    ". reminder ."
    ". reminder .";
    background-color: #EEEEEE;
`;

const StyledHeader = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  h1 {
    font-size: 3rem;
  }
`;

const StyledReminder = styled.div`
  font-size: 2rem;
  grid-column: 2 / 3;
`;

class App extends Component {
  state = {
    reminders: []
  };
  render() {
    return (
      <StyledApp>
        <StyledHomePage>
          <StyledHeader>
            <h1>Reminders</h1>
          </StyledHeader>
          <StyledReminder>Hey</StyledReminder>
          <StyledReminder>Do</StyledReminder>
          <StyledReminder>The</StyledReminder>
          <StyledReminder>Thing</StyledReminder>
          <StyledReminder>Right</StyledReminder>
          <StyledReminder>Frikkin</StyledReminder>
          <StyledReminder>Now</StyledReminder>
        </StyledHomePage>
      </StyledApp>
    );
  }
}

export default App;
