import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Reminder from "./Reminder.js";

const StyledRemindersContainer = styled.div`
  grid-column: 1 / 4;
  display: grid;
  grid-template-rows: repeat(8, auto [reminder]);
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

const RemindersContainer = ({ reminders }) => {
  return (
    <StyledRemindersContainer>
      {reminders.map(reminder => {
        return <Reminder reminder={reminder} />;
      })}
      <StyledLink to="/add-reminder-form">
        <h2>+</h2>
      </StyledLink>
    </StyledRemindersContainer>
  );
};

export default RemindersContainer;
