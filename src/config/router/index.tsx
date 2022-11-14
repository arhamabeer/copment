import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../screens/home";
import Room from "../../screens/room";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}
