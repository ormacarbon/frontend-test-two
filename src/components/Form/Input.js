import { Label, BoxInput, Line } from "./styles";

function Input({ type, label, id, value, setValue, ...props }) {
  return (
    <BoxInput>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
      <Line />
      <Label htmlFor={id}>{label}</Label>
    </BoxInput>
  );
}

export default Input;
