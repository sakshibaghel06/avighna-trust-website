import Image from "next/image";
import Link from "next/link";
import { SubmissionForm } from "./submission-form";
import styles from "../page.module.css";

const brand = {
  trust: "Avighna Trust",
  pathashala: "Vedavani Pathashala",
  relationshipNote:
    "Institutional relationship and official naming to be confirmed.",
};

const navigationGroups = [
  {
    label: "Our Story",
    links: [
      { href: "/about", label: "About" },
      { href: "/gurukulam", label: "Gurukulam" },
      { href: "/panchamukhi-shikshana", label: "Panchamukhi Shikshana" },
    ],
  },
  {
    label: "Learning",
    links: [
      { href: "/programmes", label: "Programmes" },
      { href: "/samskritam", label: "Samskritam" },
      { href: "/research", label: "Research" },
    ],
  },
  {
    label: "Tradition",
    links: [
      { href: "/spiritual-services", label: "Spiritual services" },
      { href: "/darshanam", label: "Darśanam" },
      { href: "/vanaprastham", label: "Vanaprastham" },
      { href: "/community", label: "Community" },
    ],
  },
  {
    label: "Engage",
    links: [
      { href: "/events", label: "Events" },
      { href: "/gallery", label: "Gallery" },
      { href: "/volunteer", label: "Volunteer" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className={styles.arrow}>
      {diagonal ? "↗" : "→"}
    </span>
  );
}

function BrandLogo() {
  return (
    <span className={styles.headerLogoFrame}>
      <Image
        alt="Avighna Foundation logo"
        className={styles.headerLogo}
        height={443}
        loading="eager"
        src="/images/WhatsApp%20Image%202026-10-16%20at%2010.29.45%20AM.jpeg"
        width={753}
      />
    </span>
  );
}

function FooterBrand() {
  return (
    <>
      <span className={styles.footerLogoFrame}>
        <Image
          alt="Avighna Foundation logo"
          className={styles.footerLogo}
          height={443}
          src="/images/WhatsApp%20Image%202026-10-16%20at%2010.29.45%20AM.jpeg"
          width={753}
        />
      </span>
      <span className={styles.brandText}>
        <strong>{brand.pathashala}</strong>
        <small>
          {brand.trust} <span aria-hidden="true">·</span> Institutional relationship to be confirmed
        </small>
      </span>
    </>
  );
}

export function SiteHeader({ activePath }: { activePath: string }) {
  return (
    <>
      <a className={styles.skipLink} href="#main">
        Skip to content
      </a>
      <div className={styles.announcement}>
        <span className={styles.announcementDot} aria-hidden="true" />
        <span>Rooted in tradition. Open to the generations ahead.</span>
        <Link href="/about">
          Discover our purpose <Arrow />
        </Link>
      </div>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="Avighna Trust and Vedavani Pathashala home">
          <BrandLogo />
        </Link>
        <nav className={styles.nav} aria-label="Main navigation">
          {navigationGroups.map(({ label, links }) => (
            <details className={styles.navGroup} key={label}>
              <summary className={styles.navGroupSummary}>
                {label}
                <span aria-hidden="true" className={styles.navChevron}>⌄</span>
              </summary>
              <div className={styles.navGroupMenu}>
                {links.map(({ href, label: linkLabel }) => (
                  <Link
                    aria-current={activePath === href ? "page" : undefined}
                    href={href}
                    key={href}
                  >
                    {linkLabel}
                  </Link>
                ))}
              </div>
            </details>
          ))}
        </nav>
        <Link className={styles.donateButton} href="/donate" aria-label="Donate: learn how to support our mission">
          Donate <Arrow diagonal />
        </Link>
        <details className={styles.mobileNav}>
          <summary aria-label="Navigation menu">
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            {navigationGroups.map(({ label, links }) => (
              <details className={styles.mobileNavGroup} key={label}>
                <summary>{label}</summary>
                <div>
                  {links.map(({ href, label: linkLabel }) => (
                    <Link
                      aria-current={activePath === href ? "page" : undefined}
                      href={href}
                      key={href}
                    >
                      {linkLabel}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
            <Link className={styles.mobileDonate} href="/donate" aria-current={activePath === "/donate" ? "page" : undefined}>
              Support our mission <Arrow diagonal />
            </Link>
          </nav>
        </details>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.footerBrand}>
          <Link className={styles.brand} href="/" aria-label={`${brand.pathashala} home`}>
            <FooterBrand />
          </Link>
          <p>
            Preserving the eternal wisdom of the Vedas.
            <br />
            Nurturing values. Inspiring future generations.
          </p>
          <span className={styles.footerProvisional}>{brand.relationshipNote}</span>
          <div className={styles.footerNewsletter}>
            <h2>Newsletter</h2>
            <p>Register your interest in future updates.</p>
            <SubmissionForm type="newsletter" />
          </div>
        </div>
        <div className={styles.footerLinks}>
          <h2>Explore</h2>
          <Link href="/about">Our purpose</Link>
          <Link href="/programmes">Programmes</Link>
          <Link href="/gurukulam">Gurukulam</Link>
          <Link href="/research">Research & publications</Link>
        </div>
        <div className={styles.footerLinks}>
          <h2>In service</h2>
          <Link href="/spiritual-services">Spiritual services</Link>
          <Link href="/community">Community</Link>
          <Link href="/events">Events & activities</Link>
          <Link href="/gallery">Gallery</Link>
        </div>
        <div className={styles.footerContact}>
          <h2>Take part</h2>
          <Link href="/donate">Support the mission</Link>
          <Link href="/volunteer">Volunteer registration</Link>
          <Link href="/contact">Contact & enquiries</Link>
          <p>Official contact details to be confirmed.</p>
        </div>
        <div className={styles.footerLinks}>
          <h2>Policies</h2>
          <Link href="/privacy-policy">Privacy policy</Link>
          <Link href="/terms-and-conditions">Terms & conditions</Link>
          <Link href="/donation-refund-policy">Donation & refund policy</Link>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>© {brand.pathashala}</span>
        <span lang="sa">सर्वे भवन्तु सुखिनः</span>
        <Link href="/">Back to home ↑</Link>
      </div>
    </footer>
  );
}
