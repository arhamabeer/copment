import React from "react";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import Home from "../../screens/home";

const App = () => useRoutes([{ path: "/", element: <Home /> }]);

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
