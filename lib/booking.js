/**
 * Central booking handoff. Set NEXT_PUBLIC_BOOKING_URL in Vercel to a
 * Calendly / Acuity / Google Appointment link. Falls back to WhatsApp.
 */
const WA_DEFAULT =
  "https://wa.me/6598807382?text=Hi%20VSkin%2C%20I%27d%20like%20to%20book%20an%20appointment.";

export function getBookingUrl() {
  const custom = process.env.NEXT_PUBLIC_BOOKING_URL;
  if (custom && custom.startsWith("http")) return custom;
  return WA_DEFAULT;
}

export function hasExternalBookingCalendar() {
  const custom = process.env.NEXT_PUBLIC_BOOKING_URL;
  return Boolean(custom && custom.startsWith("http"));
}
