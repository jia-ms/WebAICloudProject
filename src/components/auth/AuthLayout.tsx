import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}
// Shared shell for login / signup / forgot-password: a bordered panel
// centered on the graphite background, consistent with the landing page's
// instrument-panel visual language.
export default function AuthLayout({ eyebrow, title, subtitle, children }: AuthLayoutProps) {
  return (
    <div className="auth-shell">
      <Link to="/" className="auth-shell__logo">
        Inspecta
      </Link>
      <div className="auth-shell__panel">
        <p className="auth-shell__eyebrow">{eyebrow}</p>
        <h1 className="auth-shell__title">{title}</h1>
        <p className="auth-shell__subtitle">{subtitle}</p>
        {children}
      </div>
    </div>
  );
}
