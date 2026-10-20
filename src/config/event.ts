/**
 * Central event configuration for Rang De Fest.
 * Set REGISTRATION_URL to the real registration link once available.
 * While empty, all "Register Now" CTAs show a "registration opening soon" state.
 */
export const REGISTRATION_URL = "https://forms.gle/iquXC4tpprK9VHUi7";

export const EVENT = {
  name: "Rang De Fest",
  presenter: "HYD Pop-Up",
  tagline: "Bright. Enjoy. Festive Colours. Joy.",
  dateLabel: "31 October 2026",
  dateISO: "2026-10-31T18:00:00+05:00",
  timeLabel: "6 PM – 12 AM",
  venue: "RETAJ Academy",
  venueArea: "Qasimabad, Hyderabad",
  entry: "Free Entry",
  organizers: ["HYD Pop-Up", "RETAJ Academy"],
} as const;

export const isRegistrationOpen = () => REGISTRATION_URL.trim().length > 0;

/** WhatsApp contact for stall booking, as printed on the poster. */
export const STALL_WHATSAPP = { display: "0327-1004195", international: "923271004195" } as const;
export const stallWhatsAppUrl = () =>
  `https://wa.me/${STALL_WHATSAPP.international}?text=${encodeURIComponent("Hi, I'd like to book a stall at Rang De Fest.")}`;

/** Verified map destination for the venue. Leave empty until confirmed — no map link is shown while empty. */
export const VENUE_MAP_URL = "";

export const DRESS_CODE = "White outfit with a colourful dupatta or stole (Holi-inspired festive theme)";
