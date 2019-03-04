import React, { Component } from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./components/home-screen/HomePage.js";
import AddReminderForm from "./components/home-screen/reminders/forms/AddReminderForm.js";

const StyledApp = styled.div`
  box-sizing: border-box;
  height: 100vh;
  font-size: 10px;
`;

class App extends Component {
  state = {
    reminders: [
      {
        memo: "Turn in attendance!",
      }
    ]
  };

  submitReminder = reminder => {
    this.setState(prevState => ({
      reminders: [...prevState.reminders, reminder]
    }));
  };

  render() {
    return (
      <StyledApp>
        <Route
          exact
          path="/"
          render={props => (
            <HomePage {...props} reminders={this.state.reminders} />
          )}
        />
        <Route
          exact={true}
          path="/add-reminder-form"
          render={props => (
            <AddReminderForm {...props} submitReminder={this.submitReminder} />
          )}
        />
      </StyledApp>
    );
  }
}

export default App;
