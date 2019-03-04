import React from "react";
import styled from "styled-components";
import Reminder from "./Reminder.js";

const StyledRemindersContainer = styled.div`
  grid-column: 1 / 4;
  background-color: #eeeeee;
  display: grid;
  grid-template-rows: repeat(8, auto [reminder]);
`;

const RemindersContainer = ({ reminders }) => {
  return (
    <StyledRemindersContainer>
      {reminders.map(reminder => {
        return <Reminder reminder={reminder} />;
      })}
    </StyledRemindersContainer>
  );
};

export default RemindersContainer;
