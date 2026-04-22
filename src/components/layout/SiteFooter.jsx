import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUp,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/jk-logo.jpeg";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/rooms", label: "Rooms" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
];

const legalLinks = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
];

const highlights = [
  "Starting from ₹2,000 + GST",
  "Long Stay 10–20% Off",
  "Couple Friendly",
  "Free Wi-Fi",
];

export function SiteFooter() {
  return (
    <footer>
      {/* ── BOOKING CTA STRIP ── */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.28 0.12 268) 0%, oklch(0.34 0.13 264) 60%, oklch(0.30 0.13 258) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />

        <div className="container relative mx-auto flex flex-col items-center justify-between gap-6 px-4 py-10 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold/80">
              Ready for a memorable stay?
            </p>
            <h2 className="mt-1 font-serif text-3xl font-bold text-white md:text-4xl">
              Book Your Room at JK Residency
            </h2>
            <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 md:justify-start">
              {highlights.map((h) => (
                <span key={h} className="flex items-center gap-1.5 text-xs text-white/60">
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  {h}
                </span>
              ))}
            </div>
          </div>
          <div className="flex shrink-0 gap-3">
            <Button asChild size="lg" className="bg-white font-semibold text-primary shadow-xl hover:bg-white/90">
              <Link to="/contact">Book Now</Link>
            </Button>
            <a
              href="tel:+919986727674"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              <Phone className="h-4 w-4 text-gold" /> Call Us
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER — White ── */}
      <div className="bg-white">
        {/* Top gold accent line */}
        <div className="h-[3px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

        <div className="container mx-auto px-4 pt-14 pb-10 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            {/* ── COL 1: Brand ── */}
            <div className="lg:col-span-1">
              <Link to="/" aria-label="JK Residency — home">
                <img
                  src={logo}
                  alt="JK Residency"
                  className="h-14 w-auto object-contain"
                />
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Warm, welcoming hospitality in the heart of KR Puram, Bengaluru.
                Your home away from home.
              </p>
              {/* Social icons */}
              <div className="mt-5 flex gap-2.5">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-secondary/50 text-muted-foreground transition hover:border-primary/40 hover:bg-primary hover:text-primary-foreground"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-secondary/50 text-muted-foreground transition hover:border-primary/40 hover:bg-primary hover:text-primary-foreground"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/919986727676"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-secondary/50 text-muted-foreground transition hover:border-primary/40 hover:bg-primary hover:text-primary-foreground"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* ── COL 2: Links ── */}
            <div>
              <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                <span className="h-px w-4 rounded-full bg-gold" />
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="group flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-gold transition-transform group-hover:translate-x-1" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="mb-4 mt-7 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                <span className="h-px w-4 rounded-full bg-gold" />
                Legal
              </h4>
              <ul className="space-y-2.5">
                {legalLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="group flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-gold transition-transform group-hover:translate-x-1" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── COL 3: Contact ── */}
            <div>
              <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                <span className="h-px w-4 rounded-full bg-gold" />
                Get in Touch
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-4 w-4 text-gold" />
                  </div>
                  <a
                    href="https://maps.app.goo.gl/hUSmukirTCiViwdK6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs leading-relaxed text-muted-foreground transition hover:text-primary"
                  >
                    Plot No. 248, Old Madras Rd, RMS Colony,
                    Bhattarahalli, KR Puram, Bengaluru – 560049
                    <span className="mt-0.5 block italic text-muted-foreground/60">
                      Above A2B Family Restaurant
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-4 w-4 text-gold" />
                  </div>
                  <div className="space-y-0.5">
                    <a href="tel:+919986727674" className="block text-sm text-muted-foreground transition hover:text-primary">
                      +91 99867 27674
                    </a>
                    <a href="tel:+919986727676" className="block text-sm text-muted-foreground transition hover:text-primary">
                      +91 99867 27676
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MessageCircle className="h-4 w-4 text-gold" />
                  </div>
                  <a href="https://wa.me/919986727676" target="_blank" rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition hover:text-primary">
                    +91 99867 27676 (WhatsApp)
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-4 w-4 text-gold" />
                  </div>
                  <a href="mailto:jkrooms9@gmail.com"
                    className="text-sm text-muted-foreground transition hover:text-primary">
                    jkrooms9@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* ── COL 4: Timings ── */}
            <div>
              <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                <span className="h-px w-4 rounded-full bg-gold" />
                Timings
              </h4>

              {/* Check-in */}
              <div className="relative overflow-hidden rounded-xl border border-border/60 bg-secondary/40 p-4 transition hover:border-primary/30 hover:shadow-[var(--shadow-soft)]">
                <div className="absolute top-0 left-0 h-full w-[3px] rounded-full bg-gradient-to-b from-gold to-gold/20" />
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-gold" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Check-in
                  </p>
                </div>
                <p className="mt-1 font-serif text-2xl font-bold text-primary">12:00 PM</p>
              </div>

              {/* Check-out */}
              <div className="relative mt-3 overflow-hidden rounded-xl border border-border/60 bg-secondary/40 p-4 transition hover:border-primary/30 hover:shadow-[var(--shadow-soft)]">
                <div className="absolute top-0 left-0 h-full w-[3px] rounded-full bg-gradient-to-b from-gold to-gold/20" />
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-gold" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Check-out
                  </p>
                </div>
                <p className="mt-1 font-serif text-2xl font-bold text-primary">11:00 AM</p>
              </div>

              <p className="mt-3 text-xs italic text-muted-foreground/60">
                24-hour concept available on request
              </p>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919986727676"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-gold/40 bg-gold/8 px-4 py-3 text-sm font-semibold text-gold transition hover:border-gold/70 hover:bg-gold/15"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="border-t border-border/60 bg-secondary/30">
          <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-4 md:flex-row md:px-6">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} JK Residency. All rights reserved. ·
              Plot No. 248, Old Madras Rd, KR Puram, Bengaluru
            </p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="flex items-center gap-1.5 rounded-full border border-border/60 bg-white px-3 py-1.5 text-xs text-muted-foreground transition hover:border-primary/30 hover:text-primary shadow-sm"
            >
              <ArrowUp className="h-3 w-3" />
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
