import { Link } from "react-router-dom";
import { ArrowRight, Award, Clock, Heart, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutHeader from "@/assets/room-deluxe.jpeg";
import aboutStory from "@/assets/room-seating.jpeg";
import whyChoose1 from "@/assets/room-executive.jpeg";
import whyChoose2 from "@/assets/room-bathroom.jpeg";
import whyChoose3 from "@/assets/room-amenity.jpeg";

const values = [
  { icon: Heart, title: "Hospitality", desc: "Treating every guest like family with warmth and genuine care." },
  { icon: Sparkles, title: "Comfort", desc: "Spotless rooms and thoughtful touches for a truly restful stay." },
  { icon: Award, title: "Value", desc: "Quality stays starting from ₹2,000 + GST — affordable without compromise." },
];

const reasons = [
  "Warm and personalized hospitality every day of the year",
  "Clean, well-maintained rooms with modern amenities",
  "Convenient location above A2B Family Restaurant, KR Puram",
  "24/7 friendly support and security",
  "Starting from ₹2,000 + GST — affordable without compromise",
  "Couple friendly — all guests welcomed with dignity",
  "Long stay offers: 10–20% discount for extended stays",
  "Free High-Speed Wi-Fi throughout the property",
];

export default function About() {
  return (
    <div>
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-secondary/40 to-background" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "radial-gradient(circle, oklch(0.34 0.13 264) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="container relative mx-auto grid gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:px-6 md:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
              <span className="h-1 w-1 rounded-full bg-gold" />
              About Us
            </span>
            <h1 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
              The Story of JK Residency
            </h1>
            <div className="mt-3 flex">
              <span className="h-[3px] w-16 rounded-full" style={{ background: "var(--gradient-warm)" }} />
            </div>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Built on a simple belief — that every guest deserves to feel at home.
              JK Residency is a warm, welcoming retreat where comfort, care, and hospitality come together.
            </p>
          </div>
          <img
            src={aboutHeader}
            alt="Welcoming interior at JK Residency"
            loading="eager"
            decoding="async"
            className="aspect-[5/4] w-full rounded-2xl object-cover shadow-[var(--shadow-warm)]"
          />
        </div>
      </section>

      {/* CHECK-IN FACTS BAR */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, oklch(0.28 0.12 268) 0%, oklch(0.34 0.13 264) 50%, oklch(0.30 0.14 256) 100%)" }}
      >
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { icon: Clock, label: "Check-in", value: "12:00 PM" },
              { icon: Clock, label: "Check-out", value: "11:00 AM" },
              { icon: MapPin, label: "Location", value: "KR Puram" },
              { icon: Award, label: "Starting Price", value: "₹2,000+GST" },
            ].map((f, idx) => (
              <div
                key={f.label}
                className={`flex flex-col items-center gap-3 py-7 text-center text-primary-foreground ${idx < 3 ? "md:border-r md:border-white/10" : ""}`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-white/8">
                  <f.icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-serif text-xl font-bold">{f.value}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-widest opacity-55">{f.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="container mx-auto px-4 py-20 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-warm)]">
            <img
              src={aboutStory}
              alt="Comfortable seating area at JK Residency"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div>
            <span className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 rounded-full bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Our Story</span>
            </span>
            <h2 className="font-serif text-3xl font-bold md:text-4xl">
              Built on Warmth &amp; Trust
            </h2>
            <div className="mt-3 flex">
              <span className="h-[3px] w-14 rounded-full" style={{ background: "var(--gradient-warm)" }} />
            </div>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              JK Residency was founded with a vision to offer travelers a comfortable, affordable, and genuinely
              welcoming place to stay in Bengaluru. Nestled at Plot No. 248, Old Madras Road, RMS Colony,
              Bhattarahalli, KR Puram — right above A2B Family Restaurant — we are easy to reach from all
              corners of the city.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Over the years, we've welcomed guests from near and far — business travelers, families, couples,
              and long-stay residents — earning their trust through consistency, cleanliness, and genuine care.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="tel:+919986727674"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-warm)] transition hover:bg-primary/90"
              >
                <Phone className="h-4 w-4" /> +91 99867 27674
              </a>
              <a
                href="mailto:jkrooms9@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary hover:border-primary/30"
              >
                <Mail className="h-4 w-4" /> jkrooms9@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-8 rounded-full bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Our Values</span>
              <span className="h-px w-8 rounded-full bg-gold" />
            </span>
            <h2 className="font-serif text-3xl font-bold md:text-4xl">The Principles We Live By</h2>
            <div className="mt-3 flex justify-center">
              <span className="h-[3px] w-16 rounded-full" style={{ background: "var(--gradient-warm)" }} />
            </div>
            <p className="mt-4 text-muted-foreground">The guiding principles behind everything we do at JK Residency.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="group flex flex-col items-center rounded-2xl border border-border/60 bg-card p-8 text-center transition-all hover:border-primary/30 hover:shadow-[var(--shadow-warm)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[var(--shadow-warm)]">
                  <v.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="container mx-auto px-4 py-20 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 rounded-full bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Why Choose Us</span>
            </span>
            <h2 className="font-serif text-3xl font-bold md:text-4xl">Why Choose JK Residency</h2>
            <div className="mt-3 flex">
              <span className="h-[3px] w-14 rounded-full" style={{ background: "var(--gradient-warm)" }} />
            </div>
            <p className="mt-4 text-muted-foreground">Every detail thoughtfully cared for — so your stay is effortless and enjoyable.</p>
            <ul className="mt-7 space-y-3.5">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  </span>
                  <span className="text-sm text-foreground/85 leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
              <img
                src={whyChoose1}
                alt="Executive room at JK Residency"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
                <img src={whyChoose2} alt="Modern bathroom" loading="lazy" decoding="async" className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
                <img src={whyChoose3} alt="In-room amenity" loading="lazy" decoding="async" className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(150deg, oklch(0.24 0.13 272) 0%, oklch(0.32 0.13 264) 45%, oklch(0.28 0.12 258) 100%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/4 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-gold/6 blur-3xl" />

        <div className="relative container mx-auto px-4 text-center md:px-6">
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">Come stay with us</h2>
          <div className="mt-4 flex justify-center">
            <span className="h-[3px] w-20 rounded-full bg-gradient-to-r from-gold/30 via-gold to-gold/30" />
          </div>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/75">
            Experience the warmth of JK Residency for yourself. Limited rooms available — book now!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white px-10 font-semibold text-primary shadow-xl hover:bg-white/90">
              <Link to="/contact">
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <a
              href="tel:+919986727674"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-white/25 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/18"
            >
              <Phone className="h-4 w-4 text-gold" /> +91 99867 27674
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
