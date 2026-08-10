import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  body,
  image
}: {
  eyebrow?: string;
  title: string;
  body: string;
  image?: string;
}) {
  return (
    <section className="page-hero">
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      {image ? (
        <Image className="page-hero-image" src={image} alt="" width={680} height={460} />
      ) : null}
    </section>
  );
}
