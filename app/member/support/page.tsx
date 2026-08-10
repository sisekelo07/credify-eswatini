import Link from "next/link";

export const metadata = { title: "Support" };

export default function SupportPage() {
  return <><div className="portal-header"><h1>Support</h1></div><div className="portal-grid"><article className="portal-card"><h3>WhatsApp Support</h3><p>Connect official number with NEXT_PUBLIC_WHATSAPP_NUMBER.</p><Link className="btn btn-primary" href="/contact">Chat With Us</Link></article><article className="portal-card"><h3>FAQs</h3><p>Find quick answers.</p><Link className="btn btn-secondary" href="/faqs">Open FAQs</Link></article></div></>;
}
