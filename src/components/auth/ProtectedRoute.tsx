import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

// Wrap any route element that should only be reachable while signed in.
// Usage: <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
