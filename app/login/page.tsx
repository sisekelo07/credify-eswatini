import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/content";
import { TextField } from "@/components/FormFields";

export const metadata = { title: "Member Login" };

export default function LoginPage() {
  return (
    <main className="section auth-grid">
      <Image className="split-image" src={images.loginSplit} alt="" width={620} height={620} />
      <form className="form-card form-grid">
        <div className="full"><p className="eyebrow">Secure portal</p><h1>Member Login</h1><p className="muted">Mock authentication screen. Connect production auth before launch.</p></div>
        <TextField label="Email" type="email" />
        <TextField label="Password" type="password" />
        <button className="btn btn-primary" type="button">Login</button>
        <Link className="btn btn-secondary" href="/forgot-password">Forgot Password</Link>
      </form>
    </main>
  );
}
