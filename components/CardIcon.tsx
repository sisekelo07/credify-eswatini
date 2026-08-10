import {
  Award,
  ClipboardCheck,
  CreditCard,
  Eye,
  FileText,
  Hammer,
  HandCoins,
  Handshake,
  Headset,
  Home,
  Lightbulb,
  LineChart,
  ListChecks,
  PiggyBank,
  ShieldCheck,
  Trophy,
  Users,
  UserPlus,
  Wallet,
  type LucideIcon
} from "lucide-react";

const iconsByLabel: Record<string, LucideIcon> = {
  "Buy a Home": Home,
  "Build a Home": Hammer,
  "Improve Your Home": Wallet,
  Build: Hammer,
  Buy: Home,
  Improve: Wallet,
  "Structured Property Savings": PiggyBank,
  "Renovation Savings": Hammer,
  "Secure Member Portal": ShieldCheck,
  "Transparent Contributions": Eye,
  "Easy Online Application": FileText,
  "Convenient Payments": CreditCard,
  "Community Growth": Users,
  "Professional Support": Headset,
  Integrity: ShieldCheck,
  Trust: Handshake,
  Accountability: ClipboardCheck,
  Transparency: Eye,
  Innovation: Lightbulb,
  Excellence: Award,
  Community: Users,
  "Financial Empowerment": HandCoins,
  Register: UserPlus,
  Choose: ListChecks,
  Apply: FileText,
  Contribute: Wallet,
  Track: LineChart,
  Achieve: Trophy,
  "Renovation-focused savings": Hammer,
  "Flexible contributions": Wallet,
  "Easy application": FileText,
  "Document upload support": ClipboardCheck
};

export function CardIcon({ label }: { label: string }) {
  const Icon = iconsByLabel[label] ?? ShieldCheck;
  return (
    <div className="card-icon">
      <Icon size={22} strokeWidth={2.25} aria-hidden />
    </div>
  );
}
