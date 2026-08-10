export const metadata = { title: "Payments" };

export default function PaymentsPage() {
  return <><div className="portal-header"><h1>Payments</h1><p className="muted">Payment gateway and bank details are not invented.</p></div><div className="portal-grid"><article className="portal-card"><h3>Online Payment</h3><p>Provider configuration required.</p><button className="btn btn-primary" type="button">Configure Payment</button></article><article className="portal-card"><h3>EFT / Bank Transfer</h3><p>Official banking information must be supplied by Credify.</p><span className="pill">Pending configuration</span></article><article className="portal-card"><h3>Payment States</h3><p>Ready for pending, successful and failed payment statuses.</p></article></div></>;
}
