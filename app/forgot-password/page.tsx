import Link from "next/link";
import { TextField } from "@/components/FormFields";

export const metadata = { title: "Forgot Password" };

export default function ForgotPasswordPage() {
  return (
    <main className="section">
      <form className="form-card form-grid">
        <div className="full"><p className="eyebrow">Account recovery</p><h1>Reset Your Password</h1><p className="muted">Production email delivery must be connected before launch.</p></div>
        <TextField label="Email" type="email" />
        <button className="btn btn-primary" type="button">Send Reset Link</button>
        <Link className="btn btn-secondary" href="/login">Back to Login</Link>
      </form>
    </main>
  );
}
