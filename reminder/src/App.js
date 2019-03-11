import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
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
          recurring: true,
          recurringFreq: 86400000,
          alarmTimes: [123123, 1231231]
        }
      ]
    };
  }

  submitReminder = reminder => {
    const firstOccurence = new Date(
      `${reminder.date} ${reminder.time}`
    ).getTime();
    reminder.alarmTimes.push(firstOccurence);
    reminder.recurringFreq = parseInt(reminder.recurringFreq);
    reminder.recurringFreq > 0
      ? reminder.alarmTimes.push(firstOccurence + reminder.recurringFreq)
      : (reminder.recurringFreq = 0);

    this.setState(prevState => ({
      reminders: [...prevState.reminders, reminder]
    }));
  };

  // function runs when a reminder goes off
  handleReminderAlarm = reminder => {
    alert(reminder.memo);
    reminder.alarmTimes.shift();
    if (reminder.recurringFreq > 0) {
      this.setState(prevState => ({
        ...prevState,
        reminders: prevState.reminders.filter(
          rem => rem.createdAt !== reminder.createdAt
        )
      }));
      this.setState(prevState => ({
        ...prevState,
        reminders: [
          ...prevState.reminders,
          {
            ...reminder,
            alarmTimes: [
              reminder.alarmTimes,
              Date.now() + reminder.recurringFreq
            ]
          }
        ]
      }));
    }

    // remove reminders with no alarmtimes
    this.setState(prevState => ({
      ...prevState,
      reminders: prevState.reminders.filter(rem => {
        return rem.alarmTimes.length > 0;
      })
    }));
  };

  listenForReminders = () => {
    const currentTime = Date.now();
    console.log(currentTime);
    const readyReminders = this.state.reminders.filter(reminder => {
      const check = reminder.alarmTimes.map(time => {
        return time < currentTime + 30000 && time > currentTime - 30000;
      });
      return check.includes(true);
    });

    readyReminders.length > 0
      ? readyReminders.forEach(this.handleReminderAlarm)
      : console.log("no reminders");

    // restarts function every minute
    setTimeout(this.listenForReminders, 60000);
  };

  // On mounting, listens for reminders every minute
  componentDidMount() {
    // initially runs function which then loops on a setTimeout
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
