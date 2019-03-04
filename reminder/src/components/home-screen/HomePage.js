import React from "react";
import styled from "styled-components";
import RemindersContainer from "./reminders/RemindersContainer.js";

const StyledHomePage = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 15% auto 15%;
  grid-template-rows: 16% 84%;
  grid-template-areas:
    "header header header"
    "reminders";
`;

const StyledHeader = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  h1 {
    font-size: 3rem;
  }
`;

const HomePage = ({ reminders }) => {
  return (
    <StyledHomePage>
      <StyledHeader>
        <h1>Reminders</h1>
      </StyledHeader>
      <RemindersContainer reminders={reminders} />
    </StyledHomePage>
  );
};

export default HomePage;
