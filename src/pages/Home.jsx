import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BedDouble,
  ChevronLeft,
  ChevronRight,
  Clock,
  Coffee,
  Heart,
  MapPin,
  Percent,
  Phone,
  ShieldCheck,
  Star,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { RoomDialog } from "@/components/shared/RoomDialog";
import { rooms } from "@/data/rooms";
import img01 from "@/assets/img-01.jpeg";
import img02 from "@/assets/img-02.jpeg";
import img03 from "@/assets/img-03.jpeg";
import img04 from "@/assets/img-04.jpeg";
import img05 from "@/assets/img-05.jpeg";
import img06 from "@/assets/img-06.jpeg";
import img07 from "@/assets/img-07.jpeg";
import img08 from "@/assets/img-08.jpeg";
import img09 from "@/assets/img-09.jpeg";
import img10 from "@/assets/img-10.jpeg";
import img11 from "@/assets/img-11.jpeg";
import img12 from "@/assets/img-12.jpeg";

const bannerSlides = [
  { src: img01, alt: "JK Residency — comfortable rooms" },
  { src: img02, alt: "JK Residency — premium interiors" },
  { src: img03, alt: "JK Residency — warm ambience" },
  { src: img04, alt: "JK Residency — modern amenities" },
  { src: img05, alt: "JK Residency — clean bathrooms" },
  { src: img06, alt: "JK Residency — cozy seating" },
  { src: img07, alt: "JK Residency — room view" },
  { src: img08, alt: "JK Residency — property" },
];

const quickStats = [
  { icon: BedDouble, value: "₹1,700+", label: "Starting per night" },
  { icon: Clock, value: "12:00 PM", label: "Check-in time" },
  { icon: Clock, value: "11:00 AM", label: "Check-out time" },
  { icon: Percent, value: "10–20%", label: "Long stay discount" },
];

const features = [
  { icon: BedDouble, title: "Cozy Comfort", desc: "Plush bedding and serene rooms for restful stays. Starting from ₹1,700 + GST." },
  { icon: Coffee, title: "Warm Hospitality", desc: "Genuine care from a team that treats you like family. Open 24 hours." },
  { icon: Heart, title: "Couple Friendly", desc: "A welcoming, respectful space for all couples — just bring valid ID." },
  { icon: Wifi, title: "Free High-Speed Wi-Fi", desc: "Stay connected throughout your stay at no extra cost." },
  { icon: MapPin, title: "Prime Location", desc: "KR Puram, Bengaluru. Above A2B Family Restaurant — easy to find." },
  { icon: ShieldCheck, title: "Safe & Secure", desc: "24/7 security and spotless maintained rooms for complete peace of mind." },
];

const galleryImages = [
  { src: img09, alt: "JK Residency property" },
  { src: img10, alt: "JK Residency room" },
  { src: img11, alt: "JK Residency amenities" },
  { src: img12, alt: "JK Residency interior" },
  { src: img01, alt: "JK Residency bedroom" },
];

const testimonials = [
  { quote: "Felt like home away from home. The staff went above and beyond to make us comfortable.", name: "Anita R.", role: "Business Traveler" },
  { quote: "Clean, spacious, and beautifully maintained. The long stay offer was a great bonus!", name: "Rahul S.", role: "Long Stay Guest" },
  { quote: "Warm hospitality and a relaxing atmosphere. Perfect location in Bengaluru. Will be back!", name: "Priya K.", role: "Leisure Guest" },
];

const INTERVAL = 4500;

function HeroBanner() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(
    () => setActive((i) => (i - 1 + bannerSlides.length) % bannerSlides.length),
    [],
  );
  const next = useCallback(() => setActive((i) => (i + 1) % bannerSlides.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "min(88vh, 720px)", minHeight: "560px" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {bannerSlides.map((slide, i) => (
        <div
          key={i}
          aria-hidden={i !== active}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
                Welcome to JK Residency
              </span>
            </div>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl">
              A Warm Welcome Awaits You in Bengaluru
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/85 drop-shadow md:text-lg">
              Comfortable, clean, and affordable stays starting from{" "}
              <strong className="text-white">₹1,700 + GST</strong>. Couple friendly · Free Wi-Fi · Long
              Stay Offers.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/80">
              <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 backdrop-blur-sm">
                🕛 Check-in: 12:00 PM
              </span>
              <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 backdrop-blur-sm">
                🕚 Check-out: 11:00 AM
              </span>
              <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 backdrop-blur-sm">
                ⏱ 24-hr on demand
              </span>
              <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 backdrop-blur-sm">
                ❇ Long Stay 10–20% off
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-white font-semibold text-primary shadow-lg hover:bg-white/90">
                <Link to="/contact">
                  Book Now <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/60 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              >
                <Link to="/rooms">Explore Rooms</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2.5 text-white backdrop-blur-sm transition hover:bg-black/50"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2.5 text-white backdrop-blur-sm transition hover:bg-black/50"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {bannerSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "w-7 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-6 right-5 z-20 rounded-full bg-black/30 px-3 py-1 text-xs text-white backdrop-blur-sm">
        {active + 1} / {bannerSlides.length}
      </div>
    </section>
  );
}

export default function Home() {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const openRoom = (room) => {
    setSelected(room);
    setOpen(true);
  };

  return (
    <div>
      {/* HERO */}
      <HeroBanner />

      {/* QUICK STATS BAR */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, oklch(0.28 0.12 268) 0%, oklch(0.34 0.13 264) 50%, oklch(0.30 0.14 256) 100%)" }}
      >
        {/* subtle top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {quickStats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center gap-3 py-7 text-center text-primary-foreground ${
                  idx < 3 ? "md:border-r md:border-white/10" : ""
                } ${idx === 0 ? "border-r border-white/10 md:border-r" : ""} ${
                  idx === 2 ? "border-r border-white/10 md:border-r" : ""
                }`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-white/8">
                  <stat.icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold md:text-3xl">{stat.value}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-widest opacity-55">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container mx-auto px-4 py-20 md:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative mt-6 lg:mt-0">
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
              <img
                src={img09}
                alt="JK Residency interior"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -right-3 -top-6 rounded-2xl bg-primary px-5 py-4 text-center text-primary-foreground shadow-[var(--shadow-warm)] md:right-4 lg:-right-6">
              <p className="text-xs font-semibold uppercase tracking-wide opacity-70">Starting from</p>
              <p className="font-serif text-2xl font-bold">₹1,700</p>
              <p className="text-xs opacity-70">+ GST per night</p>
            </div>
            <div
              className="absolute -bottom-5 left-4 rounded-xl px-4 py-3 text-center shadow-lg lg:-left-6"
              style={{ backgroundColor: "var(--color-gold)", color: "var(--color-gold-foreground)" }}
            >
              <p className="text-xs font-semibold opacity-80">Long Stay Offer</p>
              <p className="font-serif text-lg font-bold leading-none">10–20% Off</p>
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <SectionHeader
              badge="About Us"
              title="A Warm Welcome Awaits in Bengaluru"
              align="left"
            />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              At JK Residency, we believe every guest deserves the comfort of home. Nestled in KR Puram
              — above A2B Family Restaurant on Old Madras Road — we're easy to find and even easier to
              love. Whether you're here for a night or a month, we'll make you feel right at home.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Couple friendly · Free High-Speed Wi-Fi · 24/7 support · Starting from ₹1,700 + GST
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="shadow-[var(--shadow-warm)]">
                <Link to="/about">
                  Our Story <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            badge="Why Stay With Us"
            title="Everything You Need for a Perfect Stay"
            subtitle="From cozy rooms to genuine hospitality — every detail is thoughtfully cared for."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group flex gap-4 rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-warm)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[var(--shadow-warm)]">
                  <f.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ROOMS */}
      <section className="container mx-auto px-4 py-20 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            badge="Featured Rooms"
            title="Rooms for Every Traveler"
            align="left"
          />
          <Button asChild variant="outline">
            <Link to="/rooms">
              View All Rooms <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((r) => (
            <div
              key={r.slug}
              onClick={() => openRoom(r)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openRoom(r);
                }
              }}
              aria-label={`View details for ${r.name}`}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:border-primary/20 hover:shadow-[var(--shadow-warm)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={r.image}
                  alt={`${r.name} at JK Residency`}
                  loading="lazy"
                  decoding="async"
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <span className="absolute right-3 top-3 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground shadow">
                  ₹1,700+
                </span>
                <h3 className="absolute bottom-3 left-3 font-serif text-lg font-bold leading-tight text-white drop-shadow">
                  {r.name}
                </h3>
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground">
                  {r.capacity} · {r.bedType}
                  {r.size ? ` · ${r.size}` : ""}
                </p>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{r.shortDesc}</p>
                <Button
                  size="sm"
                  className="mt-4 w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    openRoom(r);
                  }}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY BENTO */}
      <section className="bg-secondary/20 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader badge="Gallery" title="A Glimpse Inside" align="left" />
            <Button asChild variant="outline">
              <Link to="/gallery">
                Full Gallery <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div
            className="mt-10 grid grid-cols-2 gap-3 overflow-hidden rounded-2xl lg:grid-cols-4"
            style={{ gridAutoRows: "220px" }}
          >
            <div className="relative col-span-1 row-span-1 overflow-hidden rounded-xl lg:col-span-2 lg:row-span-2">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 hover:bg-black/15" />
            </div>
            {galleryImages.slice(1, 5).map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 hover:bg-black/15" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            badge="Guest Reviews"
            title="What Our Guests Say"
            subtitle="Stories from travelers who've stayed with us and felt at home."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative rounded-2xl border border-border/60 bg-card p-7 shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-warm)] hover:border-primary/20"
              >
                {/* Large decorative quote */}
                <span className="pointer-events-none absolute left-5 top-3 select-none font-serif text-7xl leading-none text-primary/8">
                  "
                </span>
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="relative z-10 mt-4 text-sm leading-relaxed italic text-foreground/80">
                  "{t.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border/50 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LONG STAY PROMO */}
      <section className="relative overflow-hidden py-24">
        {/* Background image with directional gradient so image shows on right */}
        <div className="absolute inset-0">
          <img src={img06} alt="" aria-hidden="true" className="h-full w-full scale-105 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/97 via-primary/88 to-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Gold top accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left: content */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gold" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Special Offer
                </span>
              </div>
              <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Planning a Long Stay?
              </h2>
              <p className="mt-4 leading-relaxed text-white/75">
                Stay longer, save more. JK Residency offers exclusive discounts of 10–20% for extended
                bookings — ideal for business travelers, students, and long-term residents.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "10% off on 7+ night stays",
                  "20% off on monthly bookings",
                  "Free High-Speed Wi-Fi included",
                  "Couple friendly — all guests welcome",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/85">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/15">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-white font-semibold text-primary shadow-lg hover:bg-white/90">
                  <Link to="/contact">
                    Get Long Stay Offer <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <a
                  href="https://wa.me/919986727676"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right: stats grid with gold accents */}
            <div className="hidden grid-cols-2 gap-4 md:grid">
              {[
                { value: "10–20%", label: "Long Stay Discount" },
                { value: "24/7", label: "Guest Support" },
                { value: "₹1,700+", label: "Starting Rate" },
                { value: "4 Types", label: "Room Options" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="group rounded-2xl border border-gold/25 bg-white/8 p-7 text-center backdrop-blur-md transition-all hover:border-gold/50 hover:bg-white/12"
                >
                  <p className="font-serif text-3xl font-bold text-gold">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-white/65">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Layered gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(150deg, oklch(0.24 0.13 272) 0%, oklch(0.32 0.13 264) 45%, oklch(0.28 0.12 258) 100%)",
          }}
        />

        {/* Subtle dot-grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Gold top border */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/4 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gold/6 blur-3xl" />

        <div className="relative container mx-auto px-4 text-center md:px-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            Limited Rooms — Book Early
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
          </div>

          {/* Heading */}
          <h2 className="mt-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Ready for a Memorable Stay?
          </h2>

          {/* Gold divider */}
          <div className="mt-5 flex justify-center">
            <span className="h-[3px] w-28 rounded-full bg-gradient-to-r from-gold/30 via-gold to-gold/30" />
          </div>

          <p className="mx-auto mt-6 max-w-xl text-base text-white/70 md:text-lg">
            Reserve your room at JK Residency today. Starting from{" "}
            <strong className="text-white">₹1,700 + GST</strong>. Call us or send an enquiry — we
            respond quickly.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white px-10 font-semibold text-primary shadow-xl hover:bg-white/90"
            >
              <Link to="/contact">
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <a
              href="tel:+919986727674"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/18 hover:border-white/40"
            >
              <Phone className="h-4 w-4 text-gold" />
              +91 99867 27674
            </a>
            <a
              href="https://wa.me/919986727676"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/18 hover:border-white/40"
            >
              <span className="text-base">💬</span>
              WhatsApp Us
            </a>
          </div>

          {/* Quick facts */}
          <div className="mx-auto mt-12 max-w-2xl border-t border-white/12 pt-8">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/55">
              {["Check-in 12:00 PM", "Check-out 11:00 AM", "Couple Friendly", "Free High-Speed Wi-Fi", "Long Stay 10–20% Off"].map(
                (fact) => (
                  <span key={fact} className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {fact}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <RoomDialog room={selected} open={open} onOpenChange={setOpen} />
    </div>
  );
}
