//? React dependences
import { useState } from "react";
//? Styled Components
import {
  StatusContainer,
  StatusDiv,
  StatusButtonDiv,
  StatusButton,
  FilterMessage,
} from "./style";

export default function FilterButton({ setStatus }) {
  // Message of actual filter selected
  const [filterMessage, setFilterMessage] = useState("All characters");

  // Status Filter Functions
  const handleStatusAlive = () => {
    setStatus("Alive");
    setFilterMessage("Alive Characters");
  };

  const handleStatusDead = () => {
    setStatus("Dead");
    setFilterMessage("Dead Characters");
  };

  const handleStatusDefault = () => {
    setStatus("");
    setFilterMessage("All characters");
  };

  return (
    <StatusContainer>
      <StatusDiv>
        <h3>Filter by:</h3>
        <StatusButtonDiv>
          <StatusButton onClick={handleStatusAlive}>Alive</StatusButton>
        </StatusButtonDiv>
        <StatusButtonDiv>
          <StatusButton onClick={handleStatusDead}>Dead</StatusButton>
        </StatusButtonDiv>
        <StatusButtonDiv>
          <StatusButton onClick={handleStatusDefault}>Reset</StatusButton>
        </StatusButtonDiv>
      </StatusDiv>
      <FilterMessage>{filterMessage}</FilterMessage>
    </StatusContainer>
  );
}
