import { useAuth } from "@/context/AuthContext";

// Placeholder — this is where the defect dashboard (batch upload, job status,
// annotation review, defect trends) will live once that part of the app is built.
export default function DashboardPage() {
  const { currentUser, logout } = useAuth();

  return (
    <div style={{ padding: "48px", color: "#E8EAEC" }}>
      <p style={{ fontFamily: "IBM Plex Mono, monospace", color: "#8B9297" }}>
        SIGNED IN AS
      </p>
      <h1 style={{ fontFamily: "Archivo, sans-serif" }}>
        {currentUser?.displayName || currentUser?.email}
      </h1>
      <button className="btn btn--secondary" onClick={logout}>
        Sign out
      </button>
    </div>
  );
}
