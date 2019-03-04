import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledReminder = styled.div`
  grid-column: 1 / 4;
  display: grid;
  grid-template-columns: 15% auto 15%;
  align-items: center;
`;

const StyledLink = styled(Link)`
  all: unset;
  grid-column: 1 / 2;
  h2 {
    width: 100%;
    height: 100%;
    cursor: pointer;
    grid-column: 1 / 2;
    text-align: center;
    font-size: 3rem;
  }
`;

const StyledReminderText = styled.div`
  font-size: 4rem;
  grid-column: 2 / 3;
`;

const Reminder = props => {
  return (
      <StyledReminder>
        <h2>-</h2>
        <StyledReminderText>{props.reminder.memo}</StyledReminderText>
        <StyledLink to="/add-reminder-form"><h2>+</h2> 
        </StyledLink>
      </StyledReminder>
  );
};

export default Reminder;
