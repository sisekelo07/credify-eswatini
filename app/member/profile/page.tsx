import { portalDemo } from "@/lib/content";

export const metadata = { title: "Profile" };

export default function ProfilePage() {
  return <><div className="portal-header"><h1>Profile</h1></div><article className="portal-card"><h3>{portalDemo.memberName}</h3><p>Personal details are demo placeholders and should be loaded from authenticated member data.</p></article></>;
}
