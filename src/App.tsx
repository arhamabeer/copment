import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./config/router";
import NavScrollExample from "./components/navbar";
import Provider from "./provider";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Provider>
          <NavScrollExample />
          <Router />
        </Provider>
      </BrowserRouter>
    </>
  );
}
