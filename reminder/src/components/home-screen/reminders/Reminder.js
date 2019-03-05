import React from "react";
import styled from "styled-components";

const StyledReminder = styled.div`
  grid-column: 1 / 4;
  display: grid;
  grid-template-columns: 15% auto 15%;
  align-items: center;
  padding-bottom: 2%;
`;



const StyledReminderText = styled.div`
  font-size: 4rem;
  grid-column: 2 / 3;
  border-bottom: 1px dashed black;
`;

const Reminder = props => {
  return (
      <StyledReminder>
        <StyledReminderText>{props.reminder.memo}</StyledReminderText>
      </StyledReminder>
  );
};

export default Reminder;
