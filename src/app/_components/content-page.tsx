import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome";
import styles from "./content-page.module.css";

type ContentPageProps = {
  activePath: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  children: ReactNode;
};

type InfoGridProps = {
  items: {
    title: string;
    description: string;
    note?: string;
  }[];
};

const pageArtwork: Record<string, { symbol: string; title: string; note: string }> = {
  "/about": {
    symbol: "॥",
    title: "A living inheritance",
    note: "Illustrative motif · institutional imagery to follow",
  },
  "/gurukulam": {
    symbol: "गु",
    title: "The learning relationship",
    note: "Illustrative motif · not a campus photograph",
  },
  "/programmes": {
    symbol: "विद्या",
    title: "Study with care",
    note: "Illustrative motif · programme details to be confirmed",
  },
  "/research": {
    symbol: "ॐ",
    title: "Knowledge held in trust",
    note: "Illustrative motif · no text facsimile",
  },
  "/spiritual-services": {
    symbol: "दीप",
    title: "Tradition expressed through service",
    note: "Illustrative motif · service details to be confirmed",
  },
  "/community": {
    symbol: "सेवा",
    title: "Learning with responsibility",
    note: "Illustrative motif · no event photograph",
  },
  "/events": {
    symbol: "संग",
    title: "Gathering in good purpose",
    note: "Illustrative motif · no event is scheduled here",
  },
  "/gallery": {
    symbol: "दृश्य",
    title: "Stories will find their place",
    note: "Illustrative motif · approved photographs to follow",
  },
  "/contact": {
    symbol: "संवाद",
    title: "A conversation begins here",
    note: "Illustrative motif · contact details to be confirmed",
  },
  "/donate": {
    symbol: "दान",
    title: "Support learning with care",
    note: "Illustrative motif · no payments are accepted here",
  },
};

const relatedPages: Record<string, { href: string; label: string }[]> = {
  "/about": [
    { href: "/gurukulam", label: "The Gurukulam" },
    { href: "/programmes", label: "Learning programmes" },
  ],
  "/gurukulam": [
    { href: "/programmes", label: "Areas of learning" },
    { href: "/about", label: "Our purpose" },
  ],
  "/programmes": [
    { href: "/gurukulam", label: "The Gurukulam" },
    { href: "/research", label: "Research & publications" },
  ],
  "/research": [
    { href: "/programmes", label: "Learning programmes" },
    { href: "/gallery", label: "Gallery placeholders" },
  ],
  "/spiritual-services": [
    { href: "/community", label: "Community welfare" },
    { href: "/events", label: "Events & activities" },
  ],
  "/community": [
    { href: "/spiritual-services", label: "Spiritual services" },
    { href: "/about", label: "Our purpose" },
  ],
  "/events": [
    { href: "/gallery", label: "Gallery" },
    { href: "/community", label: "Community welfare" },
  ],
  "/gallery": [
    { href: "/events", label: "Events & activities" },
    { href: "/research", label: "Research & publications" },
  ],
  "/contact": [
    { href: "/about", label: "About the institution" },
    { href: "/programmes", label: "Learning programmes" },
  ],
  "/donate": [
    { href: "/programmes", label: "Learning programmes" },
    { href: "/contact", label: "Contact information" },
  ],
};

export function ContentPage({
  activePath,
  eyebrow,
  title,
  description,
  children,
}: ContentPageProps) {
  const artwork = pageArtwork[activePath];
  const related = relatedPages[activePath] ?? [];

  return (
    <>
      <SiteHeader activePath={activePath} />
      <main id="main" className={styles.main}>
        <section className={styles.pageHero} aria-labelledby="page-title">
          <div className={styles.heroInner}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{eyebrow}</span>
            </nav>
            <p className={styles.eyebrow}>
              <span aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 id="page-title">{title}</h1>
            <p className={styles.heroDescription}>{description}</p>
            <span className={styles.heroIndex} aria-hidden="true">
              AVIGHNA · VEDAVANI
            </span>
          </div>
          <div
            className={styles.heroArtwork}
            data-page={activePath.slice(1)}
            role="img"
            aria-label={`${artwork?.note ?? "Illustrative motif"}: ${artwork?.title ?? eyebrow}`}
          >
            <span className={styles.artworkRing} aria-hidden="true" />
            <span className={styles.artworkSymbol} aria-hidden="true">{artwork?.symbol ?? "॥"}</span>
            <span className={styles.artworkTitle}>{artwork?.title ?? eyebrow}</span>
            <span className={styles.artworkNote}>{artwork?.note ?? "Illustrative motif"}</span>
          </div>
        </section>
        <div className={styles.content}>{children}</div>
        <section className={styles.pageCta} aria-labelledby="related-title">
          <p className={styles.eyebrow}>
            <span aria-hidden="true" />
            Continue exploring
          </p>
          <h2 id="related-title">Questions are a good place to begin.</h2>
          <p>
            Explore related areas, or review the available enquiry information.
          </p>
          <div className={styles.relatedLinks}>
            {related.map(({ href, label }) => (
              <Link className={styles.relatedLink} href={href} key={href}>
                {label} <span aria-hidden="true">↗</span>
              </Link>
            ))}
            <Link className={styles.ctaLink} href="/contact">
              View enquiry information <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

export function PageSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeading}>
        <p className={styles.eyebrow}>
          <span aria-hidden="true" />
          {eyebrow}
        </p>
        <h2>{title}</h2>
      </div>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  );
}

export function InfoGrid({ items }: InfoGridProps) {
  return (
    <div className={styles.infoGrid}>
      {items.map((item, index) => (
        <article className={styles.infoCard} key={item.title}>
          <span className={styles.infoNumber}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.note && <span className={styles.cardNote}>{item.note}</span>}
        </article>
      ))}
    </div>
  );
}

export function NotePanel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className={styles.notePanel}>
      <span className={styles.noteMark} aria-hidden="true">✳</span>
      <div>
        <h3>{title}</h3>
        <div>{children}</div>
      </div>
    </aside>
  );
}

export function TextColumns({ children }: { children: ReactNode }) {
  return <div className={styles.textColumns}>{children}</div>;
}

export function TextBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <article className={styles.textBlock}>
      <h3>{title}</h3>
      {children}
    </article>
  );
}

export function PlaceholderGallery({
  items,
}: {
  items: { title: string; symbol: string }[];
}) {
  return (
    <>
      <div className={styles.galleryGrid}>
        {items.map((item, index) => (
          <div
            className={`${styles.galleryItem} ${styles[`galleryTone${index % 3}`]}`}
            key={item.title}
            role="img"
            aria-label={`Illustrative placeholder for ${item.title}; no approved institutional photograph supplied`}
          >
            <span aria-hidden="true">{item.symbol}</span>
            <strong>{item.title}</strong>
            <small>Photograph to be supplied</small>
          </div>
        ))}
      </div>
      <p className={styles.disclaimer}>
        These are illustrative design placeholders, not photographs of the
        institution, campus or students.
      </p>
    </>
  );
}
