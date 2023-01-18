import { useCallback, useEffect, useRef, useState } from "react";
import { Container, Options, Option, Select, Background } from "./styles";
import { TriangleDownIcon as DownIcon } from "@primer/octicons-react";

export default function IssueTypeDropdown(props) {
  const select = useRef();
  const [margin, setMargin] = useState();
  const [openDropdrown, setOpenDropdown] = useState(false);

  const state = useCallback((state) => {
    return state === "open"
      ? "Abertas"
      : state === "closed"
      ? "Fechadas"
      : "Todas";
  });
  const options = ["all", "open", "closed"];

  useEffect(() => {
    setMargin(select.current?.clientWidth);
  }, [state]);

  function handleChangeState(state) {
    props.setState(state);
    toggleDropdown();
  }

  function toggleDropdown() {
    setOpenDropdown(!openDropdrown);
  }

  return (
    <>
      <Container>
        <Select ref={select} onClick={toggleDropdown}>
          {state(props.state)} <DownIcon />
        </Select>
        {openDropdrown && (
          <Options margin={margin}>
            {options.map((op, i) => (
              <Option
                selected={op === props.state}
                onClick={() => handleChangeState(op)}
                key={i}
              >
                {state(op)}
              </Option>
            ))}
          </Options>
        )}
      </Container>
      {openDropdrown && <Background onClick={toggleDropdown} />}
    </>
  );
}
