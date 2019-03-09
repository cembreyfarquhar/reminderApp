import React, { Component } from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./components/home-screen/HomePage.js";
import AddReminderForm from "./components/home-screen/reminders/forms/AddReminderForm.js";

const StyledApp = styled.div`
  box-sizing: border-box;
  height: 100vh;
  font-size: 1rem;
`;

class App extends Component {
  constructor() {
    super();
    this.currentTime = 0;
    this.state = {
      reminders: [
        {
          memo: "Turn in attendance!",
          date: "",
          time: "",
          alarmTimes: [10, 15, 25]
        }
      ]
    };
  }

  submitReminder = reminder => {
    this.setState(prevState => ({
      reminders: [...prevState.reminders, reminder]
    }));
  };

  // START HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  listenForReminders = () => {
    // const currentTime = Date.now();
    this.currentTime++;
    console.log(this.currentTime);
    const readyReminders = this.state.reminders.filter(reminder => {
      const check = reminder.alarmTimes.map(time => {
        return time < this.currentTime + 2 && time > this.currentTime - 2;
      });
      return check.includes(true);
    });

    readyReminders.length > 0 ? console.log(JSON.stringify(readyReminders)) : console.log("no reminders");

    setTimeout(this.listenForReminders, 3000);
  };

  // On mounting, listens for reminders every minute
  componentDidMount() {
    this.listenForReminders();
  }

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
