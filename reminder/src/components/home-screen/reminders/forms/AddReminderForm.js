import React, { Component } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 15% 32.5% 32.5% 20%;
  grid-template-rows: 1fr 0.25fr 0.5fr 0.25fr 5fr 0.25fr 1.5fr 0.25fr 1.5fr 1fr;
  font-size: 1.4rem;
  h1 {
    grid-column: 2 / 4;
    align-self: end;
    font-size: 2rem;
  }
  img {
    width: 50px;
  }
  img:nth-of-type(1) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
  img:nth-of-type(2) {
    grid-column: 3 / 4;
    grid-row: 3 / 4;
  }
  button {
    all: unset;
    cursor: pointer;
    font-size: 2rem;
    text-align: left;
  }
  span:nth-of-type(1) {
    grid-column: 2 / 3;
  }
  span:nth-of-type(2) {
    grid-column: 3 / 4;
  }
  span:nth-of-type(3) {
    grid-column: 2 / 3;
    text-align: right;
  }
  span:nth-of-type(4) {
    grid-column: 2 / 3;
    text-align: right;
  }
  textarea {
    grid-column: 1 / 5;
    font-size: 2rem;
  }
  input[type="checkbox"] {
    grid-column: 2 / 3;
  }
  input[type="date"],
  input[type="time"] {
    width: 35%;
    height: 35%;
    opacity: 1;
  }
  input[type="date"] {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
  input[type="time"] {
    grid-column: 3 / 4;
    grid-row: 3 / 4;
  }
`;

class AddReminderForm extends Component {
  constructor() {
    super();
    this.state = {
      reminder: {
        memo: "",
        date: "",
        time: "",
        createdAt: Date.now(),
        recurringFreq: 0,
        alarmTimes: []
      }
    };
  }

  handleInput = ev => {
    ev.persist();
    this.setState(prevState => ({
      ...prevState,
      reminder: {
        ...prevState.reminder,
        [ev.target.name]: ev.target.value
      }
    }));
  };

  submitReminder = e => {
    e.preventDefault();
    this.props.submitReminder(this.state.reminder);
    this.props.history.push("/");
  };
  render() {
    return (
      <StyledForm>
        <h1>Add a Reminder</h1>
        <button onClick={this.submitReminder}>Save</button>
        <span>Date</span>
        <span>Time</span>
        <img
          src="https://cdn3.iconfinder.com/data/icons/pictofoundry-pro-vector-set/512/Calendar-512.png"
          alt="calendar icon"
        />
        <input
          type="date"
          name="date"
          min="2019-03-04"
          onChange={this.handleInput}
        />
        <img
          src="https://www.fjordsafari.com/wp-content/uploads/2016/11/round-clock-icon-86811.png"
          alt="clock icon"
        />
        <input type="time" name="time" onChange={this.handleInput} />
        <span>Memo</span>
        <textarea
          type="text"
          onChange={this.handleInput}
          name="memo"
          value={this.state.reminder.memo}
        />
        <span>Repeat Every: </span>
        <select name="recurringFreq" value={this.state.recurringFreq} onChange={this.handleInput}>
          <option value="0">Never</option>
          <option value="36000000">Hour</option>
          <option value="28800000">3 Hours</option>
          <option value="86400000">Day</option>
        </select>
      </StyledForm>
    );
  }
}

export default AddReminderForm;
