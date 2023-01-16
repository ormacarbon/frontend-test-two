import { useContext } from "react";
import { NameContext } from "../components/Context";

export default function Home() {
  const { name, setName, user, setUser } = useContext(NameContext);

  function handleShowName() {
    setUser(name);
  }

  return (
    <div>
      {user ? (
        <h1>Welcome to my pokemon page, {user}</h1>
      ) : (
        <h1>Welcome to my pokemon page</h1>
      )}
      <div>
        <h4>Type yout name:</h4>
        <input type="text" onChange={(event) => setName(event.target.value)} />
        <button onClick={handleShowName}>Click</button>
      </div>
    </div>
  );
}
