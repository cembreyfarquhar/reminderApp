import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import RemindersContainer from "./components/home-screen/reminders/RemindersContainer.js";

const StyledApp = styled.div`
  box-sizing: border-box;
  height: 100vh;
  font-size: 10px;
`;

const StyledHomePage = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 15% auto 15%;
  grid-template-rows: 16% 84%;
  grid-template-areas:
    "header header header"
    "reminders";
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

class App extends Component {
  state = {
    reminders: [
      {
        id: 0,
        text: "Turn in attendance!"
      }
    ]
  };

  submitReminder = (e, reminder) => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        reminders: [...prevState.reminders, reminder]
      };
    });
  };

  render() {
    return (
      <StyledApp>
        <StyledHomePage>
          <StyledHeader>
            <h1>Reminders</h1>
          </StyledHeader>
          <RemindersContainer reminders={this.state.reminders} submitReminder={this.submitReminder}/>
        </StyledHomePage>
      </StyledApp>
    );
  }
}

export default App;
