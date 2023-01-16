import { useContext } from "react";
import { NameContext } from "../components/Context";
import { HomeContainer } from "../styles/style";

export default function Home() {
  const { name, setName, user, setUser } = useContext(NameContext);

  function handleShowName() {
    setUser(name);
  }

  return (
    <HomeContainer>
      {user ? (
        <h1>Welcome to my pokemon page, {user}</h1>
      ) : (
        <h1>Welcome to my pokemon page</h1>
      )}
      <h3>Type your name:</h3>
      <div className="form">
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={handleShowName}>Click</button>
      </div>
    </HomeContainer>
  );
}
