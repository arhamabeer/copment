import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./config/router";
import NavScrollExample from "./components/navbar";
export default function App() {
  return (
    <>
      <NavScrollExample />
      <Router />;
    </>
  );
}
