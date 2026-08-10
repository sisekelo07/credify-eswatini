import { PortalShell } from "@/components/PortalShell";

export default function MemberLayout({ children }: { children: React.ReactNode }) {
  return <PortalShell>{children}</PortalShell>;
}
