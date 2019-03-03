import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";

const StyledApp = styled.div`
  box-sizing: border-box;
  height: 100vh;
`;

const StyledHomeScreen = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 10% auto 10%;
  grid-template-rows: 16% 12% 12% 12% 12% 12% 12% 12%;
`;


class App extends Component {
  state = {
    reminders: []
  };
  render() {
    return (
      <StyledApp>
        <StyledHomeScreen>
          Reminders
        </StyledHomeScreen>
      </StyledApp>
    );
  }
}

export default App;
