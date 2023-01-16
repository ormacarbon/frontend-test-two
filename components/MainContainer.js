import Navbar from "./Navbar";
import { GlobalStyle } from "../styles/global";

export default function MainContainer({ children }) {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
    </>
  );
}
