import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/content";

export function Logo({
  compact = false,
  dark = false,
  withText = false
}: {
  compact?: boolean;
  dark?: boolean;
  withText?: boolean;
}) {
  const size = compact ? 60 : 76;
  return (
    <Link
      className={`logo-lockup${dark ? " logo-badge-dark" : ""}`}
      href="/"
      aria-label="Credify Eswatini home"
    >
      <Image
        src={brand.logo}
        alt="Credify Eswatini — Property & Housing Stokvel"
        width={size}
        height={size}
        priority
      />
      {withText ? (
        <span>
          <strong>Credify Eswatini</strong>
          <small>Property & Housing Stokvel</small>
        </span>
      ) : null}
    </Link>
  );
}
