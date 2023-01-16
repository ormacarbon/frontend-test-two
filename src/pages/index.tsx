import Header from "../components/Header";
import Welcome from "../components/Welcome";

export default function Home() {
  return (
    <>
      <Header showSearch={false} />
      <Welcome />
    </>
  );
}
