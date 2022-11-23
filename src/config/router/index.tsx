import { ReactNode } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import useRoom from "../../hooks/room_hook";
import Home from "../../screens/home";
import Room from "../../screens/room";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { loginCred } = useRoom();

  if (loginCred && loginCred.result) {
    return <>{children}</>;
  } else {
    return <Navigate to="/room" />;
  }
}

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/room" element={<Room />} />
    </Routes>
  );
}
