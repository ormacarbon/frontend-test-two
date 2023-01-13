import { useState, useEffect } from "react";

import Moon from "../../assets/moon";
import Sun from "../../assets/sun";
import { Button } from "./styles";

const ThemeButton = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <Button>
      {active ? <Sun /> : <Moon />}
      <input
        type="checkbox"
        id="theme"
        name="theme"
        value={active}
        onChange={() => setActive(!active)}
      />
    </Button>
  );
};

export default ThemeButton;
