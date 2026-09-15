import "./index.css";

import logo from "./logo.svg";
import { Main } from "./pages/Main";
import reactLogo from "./react.svg";
import { Header } from "./static/Header";

export function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
