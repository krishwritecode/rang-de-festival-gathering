/**
 * Central event configuration for Rang De Fest.
 * All event facts, ticket prices, payment details and the registration URL live here.
 */
export const REGISTRATION_URL = "https://forms.gle/iquXC4tpprK9VHUi7";

export const EVENT = {
  name: "Rang De Fest",
  presenter: "HYD Pop-Up",
  tagline: "Bright. Enjoy. Festive Colours. Joy.",
  dateLabel: "31 October 2026",
  dateISO: "2026-10-31T18:00:00+05:00",
  timeLabel: "6 PM onwards",
  venue: "RETAJ Academy",
  venueArea: "Qasimabad, Hyderabad",
  venueAddress:
    "Behind Asim Clinic, Bungalows 59, 60, 61, Fareed House, Block A, Phase 1, Qasimabad, Hyderabad, Sindh, Pakistan",
  entry: "Tickets from Rs. 1,000",
  organizers: ["HYD Pop-Up", "RETAJ Academy"],
} as const;

export const isRegistrationOpen = () => REGISTRATION_URL.trim().length > 0;

export type TicketId = "early-bird" | "standard";

export const TICKETS = [
  {
    id: "early-bird" as TicketId,
    name: "Early Bird",
    price: 1000,
    priceLabel: "Rs. 1,000",
    note: "Available until 25 October 2026",
    availableUntilISO: "2026-10-25T23:59:59+05:00",
    featured: true,
  },
  {
    id: "standard" as TicketId,
    name: "Standard",
    price: 1500,
    priceLabel: "Rs. 1,500",
    note: "Regular ticket price",
    availableUntilISO: null,
    featured: false,
  },
] as const;

/** Payment details for Easypaisa / JazzCash. */
export const PAYMENT = {
  methods: ["Easypaisa", "JazzCash"],
  number: "0327-1004195",
} as const;

/** Official WhatsApp contact (stalls + payment proof). */
export const STALL_WHATSAPP = { display: "0327-1004195", international: "923271004195" } as const;
export const WHATSAPP_URL = `https://wa.me/${STALL_WHATSAPP.international}`;
export const stallWhatsAppUrl = () =>
  `${WHATSAPP_URL}?text=${encodeURIComponent("Hi, I'd like to book a stall at Rang De Fest.")}`;

/** Verified map destination for the venue. Leave empty until confirmed — no map link is shown while empty. */
export const VENUE_MAP_URL = "";

export const DRESS_CODE = "White outfit with a colourful dupatta or stole (Holi-inspired festive theme)";
