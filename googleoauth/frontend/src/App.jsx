import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import ProtectedRoute from "./ProtectedRoute";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);

  // Check user session on first load
  useEffect(() => {
    axios.get("/auth/user", { withCredentials: true }).then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <Routes>
      {/* Login route */}
      <Route
        path="/login"
        element={
          user ? <Navigate to="/" replace /> : <Login />
        }
      />

      {/* Protected Home */}
      <Route
        path="/"
        element={
          <ProtectedRoute user={user}>
            <Home />
          </ProtectedRoute>
        }
      />

      {/* Any unknown route → go to login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
