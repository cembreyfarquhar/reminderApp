import React, { Component } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 15% auto 20%;
  grid-template-rows: 1fr 0.25fr 2fr 0.25fr 1.5fr 0.25fr 1.5fr 0.25fr 1.5fr 1fr;
  font-size: 1.4rem;
  h1 {
    grid-column: 2 / 3;
    align-self: end;
  }
  button {
    all: unset;
    cursor: pointer;
    font-size: 2rem;
    text-align: left;
  }
  span {
    grid-column: 2 / 3;
  }
  input {
    grid-column: 2 / 3;
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
        repeating: false
      }
    };
  }

  handleInput = ev => {
    ev.persist();
    this.setState(prevState => ({
      reminder: {
        memo: ev.target.value
      }
    }));
  };

  submitReminder = e => {
    e.preventDefault();
    this.props.submitReminder(this.state.reminder);
    this.props.history.push("/");
  }
  render() {
    return (
      <StyledForm>
        <h1>Add a Reminder</h1>
        <button
          onClick={this.submitReminder}
        >
          Save
        </button>
        <span>Memo</span>
        <input
          type="text"
          onChange={this.handleInput}
          name="text"
          value={this.state.reminder.memo}
        />
        <span>Date</span>
        <input />
        <span>Time</span>
        <input />
        <span>Recurring?</span>
        <input />
      </StyledForm>
    );
  }
}

export default AddReminderForm;
