import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./config/router";
import NavScrollExample from "./components/navbar";
import FileProvider from "./provider/fileProvider";
export default function App() {
  return (
    <>
      <FileProvider>
        <NavScrollExample />
        <Router />
      </FileProvider>
    </>
  );
}
