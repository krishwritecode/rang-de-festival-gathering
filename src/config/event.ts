/**
 * Central event configuration for Rang De Fest.
 * Set REGISTRATION_URL to the real registration link once available.
 * While empty, all "Register Now" CTAs show a "registration opening soon" state.
 */
export const REGISTRATION_URL = "";

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
