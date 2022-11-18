import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./config/router";
import NavScrollExample from "./components/navbar";
import Provider from "./provider";
export default function App() {
  return (
    <>
      <Provider>
        <NavScrollExample />
        <Router />
      </Provider>
    </>
  );
}
