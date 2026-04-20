import { CONCERNS } from "./treatmentsData";

export function getTreatmentBySlug(slug) {
  for (const concern of CONCERNS) {
    const svc = concern.services.find((s) => s.id === slug);
    if (svc) return { concern, service: svc };
  }
  return null;
}

export function getAllTreatmentSlugs() {
  const slugs = [];
  for (const c of CONCERNS) {
    for (const s of c.services) {
      slugs.push(s.id);
    }
  }
  return slugs;
}
