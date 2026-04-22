import { useState } from "react";
import { Link } from "react-router-dom";
import { AirVent, ArrowRight, Bath, BedDouble, Coffee, Phone, Tv, Users, Utensils, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoomDialog } from "@/components/shared/RoomDialog";
import { rooms } from "@/data/rooms";

const amenities = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: AirVent, label: "Air Conditioning" },
  { icon: Tv, label: "Smart TV" },
  { icon: Bath, label: "Hot Water" },
  { icon: Coffee, label: "Tea / Coffee" },
  { icon: BedDouble, label: "Premium Linens" },
  { icon: Utensils, label: "Room Service" },
  { icon: Users, label: "Friendly Staff" },
];

export default function Rooms() {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const openRoom = (room) => {
    setSelected(room);
    setOpen(true);
  };

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

        <div className="container relative mx-auto px-4 py-16 text-center md:px-6 md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
            <span className="h-1 w-1 rounded-full bg-gold" />
            Our Rooms &amp; Suites
          </span>
          <h1 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
            Comfort Tailored to Every Traveler
          </h1>
          <div className="mt-3 flex justify-center">
            <span className="h-[3px] w-16 rounded-full" style={{ background: "var(--gradient-warm)" }} />
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            Choose from our thoughtfully designed rooms — each crafted for a restful, comfortable, and memorable stay.
            Click any room for full details.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            {["Starting from ₹2,000 + GST", "Check-in: 12:00 PM", "Check-out: 11:00 AM", "Long Stay: 10–20% Off"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/60 bg-background/80 px-4 py-1.5 font-medium text-foreground/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ROOM CARDS */}
      <section className="container mx-auto px-4 py-16 md:px-6 md:py-20">
        <div className="space-y-8">
          {rooms.map((room, i) => (
            <div
              key={room.slug}
              onClick={() => openRoom(room)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openRoom(room); } }}
              aria-label={`View details for ${room.name}`}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:border-primary/20 hover:shadow-[var(--shadow-warm)]"
            >
              <div className={`grid gap-0 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={`${room.name} at JK Residency`}
                    loading="lazy"
                    decoding="async"
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20" />
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow">
                    {room.price.split(" ")[0]} {room.price.split(" ")[1]}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-6 md:p-10">
                  <h2 className="font-serif text-2xl font-bold md:text-3xl">{room.name}</h2>
                  <p className="mt-1 text-sm font-medium text-primary">{room.capacity} · {room.bedType}{room.size ? ` · ${room.size}` : ""}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-px w-6 rounded-full bg-gold" />
                    <p className="text-xs font-semibold text-gold">{room.price}</p>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{room.shortDesc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {room.amenities.slice(0, 5).map((a) => (
                      <span key={a} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                        {a}
                      </span>
                    ))}
                    {room.amenities.length > 5 && (
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        +{room.amenities.length - 5} more
                      </span>
                    )}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button
                      className="shadow-[var(--shadow-warm)]"
                      onClick={(e) => { e.stopPropagation(); openRoom(room); }}
                    >
                      View Details
                    </Button>
                    <Button asChild variant="outline" onClick={(e) => e.stopPropagation()}>
                      <Link to="/contact">Enquire Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AMENITIES GRID */}
      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-8 rounded-full bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Amenities</span>
              <span className="h-px w-8 rounded-full bg-gold" />
            </span>
            <h2 className="font-serif text-3xl font-bold md:text-4xl">In-Room Amenities</h2>
            <div className="mt-3 flex justify-center">
              <span className="h-[3px] w-16 rounded-full" style={{ background: "var(--gradient-warm)" }} />
            </div>
            <p className="mt-4 text-muted-foreground">Everything you need for a comfortable, hassle-free stay.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {amenities.map((a) => (
              <div
                key={a.label}
                className="group flex flex-col items-center rounded-2xl border border-border/60 bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-[var(--shadow-warm)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <a.icon className="h-7 w-7" />
                </div>
                <p className="mt-3 text-sm font-semibold">{a.label}</p>
              </div>
            ))}
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
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">Find Your Perfect Room</h2>
          <div className="mt-4 flex justify-center">
            <span className="h-[3px] w-20 rounded-full bg-gradient-to-r from-gold/30 via-gold to-gold/30" />
          </div>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/75 leading-relaxed">
            Reach out to check availability and reserve your stay. Limited rooms — book early!
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

      <RoomDialog room={selected} open={open} onOpenChange={setOpen} />
    </div>
  );
}
