import { WHATSAPP_URL } from "@/lib/contact";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-[9999] grid size-14 place-items-center rounded-full text-white shadow-[0_10px_30px_-8px_oklch(0_0_0/0.35)] transition-transform duration-300 hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-full motion-safe:animate-ping"
        style={{ backgroundColor: "#25D366", opacity: 0.45 }}
      />
      <svg viewBox="0 0 32 32" className="size-7" fill="currentColor" aria-hidden>
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 01-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 01-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.434 3.41 4.482 4.471.616.315 2.005.93 2.692.93.515 0 1.876-.704 2.034-1.29.13-.46.13-.86.07-.961-.087-.13-.318-.215-.69-.4M16.78 28.617c-1.99 0-3.93-.523-5.6-1.522l-3.93 1.262 1.273-3.84c-1.084-1.752-1.654-3.762-1.654-5.821 0-5.96 4.95-10.802 11.034-10.802 2.94 0 5.71 1.142 7.79 3.21 2.08 2.067 3.214 4.83 3.214 7.766 0 5.96-4.93 10.747-11.013 10.747h-.114m9.371-20.149C23.612 5.918 20.299 4.5 16.78 4.5 9.51 4.5 3.6 10.39 3.575 17.587a13.043 13.043 0 001.787 6.581L3.5 31l6.972-1.81a13.292 13.292 0 006.301 1.61h.007c7.27 0 13.193-5.89 13.219-13.143 0-3.508-1.387-6.798-3.875-9.27"/>
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1.5 text-xs text-background opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}