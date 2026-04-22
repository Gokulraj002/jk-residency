import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BedDouble, Check, ChevronLeft, ChevronRight, Maximize, Maximize2, Users, X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function RoomDialog({ room, open, onOpenChange }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (open) {
      setActiveIdx(0);
      setIsFullscreen(false);
    }
  }, [open, room?.slug]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") setActiveIdx((i) => (i + 1) % (room?.images?.length || 1));
      else if (e.key === "ArrowLeft")
        setActiveIdx((i) => {
          const t = room?.images?.length || 1;
          return (i - 1 + t) % t;
        });
      else if (e.key === "Escape" && isFullscreen) {
        e.stopPropagation();
        setIsFullscreen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, isFullscreen, room?.images?.length]);

  const SWIPE_THRESHOLD = 40;
  const pointerStartX = useRef(null);
  const pointerDeltaX = useRef(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  if (!room) return null;

  const images = room.images?.length ? room.images : [room.image];
  const total = images.length;
  const goPrev = () => setActiveIdx((i) => (i - 1 + total) % total);
  const goNext = () => setActiveIdx((i) => (i + 1) % total);

  const handlePointerDown = (e) => {
    if (total <= 1) return;
    pointerStartX.current = e.clientX;
    pointerDeltaX.current = 0;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (pointerStartX.current === null) return;
    pointerDeltaX.current = e.clientX - pointerStartX.current;
    setDragOffset(pointerDeltaX.current);
  };

  const endGesture = (e) => {
    if (pointerStartX.current === null) return;
    const delta = pointerDeltaX.current;
    pointerStartX.current = null;
    pointerDeltaX.current = 0;
    setIsDragging(false);
    setDragOffset(0);
    try { e.currentTarget.releasePointerCapture(e.pointerId); } catch { /* released */ }
    if (delta <= -SWIPE_THRESHOLD) goNext();
    else if (delta >= SWIPE_THRESHOLD) goPrev();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto p-0">
        {/* GALLERY */}
        <div
          className="relative touch-pan-y select-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endGesture}
          onPointerCancel={endGesture}
          style={{
            transform: dragOffset ? `translateX(${dragOffset * 0.35}px)` : undefined,
            transition: isDragging ? "none" : "transform 200ms ease-out",
            cursor: total > 1 ? (isDragging ? "grabbing" : "grab") : undefined,
          }}
        >
          <img
            src={images[activeIdx]}
            alt={`${room.name} room at JK Residency — photo ${activeIdx + 1}`}
            loading={activeIdx === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={activeIdx === 0 ? "high" : "auto"}
            sizes="(min-width: 768px) 768px, 100vw"
            className="h-56 w-full object-cover sm:h-72 md:h-80"
          />
          {total > 1 && (
            <div aria-hidden="true" className="hidden">
              <img src={images[(activeIdx + 1) % total]} alt="" loading="lazy" decoding="async" />
              <img src={images[(activeIdx - 1 + total) % total]} alt="" loading="lazy" decoding="async" />
            </div>
          )}

          {total > 1 && (
            <>
              <button type="button" onClick={goPrev} aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-md backdrop-blur transition hover:bg-background">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button type="button" onClick={goNext} aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-md backdrop-blur transition hover:bg-background">
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground shadow backdrop-blur">
                {activeIdx + 1} / {total}
              </div>
            </>
          )}

          <button type="button" onClick={() => setIsFullscreen(true)} aria-label="View photos fullscreen"
            className="absolute right-3 top-3 rounded-full bg-background/80 p-2 text-foreground shadow-md backdrop-blur transition hover:bg-background">
            <Maximize className="h-4 w-4" />
          </button>
        </div>

        {/* FULLSCREEN OVERLAY */}
        {isFullscreen && (
          <div className="fixed inset-0 z-[60] flex flex-col bg-black/95 text-white" role="dialog" aria-modal="true" aria-label={`${room.name} photo gallery`}>
            <div className="flex items-center justify-between p-3">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">{activeIdx + 1} / {total}</span>
              <button type="button" onClick={() => setIsFullscreen(false)} aria-label="Exit fullscreen"
                className="rounded-full bg-white/10 p-2 backdrop-blur transition hover:bg-white/20">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative flex flex-1 items-center justify-center touch-pan-y select-none"
              onPointerDown={handlePointerDown} onPointerMove={handlePointerMove}
              onPointerUp={endGesture} onPointerCancel={endGesture}
              style={{
                transform: dragOffset ? `translateX(${dragOffset * 0.35}px)` : undefined,
                transition: isDragging ? "none" : "transform 200ms ease-out",
                cursor: total > 1 ? (isDragging ? "grabbing" : "grab") : undefined,
              }}>
              <img src={images[activeIdx]} alt={`${room.name} — photo ${activeIdx + 1}`} className="max-h-full max-w-full object-contain" decoding="async" />
              {total > 1 && (
                <>
                  <button type="button" onClick={goPrev} aria-label="Previous photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur transition hover:bg-white/20">
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button type="button" onClick={goNext} aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur transition hover:bg-white/20">
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>
            {total > 1 && (
              <div className="flex justify-center gap-2 overflow-x-auto p-3">
                {images.map((src, i) => (
                  <button key={`${src}-fs-${i}`} type="button" onClick={() => setActiveIdx(i)} aria-label={`View photo ${i + 1}`}
                    className={cn("h-14 w-20 flex-shrink-0 overflow-hidden rounded-md border-2 transition",
                      activeIdx === i ? "border-white" : "border-transparent opacity-60 hover:opacity-100")}>
                    <img src={src} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* THUMBNAILS */}
        {total > 1 && (
          <div className="flex gap-2 overflow-x-auto px-6 pt-4 md:px-8">
            {images.map((src, i) => (
              <button key={`${src}-${i}`} type="button" onClick={() => setActiveIdx(i)}
                aria-label={`View photo ${i + 1}`} aria-current={activeIdx === i}
                className={cn("relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md border-2 transition",
                  activeIdx === i ? "border-primary shadow-[var(--shadow-soft)]" : "border-transparent opacity-70 hover:opacity-100")}>
                <img src={src} alt={`${room.name} thumbnail ${i + 1}`} loading="lazy" decoding="async" sizes="96px" width={96} height={64} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}

        <div className="p-6 md:p-8">
          <DialogHeader className="space-y-2 text-left">
            <DialogTitle className="font-serif text-2xl font-bold md:text-3xl">{room.name}</DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">{room.fullDesc}</DialogDescription>
          </DialogHeader>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-lg border border-border/60 bg-secondary/40 p-3">
              <Users className="h-5 w-5 text-primary" />
              <div><p className="text-xs uppercase tracking-wide text-muted-foreground">Capacity</p><p className="text-sm font-semibold">{room.capacity}</p></div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border/60 bg-secondary/40 p-3">
              <BedDouble className="h-5 w-5 text-primary" />
              <div><p className="text-xs uppercase tracking-wide text-muted-foreground">Bed</p><p className="text-sm font-semibold">{room.bedType}</p></div>
            </div>
            {room.size && (
              <div className="flex items-center gap-3 rounded-lg border border-border/60 bg-secondary/40 p-3">
                <Maximize2 className="h-5 w-5 text-primary" />
                <div><p className="text-xs uppercase tracking-wide text-muted-foreground">Size</p><p className="text-sm font-semibold">{room.size}</p></div>
              </div>
            )}
          </div>

          <div className="mt-6">
            <h3 className="font-serif text-lg font-semibold">Room Features</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {room.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" /><span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-serif text-lg font-semibold">Amenities</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {room.amenities.map((a) => (
                <span key={a} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{a}</span>
              ))}
            </div>
          </div>

          {room.pricing?.length > 0 && (
            <div className="mt-6 rounded-xl border border-gold/40 bg-gold/8 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gold/20">
                <p className="text-sm font-bold text-foreground">Pricing <span className="font-normal text-muted-foreground">(+ GST)</span></p>
                <p className="text-xs text-muted-foreground">12 Noon Concept</p>
              </div>
              <div className="divide-y divide-gold/10">
                {room.pricing.map((p) => (
                  <div key={p.occupancy} className="flex items-center justify-between px-4 py-2.5">
                    <span className="text-sm text-muted-foreground">{p.occupancy} Occupancy</span>
                    <span className="text-sm font-bold text-foreground">₹{p.rate.toLocaleString("en-IN")}</span>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2 bg-gold/5 border-t border-gold/20">
                <p className="text-xs text-muted-foreground">Check-in: 12:00 PM · Check-out: 11:00 AM</p>
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="flex-1 shadow-[var(--shadow-warm)]">
              <Link to="/contact" onClick={() => onOpenChange(false)}>Book This Room</Link>
            </Button>
            <Button variant="outline" size="lg" onClick={() => onOpenChange(false)}>Close</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
