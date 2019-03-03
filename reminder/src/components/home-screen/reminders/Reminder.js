import React, { Component } from "react";
import styled from "styled-components";

const StyledReminder = styled.div`
  grid-column: 1 / 4;
  display: grid;
  grid-template-columns: 15% auto 15%;
  align-items: center;
  h2 {
    width: 100%;
    grid-column: 1 / 2;
    text-align: center;
    font-size: 3rem;
  }
`;

const StyledReminderText = styled.div`
  font-size: 2rem;
  grid-column: 2 / 3;
  display: flex;
`;

class Reminder extends Component {

  render() {
    return (
      <StyledReminder>
        <h2>-</h2>
        <StyledReminderText>{this.props.reminder.text}</StyledReminderText>
        <h2 onClick={this.addReminder}>+</h2>
      </StyledReminder>
    );
  }
}

export default Reminder;
