/**
 * Pre-qualification quiz → WhatsApp handoff (no backend; answers encoded in message).
 */

export const FACE_SHAPE_OPTIONS = [
  { id: "round", label: "Round / full cheeks", hint: "Softer angles, more mid-face volume" },
  { id: "oval", label: "Oval / balanced", hint: "Even proportions" },
  { id: "square", label: "Square / strong jaw", hint: "Angular lower face" },
  { id: "heart", label: "Heart / wider forehead", hint: "Taper toward chin" },
  { id: "long", label: "Long / oblong", hint: "More vertical length" },
  { id: "unsure", label: "Not sure — want guidance", hint: "We map it in-clinic" },
];

export const PROBLEM_AREA_OPTIONS = [
  { id: "jaw", label: "Jawline / double chin look" },
  { id: "midface", label: "Mid-face puff or heaviness" },
  { id: "lines", label: "Lines / crepe texture" },
  { id: "laxity", label: "Sagging or loss of firmness" },
  { id: "body", label: "Body / stubborn fat" },
  { id: "sensitive", label: "Sensitive or reactive skin" },
];

export const BUDGET_OPTIONS = [
  { id: "trial", label: "Trial-first (around $158 entry)", hint: "Try before a course" },
  { id: "mid", label: "Mid-range course budget", hint: "Several sessions over weeks" },
  { id: "premium", label: "Premium / priority pacing", hint: "Faster cadence or combined goals" },
  { id: "discuss", label: "Prefer to discuss in person", hint: "No budget locked yet" },
];

export const FUNNEL_STEPS = [
  {
    id: "shape",
    title: "What’s your face shape type?",
    subtitle: "No wrong answers—we use this to pre-think angles and lighting for your consult.",
    type: "single",
    options: FACE_SHAPE_OPTIONS,
  },
  {
    id: "areas",
    title: "Where do you want the biggest win first?",
    subtitle: "Pick up to three.",
    type: "multi",
    max: 3,
    options: PROBLEM_AREA_OPTIONS,
  },
  {
    id: "budget",
    title: "What budget mindset fits you right now?",
    subtitle: "Helps us recommend a realistic first step.",
    type: "single",
    options: BUDGET_OPTIONS,
  },
  {
    id: "contact",
    title: "Almost done — optional contact",
    subtitle: "We’ll pack everything into one WhatsApp message for the team.",
    type: "contact",
  },
];

export function buildWhatsAppBody({ shapeId, areaIds, budgetId, name, phone }) {
  const shape = FACE_SHAPE_OPTIONS.find((o) => o.id === shapeId)?.label ?? shapeId;
  const areas =
    areaIds?.length > 0
      ? areaIds
          .map((id) => PROBLEM_AREA_OPTIONS.find((o) => o.id === id)?.label ?? id)
          .join(", ")
      : "(none selected)";
  const budget = BUDGET_OPTIONS.find((o) => o.id === budgetId)?.label ?? budgetId;
  const lines = [
    "Hi VSkin — I completed the online pre-qualification:",
    `• Face shape type: ${shape}`,
    `• Priority areas: ${areas}`,
    `• Budget mindset: ${budget}`,
  ];
  if (name?.trim()) lines.push(`• Name: ${name.trim()}`);
  if (phone?.trim()) lines.push(`• Phone: ${phone.trim()}`);
  lines.push("", "I’d like to check suitability and book a face analysis. What slots do you have?");
  return lines.join("\n");
}
