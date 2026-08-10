export const metadata = { title: "Notifications" };

export default function NotificationsPage() {
  const items = ["Application submitted", "Document required", "Payment received", "Contribution reminder", "Membership approved"];
  return <><div className="portal-header"><h1>Notifications</h1></div><div className="accordion">{items.map((item) => <details open key={item}><summary>{item}</summary><p>Demo notification ready for backend integration.</p></details>)}</div></>;
}
