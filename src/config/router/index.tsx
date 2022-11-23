import { ReactNode, useMemo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import useRoom from "../../hooks/room_hook";
import Home from "../../screens/home";
import Room from "../../screens/room";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { loginCred } = useRoom();
  const token = useMemo(() => {
    return localStorage.getItem(`_tkn_room_user_credential`);
  }, [loginCred]);

  if ((loginCred && loginCred.result) || token) {
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
