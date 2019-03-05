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
        time: "17:52:30"
      }
    ]
  };

  submitReminder = reminder => {
    this.setState(prevState => ({
      reminders: [...prevState.reminders, reminder]
    }));
  };

  play = () => {
    const sound = new Audio("http://streaming.tdiradio.com:8000/house.mp3");
    sound.play();
    alert(this.state.reminders[0].memo);
    sound.pause();
    sound.currentTime= 0;
  };

  alarm = () => {
    setInterval(() => {
      const date =
        new Date().getHours().toString() +
        ":" +
        new Date().getMinutes().toString() +
        ":" +
        new Date().getSeconds().toString();
      date === this.state.reminders[0].time ? this.play() : console.log(date);
    }, 1000);
  };

  render() {
    // this.alarm();
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
