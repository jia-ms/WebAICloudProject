import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          Inspecta
        </Link>
        <nav className="navbar__links">
          <a href="#features">Platform</a>
          <a href="#how-it-works">How it works</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="navbar__actions">
          <Link to="/login" className="btn btn--ghost">
            Sign in
          </Link>
          <Link to="/signup" className="btn btn--primary">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
