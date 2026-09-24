import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { mapAuthError } from "./LoginForm";

export default function ForgotPasswordForm() {
  const { resetPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await resetPassword(email);
      setSent(true);
    } catch (err) {
      setError(mapAuthError(err));
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="auth-form">
        <div className="auth-form__success">
          Check <strong>{email}</strong> for a link to reset your password.
        </div>
        <Link to="/login" className="btn btn--secondary btn--block">
          Back to sign in
        </Link>
      </div>
    );
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit} noValidate>
      {error && <div className="auth-form__error" role="alert">{error}</div>}

      <label className="auth-form__field">
        <span>Work email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          autoComplete="email"
          required
        />
      </label>

      <button className="btn btn--primary btn--block" type="submit" disabled={submitting}>
        {submitting ? "Sending link…" : "Send reset link"}
      </button>

      <p className="auth-form__footer">
        Remembered it? <Link to="/login">Sign in</Link>
      </p>
    </form>
  );
}
