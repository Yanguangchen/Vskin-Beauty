/**
 * Treatments by concern + quiz mapping.
 * Each service is structured as a mini landing (for CRO), without fabricated metrics.
 */

const sessionNote =
  "Timelines are discussed at your face analysis. Many clients notice early changes after the first visit or first few sessions; lasting change usually follows a personalised course.";

const baPlaceholder =
  "Before / after: add consent-based, same-lighting photos here. Until then, read verbatim client stories on the homepage and Google.";

function service(base) {
  return { ...base, sessionNote, baPlaceholder };
}

export const CONCERNS = [
  {
    id: "slimming",
    title: "Slimming & body contour",
    tagline: "When your clothes fit tighter in the wrong places—but you refuse surgery.",
    emotionalHook:
      "You want to look leaner in photos and feel less self-conscious about stubborn zones—not live in a gym to chase a number on the scale.",
    services: [
      service({
        id: "fat-melt",
        name: "VSkin Fat Melt",
        durationRange: "About 45–70 minutes per visit (varies by zones).",
        downtimeVskin:
          "Non-surgical: most clients resume normal activities the same day; mild warmth or redness can occur and usually settles quickly.",
        pricingFrom: "From $158 first-time trial (eligible visits—confirm on WhatsApp). Course pricing quoted after analysis.",
        benefit:
          "Comfortable, needle-free sessions focused on stubborn fat zones—with a plan you can actually follow.",
        note: "Ask about first-visit trial pricing during consultation.",
        forYouIf: [
          "You carry weight in specific zones (tummy, arms, thighs) that diet alone won’t budge.",
          "You want body contour support without liposuction anxiety.",
          "You’re okay with a course of sessions—not a one-shot miracle.",
        ],
        afterSessions:
          "Early visits: you may feel tighter, lighter, or “smoother” in the treated zone. Mid-course: many clients report visible contour changes when paired with honest lifestyle guidance. Long-term: maintenance sessions may be advised—your therapist will say exactly what that means for you.",
        bestFor: ["Stubborn fat pockets", "Body contour goals", "Low tolerance for invasive fat removal"],
        sessionExpectations: [
          { phase: "Visit 1", detail: "Measurements + goals + trial or starter protocol." },
          { phase: "Weeks 2–6", detail: "Structured sessions; photos optional with consent." },
          { phase: "After course", detail: "Review results; decide maintenance or next focus area." },
        ],
      }),
      service({
        id: "body-contour",
        name: "Body contouring protocols",
        durationRange: "About 50–80 minutes per visit depending on plan.",
        downtimeVskin:
          "Needle-free body protocols: typically minimal same-day restrictions; your therapist will flag anything specific to you.",
        pricingFrom: "Packages built after analysis—starter trials may apply for new clients.",
        benefit:
          "A structured plan for how you carry weight and tone—not a generic package dump.",
        note: "By appointment; Jurong East outlet.",
        forYouIf: [
          "You want a sequence (not random add-ons) that matches your body goals.",
          "You’ve been burned by hard-sell salons and want clarity first.",
        ],
        afterSessions:
          "You should leave each visit knowing why that session existed. Visible contour shifts depend on biology and adherence—expect straight answers, not hype.",
        bestFor: ["Full-body confidence", "Post-trial graduates", "People who want a roadmap"],
        sessionExpectations: [
          { phase: "Analysis", detail: "Prioritise one dominant body outcome first." },
          { phase: "Execution", detail: "Sessions spaced for recovery and skin integrity." },
          { phase: "Review", detail: "Adjust intensity or pivot if something isn’t responding." },
        ],
      }),
    ],
  },
  {
    id: "firming",
    title: "Firmer, smoother-looking skin",
    tagline: "For when you look tired even after sleep—and filters can’t fix real life.",
    emotionalHook:
      "Sharper jawline. Fresher photos. People notice something’s better—they just can’t name it.",
    services: [
      service({
        id: "skin-tighten",
        name: "Skin tightening & rejuvenation",
        durationRange: "About 45–75 minutes per session.",
        downtimeVskin:
          "Often described as same-day social life friendly; any pinkness is usually short-lived.",
        pricingFrom: "From $158 trial categories may apply—final quote after skin assessment.",
        benefit:
          "Targets laxity and texture so you look rested—not ‘pulled’ or overfilled.",
        note: "Protocols vary by skin assessment.",
        forYouIf: [
          "You see sagging, crepe texture, or loss of bounce—especially on camera.",
          "You want lift without the frozen-or-stuffed look.",
        ],
        afterSessions:
          "Some clients see a same-day ‘glow’ or tightness; structural change is usually staged across multiple visits. We’ll tell you what kind of improvement to expect per phase.",
        bestFor: ["Mild sagging", "Texture and fine lines", "Pre-event refresh"],
        sessionExpectations: [
          { phase: "Visit 1", detail: "Skin assessment + priority zone + trial or starter." },
          { phase: "Course", detail: "Timed sessions; optional progress photos if you consent." },
          { phase: "Maintenance", detail: "Light touch-ups for lasting confidence." },
        ],
      }),
      service({
        id: "vjet-facial",
        name: "V-jet facial contouring",
        durationRange: "About 45–70 minutes.",
        downtimeVskin:
          "Needle-free: typically back to work or dinner plans the same day for most clients.",
        pricingFrom: "First-visit sculpting experience from $158 where applicable—confirm for your goal.",
        benefit:
          "Needle-free delivery aimed at a more lifted, refined facial contour.",
        note: "Individual results vary.",
        forYouIf: [
          "You want cheek / jaw definition and a cleaner line in selfies.",
          "You’re needle-phobic but still want clinic-grade delivery.",
        ],
        afterSessions:
          "Reviews mention improvement after a few sessions for some clients; others see early wins fast. Your plan is personalised—no copy-paste course length.",
        bestFor: ["Facial contour", "Jawline appearance", "Photo-facing confidence"],
        sessionExpectations: [
          { phase: "Sculpt focus", detail: "Sessions mapped to angles you care about." },
          { phase: "Check-ins", detail: "Adjust pressure/serum focus based on skin response." },
        ],
      }),
    ],
  },
  {
    id: "sensitive",
    title: "Sensitive & reactive skin",
    tagline: "When your skin punishes you for trying new things—and you’re tired of gambling.",
    emotionalHook:
      "You want results without the fear flare-up cycle. You want someone who listens before they touch.",
    services: [
      service({
        id: "vjet-delivery",
        name: "Needle-free serum delivery (VJet)",
        durationRange: "About 40–65 minutes.",
        downtimeVskin:
          "Gentle modality: usually no ‘hiding at home’ phase—sensitive skin may need lighter pacing.",
        pricingFrom: "Trials and courses priced after consult.",
        benefit:
          "Pneumatic delivery designed for clients who hate needles and sting.",
        note: "We listen first—no surprise add-ons.",
        forYouIf: [
          "You’ve reacted badly to aggressive peels or harsh gadgets.",
          "You need a gentler on-ramp to active ingredients.",
        ],
        afterSessions:
          "Expect conservative pacing first. We escalate only when your skin agrees—credibility beats bravado.",
        bestFor: ["Reactive skin", "Low pain threshold", "Needle anxiety"],
        sessionExpectations: [
          { phase: "Patch mindset", detail: "Start conservative; document tolerance." },
          { phase: "Build", detail: "Increase only with your skin’s green light." },
        ],
      }),
      service({
        id: "calibrated",
        name: "Calibrated protocols",
        durationRange: "Varies with your tolerance plan.",
        downtimeVskin:
          "Built for reactive skin: we prioritise calm skin first, then ramp—often minimal interruption to routine.",
        pricingFrom: "Quoted after your sensitivity review.",
        benefit:
          "Spacing and product focus tuned to what your skin tolerates.",
        note: "Disclose allergies and medications at booking.",
        forYouIf: [
          "You’re on retinoids, prescriptions, or have a history of rosacea/eczema—tell us upfront.",
        ],
        afterSessions:
          "Stability first, glamour second. If we need to refer or pause, we will.",
        bestFor: ["Sensitive routines", "Stacked skin concerns", "First-timers who are scared"],
        sessionExpectations: [
          { phase: "Intake", detail: "Medications, allergies, last reactions." },
          { phase: "Plan", detail: "Written expectations + what to stop at home." },
        ],
      }),
    ],
  },
  {
    id: "first-visit",
    title: "New here — not sure where to start",
    tagline: "If you’re overwhelmed, you’re normal. We start with one dominant outcome.",
    emotionalHook:
      "You don’t want another salon that sells ten things you don’t need. You want a sane first step.",
    services: [
      service({
        id: "consult",
        name: "Face & body goals consultation",
        durationRange: "Typically 20–40 minutes when booked as analysis-only.",
        downtimeVskin: "No treatment downtime for a consult-only visit.",
        pricingFrom: "Often bundled into first-visit experience from $158 where applicable.",
        benefit:
          "Goals, timeline, and budget on the table—then one clear recommendation.",
        note: "Use the quiz on the homepage or WhatsApp 9880 7382.",
        forYouIf: [
          "You’ve scrolled ten clinic sites and still don’t know what to book.",
          "You want permission to start small.",
        ],
        afterSessions:
          "You leave with: what we’d do, why, what it costs, and what we won’t sell you.",
        bestFor: ["Analysis-first personalities", "Burned-by-hard-sell clients", "Busy schedules"],
        sessionExpectations: [
          { phase: "Same day", detail: "Analysis + optional trial if suitable." },
        ],
      }),
      service({
        id: "trials",
        name: "Transparent trials",
        durationRange: "Plan for 60–90 minutes on a first-visit analysis + trial day.",
        downtimeVskin:
          "Depends on trial type; needle-free VJet tracks are generally same-day life friendly.",
        pricingFrom: "From $158 for eligible first-time trials—confirm inclusions on WhatsApp.",
        benefit:
          "Experience the technology before committing to a full course.",
        note: "Promotions change; confirm on visit.",
        forYouIf: [
          "You need to feel the device and the team before you trust a package.",
        ],
        afterSessions:
          "Trial = proof of fit. Course = proof of outcome. We separate the two on purpose.",
        bestFor: ["Skeptics", "Budget-conscious starters", "Evidence-driven buyers"],
        sessionExpectations: [
          { phase: "Trial", detail: "One focused experience + debrief." },
          { phase: "Decision", detail: "You choose course, pause, or exit—no drama." },
        ],
      }),
    ],
  },
];

/** Legacy simple quiz → concern (still used if needed) */
export const QUIZ_OUTCOMES = {
  slimming: "slimming",
  firming: "firming",
  sensitive: "sensitive",
  unsure: "first-visit",
};

export const STAFF_PICKS = [
  {
    title: "Team favourite: Fat Melt starter",
    benefit:
      "Clients who want visible contour change often start here—comfortable sessions and honest timelines.",
    concernId: "slimming",
  },
  {
    title: "Sensitive-skin friendly: VJet facial",
    benefit:
      "No needles, measured intensity—popular with first-timers who are nervous about pain or downtime.",
    concernId: "sensitive",
  },
  {
    title: "Glow & firm: tightening track",
    benefit:
      "When you want skin that looks well-rested before an event or photoshoot.",
    concernId: "firming",
  },
];

/** @deprecated — multi-step funnel lives in lib/quizFunnel.js */
export const QUIZ_STEPS = [
  {
    id: "goal",
    question: "What do you want help with first?",
    options: [
      { id: "slimming", label: "Shape & stubborn areas", hint: "Body contour, fat melt" },
      { id: "firming", label: "Firmer, younger-looking skin", hint: "Texture, laxity" },
      { id: "sensitive", label: "Calm, gentle care", hint: "Reactive skin, needles" },
      { id: "unsure", label: "I'm not sure yet", hint: "We suggest a first step" },
    ],
  },
];

/** Map quiz problem areas → listings anchor */
export function concernFromAreaIds(areaIds) {
  if (!areaIds?.length) return "first-visit";
  if (areaIds.includes("sensitive")) return "sensitive";
  if (areaIds.includes("body")) return "slimming";
  if (areaIds.includes("jaw") || areaIds.includes("midface") || areaIds.includes("lines") || areaIds.includes("laxity"))
    return "firming";
  return "first-visit";
}
