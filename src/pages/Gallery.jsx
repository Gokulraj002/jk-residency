import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, Images } from "lucide-react";
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
import img13 from "@/assets/img-13.jpeg";
import img14 from "@/assets/img-14.jpeg";
import img15 from "@/assets/img-15.jpeg";
import img16 from "@/assets/img-16.jpeg";
import img17 from "@/assets/img-17.jpeg";
import img18 from "@/assets/img-18.jpeg";
import img19 from "@/assets/img-19.jpeg";
import img20 from "@/assets/img-20.jpeg";
import img21 from "@/assets/img-21.jpeg";
import img22 from "@/assets/img-22.jpeg";
import img23 from "@/assets/img-23.jpeg";
import img24 from "@/assets/img-24.jpeg";
import img25 from "@/assets/img-25.jpeg";
import img26 from "@/assets/img-26.jpeg";
import img27 from "@/assets/img-27.jpeg";
import img28 from "@/assets/img-28.jpeg";
import img29 from "@/assets/img-29.jpeg";
import img30 from "@/assets/img-30.jpeg";
import img31 from "@/assets/img-31.jpeg";
import img32 from "@/assets/img-32.jpeg";
import img33 from "@/assets/img-33.jpeg";
import img34 from "@/assets/img-34.jpeg";
import img35 from "@/assets/img-35.jpeg";
import img36 from "@/assets/img-36.jpeg";
import img37 from "@/assets/img-37.jpeg";

const images = [
  img01, img02, img03, img04, img05, img06, img07, img08, img09, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35, img36, img37,
].map((src, i) => ({ src, alt: `JK Residency — photo ${i + 1}` }));

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox((i) => (i - 1 + images.length) % images.length), []);
  const next = useCallback(() => setLightbox((i) => (i + 1) % images.length), []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, prev, next]);

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
            Our Gallery
          </span>
          <h1 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
            A Glimpse of JK Residency
          </h1>
          <div className="mt-3 flex justify-center">
            <span className="h-[3px] w-16 rounded-full" style={{ background: "var(--gradient-warm)" }} />
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            Browse through our property photos — rooms, amenities, and the welcoming spaces that make
            JK Residency your home away from home in Bengaluru.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-sm text-muted-foreground">
            <Images className="h-4 w-4 text-primary" />
            {images.length} photos · Click to view fullscreen
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="container mx-auto px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setLightbox(i)}
              aria-label={`View ${img.alt}`}
              className="group relative overflow-hidden rounded-xl border border-border/60 shadow-[var(--shadow-soft)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all hover:shadow-[var(--shadow-warm)] hover:border-primary/20"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="rounded-full bg-white/90 p-2 shadow-lg">
                  <Images className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 rounded-full bg-black/40 px-2 py-0.5 text-xs text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                {i + 1}/{images.length}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-black/97"
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              {lightbox + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Close lightbox"
              className="rounded-full bg-white/10 p-2.5 text-white backdrop-blur transition hover:bg-white/25"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-14">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-3 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/25"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <img
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
              decoding="async"
            />

            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="absolute right-3 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/25"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 overflow-x-auto px-4 py-3">
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightbox(i)}
                aria-label={`View photo ${i + 1}`}
                className={`h-14 w-20 flex-shrink-0 overflow-hidden rounded-md border-2 transition-all ${
                  lightbox === i ? "border-gold scale-105 shadow-lg" : "border-transparent opacity-40 hover:opacity-70"
                }`}
              >
                <img src={img.src} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
