import { Header } from '../Header';

export function MainContainer(props) {
  return (
    <>
      <Header toggleTheme={props.toggleTheme} theme={props.theme} />
      <div>{props.children}</div>
    </>
  );
}
