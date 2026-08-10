export const metadata = { title: "Admin Payments" };

export default function AdminPaymentsPage() {
  return <><div className="portal-header"><h1>Payments</h1></div><article className="portal-card"><h3>Payment Configuration</h3><p>Gateway keys, merchant IDs and bank details must be kept out of frontend code and supplied through secure environment configuration.</p></article></>;
}
