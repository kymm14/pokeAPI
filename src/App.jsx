import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Routes from "../routes";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
