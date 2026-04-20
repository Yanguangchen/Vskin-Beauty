/**
 * Shared copy for "treatments by concern" and the Beauty Concierge quiz.
 * Benefit-led headlines; service names stay recognizable for existing clients.
 */

export const CONCERNS = [
  {
    id: "slimming",
    title: "Slimming & body contour",
    tagline: "Target stubborn areas—without surgery or downtime.",
    services: [
      {
        name: "VSkin Fat Melt",
        benefit:
          "Support your shape goals with comfortable, needle-free sessions and clear after-care guidance.",
        note: "Ask about first-visit trial pricing during consultation.",
      },
      {
        name: "Body contouring protocols",
        benefit:
          "A structured plan focused on how you carry weight and tone—not a one-size-fits-all package push.",
        note: "By appointment; Jurong East outlet.",
      },
    ],
  },
  {
    id: "firming",
    title: "Firmer, smoother-looking skin",
    tagline: "Lift confidence with skin that looks refreshed, not overdone.",
    services: [
      {
        name: "Skin tightening & rejuvenation",
        benefit:
          "Addresses laxity and texture so you look rested—ideal if you want results without aggressive downtime.",
        note: "Protocols vary by skin assessment.",
      },
      {
        name: "V-jet facial contouring",
        benefit:
          "Many clients notice a more lifted, refined look after a short course—see reviews on our homepage.",
        note: "Individual results vary.",
      },
    ],
  },
  {
    id: "sensitive",
    title: "Sensitive & reactive skin",
    tagline: "Gentle delivery for skin that flares easily with harsh products or needles.",
    services: [
      {
        name: "Needle-free serum delivery (VJet)",
        benefit:
          "Skip needle anxiety: pneumatic delivery is designed to be comfortable for low-pain-threshold clients.",
        note: "We listen first—no surprise add-ons.",
      },
      {
        name: "Calibrated protocols",
        benefit:
          "We build around what your skin tolerates, with honest expectations and spacing between sessions.",
        note: "Disclose allergies and medications at booking.",
      },
    ],
  },
  {
    id: "first-visit",
    title: "New here — not sure where to start",
    tagline: "We map goals first, then recommend only what fits.",
    services: [
      {
        name: "Complimentary-style consultation",
        benefit:
          "Walk through goals, timeline, and budget so you leave with a clear next step—not pressure.",
        note: "Use our quiz below or WhatsApp 9880 7382.",
      },
      {
        name: "Transparent trials",
        benefit:
          "Trial entries (e.g. from $158) let you experience the technology before committing to a course.",
        note: "Promotions change; confirm on visit.",
      },
    ],
  },
];

/** Quiz option → primary concern id */
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

export const QUIZ_STEPS = [
  {
    id: "goal",
    question: "What do you want help with first?",
    options: [
      {
        id: "slimming",
        label: "Shape & stubborn areas",
        hint: "Body contour, fat melt, confidence in clothes",
      },
      {
        id: "firming",
        label: "Firmer, younger-looking skin",
        hint: "Texture, laxity, overall refresh",
      },
      {
        id: "sensitive",
        label: "Calm, gentle care",
        hint: "Reactive skin, low pain threshold, needle-free preference",
      },
      {
        id: "unsure",
        label: "I'm not sure yet",
        hint: "We'll suggest a sensible first step",
      },
    ],
  },
];
