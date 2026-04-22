import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/jk-logo.jpeg";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us" },
  { to: "/rooms", label: "Rooms" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/97 shadow-[var(--shadow-soft)] backdrop-blur-md"
          : "border-b border-transparent bg-background/90 backdrop-blur-sm",
      )}
    >
      {/* Main nav */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-[72px] md:px-6">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setOpen(false)}
          aria-label="JK Residency — home"
        >
          <img src={logo} alt="JK Residency" className="h-12 w-auto object-contain md:h-14" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className="block">
              {({ isActive }) => (
                <span
                  className={cn(
                    "relative block px-4 py-2 text-sm font-medium transition-colors duration-200",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-primary",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gold transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                  />
                </span>
              )}
            </NavLink>
          ))}
          <Button asChild size="sm" className="ml-4 px-5 shadow-[var(--shadow-warm)]">
            <Link to="/contact">Book Now</Link>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="rounded-lg p-2 text-foreground transition-colors hover:bg-secondary md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/60 bg-background/97 backdrop-blur-md md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "flex items-center rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "border-l-2 border-primary bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-primary",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border/60 pt-3">
              <Button asChild>
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Book Now
                </Link>
              </Button>
              <a
                href="tel:+919986727674"
                className="flex items-center justify-center gap-2 rounded-lg border border-border py-2.5 text-sm text-muted-foreground transition hover:bg-secondary hover:text-primary"
              >
                <Phone className="h-4 w-4" /> +91 99867 27674
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
