import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919986727676"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-transform hover:scale-110 focus-visible:outline-none"
      style={{ backgroundColor: "#25D366" }}
    >
      <span
        className="absolute inset-0 animate-ping rounded-full opacity-25"
        style={{ backgroundColor: "#25D366" }}
      />
      <MessageCircle className="relative h-7 w-7 text-white" />
    </a>
  );
}
