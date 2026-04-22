import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactSchema = z
  .object({
    name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
    email: z.string().trim().email("Please enter a valid email").max(255),
    phone: z
      .string()
      .trim()
      .min(7, "Please enter a valid phone number")
      .max(20, "Phone number is too long")
      .regex(/^[+\d\s()-]+$/, "Phone can only contain digits, spaces, +, -, ()"),
    checkIn: z.string().min(1, "Check-in date is required"),
    checkOut: z.string().min(1, "Check-out date is required"),
    guests: z
      .string()
      .min(1, "Required")
      .refine((v) => /^\d+$/.test(v) && Number(v) >= 1 && Number(v) <= 20, { message: "Enter between 1 and 20" }),
    message: z.string().trim().max(1000, "Message is too long").optional().or(z.literal("")),
  })
  .refine((d) => new Date(d.checkOut) > new Date(d.checkIn), {
    message: "Check-out must be after check-in",
    path: ["checkOut"],
  });

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: (
      <a
        href="https://maps.app.goo.gl/hUSmukirTCiViwdK6"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 block text-sm text-muted-foreground transition hover:text-primary"
      >
        Plot No. 248, Old Madras Rd, RMS Colony,<br />
        Bhattarahalli, KR Puram,<br />
        Bengaluru, Karnataka 560049
        <span className="mt-1 block text-xs italic text-muted-foreground/70">Landmark: Above A2B Family Restaurant</span>
      </a>
    ),
  },
  {
    icon: Phone,
    title: "Call Us",
    content: (
      <div className="mt-1 space-y-0.5">
        <a href="tel:+919986727674" className="block text-sm text-muted-foreground transition hover:text-primary">+91 99867 27674</a>
        <a href="tel:+919986727676" className="block text-sm text-muted-foreground transition hover:text-primary">+91 99867 27676</a>
      </div>
    ),
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: (
      <a href="https://wa.me/919986727676" target="_blank" rel="noopener noreferrer"
        className="mt-1 block text-sm text-muted-foreground transition hover:text-primary">
        +91 99867 27676
      </a>
    ),
  },
  {
    icon: Mail,
    title: "Email",
    content: (
      <a href="mailto:jkrooms9@gmail.com"
        className="mt-1 block text-sm text-muted-foreground transition hover:text-primary">
        jkrooms9@gmail.com
      </a>
    ),
  },
  {
    icon: Clock,
    title: "Check-in / Check-out",
    content: (
      <div className="mt-1 space-y-0.5">
        <p className="text-sm text-muted-foreground">Check-in: 12:00 PM</p>
        <p className="text-sm text-muted-foreground">Check-out: 11:00 AM</p>
        <p className="text-xs italic text-muted-foreground/70 mt-0.5">24-hour concept available on demand</p>
      </div>
    ),
  },
];

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", checkIn: "", checkOut: "", guests: "1", message: "" },
  });

  const onSubmit = async (values) => {
    setSubmitting(true);
    try {
      const existing = JSON.parse(localStorage.getItem("jk_enquiries") ?? "[]");
      existing.push({ ...values, submittedAt: new Date().toISOString() });
      localStorage.setItem("jk_enquiries", JSON.stringify(existing));
    } catch { /* ignore storage errors */ }
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Enquiry received!", { description: "Thank you — our team will get back to you shortly." });
    form.reset();
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
            Contact Us
          </span>
          <h1 className="mt-4 font-serif text-4xl font-bold md:text-5xl">We'd Love to Hear From You</h1>
          <div className="mt-3 flex justify-center">
            <span className="h-[3px] w-16 rounded-full" style={{ background: "var(--gradient-warm)" }} />
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            Send us an enquiry, ask about availability, or reach out directly. We're here 24/7 to help plan your perfect stay.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* INFO */}
          <div className="space-y-5 lg:col-span-2">
            {contactInfo.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  {item.content}
                </div>
              </div>
            ))}

            {/* Quick Facts card */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <p className="flex items-center gap-2 font-semibold text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Quick Facts
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {[
                  "Starting from ₹2,000 + GST",
                  "Long stay offers: 10–20% off",
                  "Couple friendly — all guests welcome",
                  "Free High-Speed Wi-Fi",
                  "Limited rooms — book early!",
                ].map((fact) => (
                  <li key={fact} className="flex items-center gap-2">
                    <span className="h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            {/* Google Maps embed */}
            <div className="overflow-hidden rounded-2xl border border-border/60 shadow-[var(--shadow-soft)]">
              <iframe
                title="JK Residency location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d77.7!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjAiTiA3N8KwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="text-center">
              <a
                href="https://maps.app.goo.gl/hUSmukirTCiViwdK6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary transition hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-3">
            <Card className="border-border/60 shadow-[var(--shadow-soft)]">
              <CardContent className="p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Send className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold">Send an Enquiry</h2>
                    <p className="text-xs text-muted-foreground">Fill in your details — we'll reply quickly.</p>
                  </div>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5">
                    <div className="grid gap-5 md:grid-cols-2">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl><Input placeholder="Your name" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone / WhatsApp</FormLabel>
                        <FormControl><Input type="tel" placeholder="+91 99867 27674" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <div className="grid gap-5 md:grid-cols-3">
                      <FormField control={form.control} name="checkIn" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Check-in</FormLabel>
                          <FormControl><Input type="date" min={today} {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="checkOut" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Check-out</FormLabel>
                          <FormControl><Input type="date" min={today} {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="guests" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Guests</FormLabel>
                          <FormControl><Input type="number" min={1} max={20} {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message (optional)</FormLabel>
                        <FormControl>
                          <Textarea rows={4} placeholder="Any special requests, long stay inquiry, or questions?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <Button type="submit" size="lg" disabled={submitting} className="shadow-[var(--shadow-warm)]">
                      <Send className="h-4 w-4" />
                      {submitting ? "Sending..." : "Send Enquiry"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
