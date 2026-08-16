/**
 * VSkin Beauty & Slimming — full treatment and product menu.
 *
 * The menu is stored as one flat list of priced items. Every item carries the
 * category and the group (the sub-heading it sits under on the printed menu),
 * so the price list page can group items for display while still searching,
 * filtering and sorting over a single array.
 */

export const CATEGORIES = [
  {
    id: "collagen",
    name: "V Jet Collagen",
    kind: "treatment",
    blurb: "Needle-free collagen for lift, volume and definition.",
  },
  {
    id: "cell-renewal",
    name: "V Jet Cell Renewal",
    kind: "treatment",
    blurb: "Deep rejuvenation for face, neck and body.",
  },
  {
    id: "lifting",
    name: "V Jet Lifting",
    kind: "treatment",
    blurb: "Contour and tighten the face, bust or butt.",
  },
  {
    id: "combo",
    name: "V Jet Combo",
    kind: "treatment",
    blurb: "Multi-step sessions that stack our most requested treatments.",
  },
  {
    id: "acne",
    name: "Acne Treatments",
    kind: "treatment",
    blurb: "Clear congestion and calm breakouts.",
  },
  {
    id: "pigmentation",
    name: "Pigmentation Treatments",
    kind: "treatment",
    blurb: "Brighten, even out and refine the complexion.",
  },
  {
    id: "facials",
    name: "Facials",
    kind: "treatment",
    blurb: "Signature facials at one simple price.",
    includes: [
      "Mesowhite",
      "Diamond Peel",
      "Aqua Peel",
      "Gua Sha",
      "N1 Face Lift",
      "Misty Jet",
    ],
    includesLabel: "Choose any of these facials",
  },
  {
    id: "slimming",
    name: "V Jet Slimming",
    kind: "treatment",
    blurb: "Fat melt and detox programmes for body shaping.",
  },
  {
    id: "wrinkle",
    name: "V Jet Wrinkle",
    kind: "treatment",
    blurb: "Smooth lines and relax muscles, dot by dot.",
    note: "Our menu lists two Forehead options ($388 and $500) — your therapist will advise which one suits you at your consultation.",
  },
  {
    id: "promos",
    name: "Promotional Offers",
    kind: "treatment",
    blurb: "Limited-time bundles and seasonal savings.",
  },
  {
    id: "recovery-products",
    name: "Recovery Products",
    kind: "product",
    blurb: "Take-home aftercare for post-treatment skin.",
  },
  {
    id: "pigmentation-products",
    name: "Pigmentation Products",
    kind: "product",
    blurb: "Home care that keeps brightening results going.",
  },
  {
    id: "skincare-products",
    name: "Other Skincare Products",
    kind: "product",
    blurb: "Everyday essentials from our retail shelf.",
  },
];

export const TYPES = [
  { id: "trial", label: "First Trial", hint: "Introductory price for new clients" },
  { id: "alacarte", label: "Ala Carte", hint: "Single session, no commitment" },
  { id: "package", label: "Packages", hint: "Multi-session bundles" },
  { id: "promo", label: "Promotions", hint: "Limited-time offers" },
  { id: "product", label: "Products", hint: "Take-home skincare" },
];

export const PRICE_BANDS = [
  { id: "under-100", label: "Under $100", min: 0, max: 99 },
  { id: "100-299", label: "$100 – $299", min: 100, max: 299 },
  { id: "300-699", label: "$300 – $699", min: 300, max: 699 },
  { id: "700-plus", label: "$700 & above", min: 700, max: Infinity },
];

export const SORT_OPTIONS = [
  { id: "menu", label: "Menu order" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
];

const ITEMS = [
  /* ---------------------------------------------------------------- 1. V Jet Collagen */
  { id: "collagen-trial-nose", category: "collagen", group: "First Trial", type: "trial", name: "Nose", detail: "1ml", price: 328 },
  { id: "collagen-trial-eye", category: "collagen", group: "First Trial", type: "trial", name: "Sunken Eye", detail: "1ml", price: 388 },
  { id: "collagen-trial-chin", category: "collagen", group: "First Trial", type: "trial", name: "Chin", detail: "1ml", price: 388 },
  { id: "collagen-trial-laugh", category: "collagen", group: "First Trial", type: "trial", name: "Laugh Line", detail: "1ml", price: 388 },
  { id: "collagen-trial-lips", category: "collagen", group: "First Trial", type: "trial", name: "Lips", detail: "1ml", price: 388 },
  { id: "collagen-ala-any", category: "collagen", group: "Ala Carte", type: "alacarte", name: "Any treatment", detail: "1ml", price: 688, keywords: ["nose", "eye", "chin", "laugh line", "lips"] },
  { id: "collagen-pkg-nose", category: "collagen", group: "Packages", type: "package", name: "Nose", detail: "3 treatments · 3ml", price: 1088 },
  { id: "collagen-pkg-any", category: "collagen", group: "Packages", type: "package", name: "Any area", detail: "5 treatments · 5ml", price: 1588 },

  /* ---------------------------------------------------------- 2. V Jet Cell Renewal */
  { id: "renewal-trial-05", category: "cell-renewal", group: "First Trial", type: "trial", name: "Cell Renewal", detail: "0.5ml · any area", price: 388 },
  { id: "renewal-trial-1", category: "cell-renewal", group: "First Trial", type: "trial", name: "Cell Renewal", detail: "1ml · face or neck", price: 500 },
  { id: "renewal-ala-05", category: "cell-renewal", group: "Ala Carte", type: "alacarte", name: "Cell Renewal", detail: "0.5ml", price: 688 },
  { id: "renewal-ala-1", category: "cell-renewal", group: "Ala Carte", type: "alacarte", name: "Cell Renewal", detail: "1ml", price: 800 },
  { id: "renewal-pkg-3", category: "cell-renewal", group: "Packages", type: "package", name: "Cell Renewal", detail: "3ml", price: 1500 },
  { id: "renewal-pkg-7", category: "cell-renewal", group: "Packages", type: "package", name: "Cell Renewal", detail: "7ml", price: 3000 },
  { id: "renewal-pkg-9", category: "cell-renewal", group: "Packages", type: "package", name: "Cell Renewal", detail: "9ml", price: 3800 },

  /* --------------------------------------------------------------- 3. V Jet Lifting */
  { id: "lifting-trial-face", category: "lifting", group: "First Trial", type: "trial", name: "Face Lifting", price: 88 },
  { id: "lifting-trial-body", category: "lifting", group: "First Trial", type: "trial", name: "Bust / Butt Lifting", price: 388 },
  { id: "lifting-ala-face", category: "lifting", group: "Ala Carte", type: "alacarte", name: "Face Lifting", price: 288 },
  { id: "lifting-ala-body", category: "lifting", group: "Ala Carte", type: "alacarte", name: "Bust / Butt Lifting", price: 488 },
  { id: "lifting-pkg-face", category: "lifting", group: "Packages", type: "package", name: "Face Lifting", detail: "5 sessions", price: 600 },
  { id: "lifting-pkg-body", category: "lifting", group: "Packages", type: "package", name: "Bust / Butt Lifting", detail: "5 sessions + 5 N1", price: 1588 },

  /* ----------------------------------------------------------------- 4. V Jet Combo */
  { id: "combo-2in1-trial", category: "combo", group: "2 in 1: SB + PDRN", type: "trial", name: "First Trial", price: 280 },
  { id: "combo-2in1-ala", category: "combo", group: "2 in 1: SB + PDRN", type: "alacarte", name: "Ala Carte", price: 380 },
  { id: "combo-2in1-pkg", category: "combo", group: "2 in 1: SB + PDRN", type: "package", name: "5 Sessions", price: 1080 },
  { id: "combo-3in1-trial", category: "combo", group: "3 in 1: SB + PDRN + Lifting", type: "trial", name: "First Trial", price: 388 },
  { id: "combo-3in1-ala", category: "combo", group: "3 in 1: SB + PDRN + Lifting", type: "alacarte", name: "Ala Carte", price: 688 },
  { id: "combo-3in1-pkg", category: "combo", group: "3 in 1: SB + PDRN + Lifting", type: "package", name: "5 Sessions", price: 1588 },
  { id: "combo-fatmelt-trial", category: "combo", group: "Fat Melt + Lifting", type: "trial", name: "First Trial", price: 380 },
  { id: "combo-fatmelt-ala", category: "combo", group: "Fat Melt + Lifting", type: "alacarte", name: "Ala Carte", price: 580 },
  { id: "combo-fatmelt-pkg", category: "combo", group: "Fat Melt + Lifting", type: "package", name: "5 Sessions", price: 1800 },

  /* ------------------------------------------------------------- 5. Acne Treatments */
  { id: "acne-vjet-trial", category: "acne", group: "V Jet Acne", type: "trial", name: "First Trial", price: 188 },
  { id: "acne-vjet-ala", category: "acne", group: "V Jet Acne", type: "alacarte", name: "Ala Carte", price: 288 },
  { id: "acne-vjet-pkg", category: "acne", group: "V Jet Acne", type: "package", name: "5 Sessions", price: 900 },
  { id: "acne-carbon-trial", category: "acne", group: "Carbon Laser", type: "trial", name: "First Trial", price: 98 },
  { id: "acne-carbon-ala", category: "acne", group: "Carbon Laser", type: "alacarte", name: "Ala Carte", price: 180 },
  { id: "acne-carbon-pkg", category: "acne", group: "Carbon Laser", type: "package", name: "5 Sessions", price: 490 },
  { id: "acne-carbon-peel", category: "acne", group: "Carbon Laser", type: "alacarte", name: "Add Tartaric Peel", detail: "Add-on", price: 38 },
  { id: "acne-combo-1-5", category: "acne", group: "Combination Packages", type: "package", name: "1 V Jet + 5 Carbon", price: 680 },
  { id: "acne-combo-5-5", category: "acne", group: "Combination Packages", type: "package", name: "5 V Jet + 5 Carbon", price: 1688 },

  /* ----------------------------------------------------- 6. Pigmentation Treatments */
  { id: "pigment-3in1-trial", category: "pigmentation", group: "3 in 1", type: "trial", name: "First Trial", price: 388 },
  { id: "pigment-3in1-ala", category: "pigmentation", group: "3 in 1", type: "alacarte", name: "Ala Carte", price: 688 },
  { id: "pigment-3in1-pkg", category: "pigmentation", group: "3 in 1", type: "package", name: "5 Sessions", price: 1588 },
  { id: "pigment-carbon-trial", category: "pigmentation", group: "Carbon Laser / 1064 Whitening", type: "trial", name: "First Trial", price: 98 },
  { id: "pigment-carbon-ala", category: "pigmentation", group: "Carbon Laser / 1064 Whitening", type: "alacarte", name: "Ala Carte", price: 280 },
  { id: "pigment-carbon-pkg", category: "pigmentation", group: "Carbon Laser / 1064 Whitening", type: "package", name: "5 Sessions", price: 490 },
  { id: "pigment-crystal-peel", category: "pigmentation", group: "Peel", type: "alacarte", name: "Crystal Peel", price: 388 },
  { id: "pigment-all-5", category: "pigmentation", group: "All Treatment Packages", type: "package", name: "5 Sessions", price: 1588 },
  { id: "pigment-all-10", category: "pigmentation", group: "All Treatment Packages", type: "package", name: "10 Sessions", price: 3000 },

  /* ---------------------------------------------------------------------- 7. Facials */
  { id: "facial-trial", category: "facials", group: "Pricing", type: "trial", name: "Trial", detail: "Any facial on this list", price: 98, keywords: ["mesowhite", "diamond peel", "aqua peel", "gua sha", "n1 face lift", "misty jet"] },
  { id: "facial-ala", category: "facials", group: "Pricing", type: "alacarte", name: "Ala Carte", detail: "Any facial on this list", price: 388, keywords: ["mesowhite", "diamond peel", "aqua peel", "gua sha", "n1 face lift", "misty jet"] },
  { id: "facial-pkg", category: "facials", group: "Pricing", type: "package", name: "Package of 5", detail: "Any facial on this list", price: 490, keywords: ["mesowhite", "diamond peel", "aqua peel", "gua sha", "n1 face lift", "misty jet"] },

  /* -------------------------------------------------------------- 8. V Jet Slimming */
  { id: "slim-trial-fatmelt", category: "slimming", group: "First Trial", type: "trial", name: "Fat Melt", detail: "1 bottle · 3ml", price: 158 },
  { id: "slim-trial-detox", category: "slimming", group: "First Trial", type: "trial", name: "Detox", detail: "1 session", price: 138 },
  { id: "slim-ala-fatmelt", category: "slimming", group: "Ala Carte", type: "alacarte", name: "Fat Melt", detail: "1 bottle · 3ml", price: 388 },
  { id: "slim-ala-detox", category: "slimming", group: "Ala Carte", type: "alacarte", name: "Detox", detail: "1 session", price: 280 },
  { id: "slim-pkg-5", category: "slimming", group: "Packages", type: "package", name: "Fat Melt", detail: "5 bottles + 5 Detox", price: 1380 },
  { id: "slim-pkg-10", category: "slimming", group: "Packages", type: "package", name: "Fat Melt", detail: "10 bottles + 3 Detox", price: 1680 },
  { id: "slim-pkg-20", category: "slimming", group: "Packages", type: "package", name: "Fat Melt", detail: "20 bottles + 7 Detox", price: 2880 },
  { id: "slim-pkg-30", category: "slimming", group: "Packages", type: "package", name: "Fat Melt", detail: "30 bottles + 12 Detox", price: 4200 },
  { id: "slim-pkg-detox", category: "slimming", group: "Packages", type: "package", name: "Detox", detail: "10 sessions", price: 1000 },

  /* --------------------------------------------------------------- 9. V Jet Wrinkle */
  { id: "wrinkle-under-eye", category: "wrinkle", group: "Eye Area", type: "alacarte", name: "Under Eye", detail: "1 dot", price: 88 },
  { id: "wrinkle-side-eye", category: "wrinkle", group: "Eye Area", type: "alacarte", name: "Side Eye", detail: "3 dots", price: 218 },
  { id: "wrinkle-full-eye", category: "wrinkle", group: "Eye Area", type: "alacarte", name: "Full Eye", detail: "5 dots", price: 388 },
  { id: "wrinkle-nose-relax", category: "wrinkle", group: "Nose and Face", type: "alacarte", name: "Nose Muscle Relax", price: 98, priceAlt: 218 },
  { id: "wrinkle-nose-line", category: "wrinkle", group: "Nose and Face", type: "alacarte", name: "Nose Line", price: 218 },
  { id: "wrinkle-frown-line", category: "wrinkle", group: "Nose and Face", type: "alacarte", name: "Frown Line", price: 218 },
  { id: "wrinkle-forehead-388", category: "wrinkle", group: "Nose and Face", type: "alacarte", name: "Forehead", price: 388 },
  { id: "wrinkle-forehead-500", category: "wrinkle", group: "Nose and Face", type: "alacarte", name: "Forehead", price: 500, note: "Second forehead option listed on our menu." },
  { id: "wrinkle-face-relax", category: "wrinkle", group: "Nose and Face", type: "alacarte", name: "Face Muscle Relax", price: 388 },
  { id: "wrinkle-lip-1", category: "wrinkle", group: "Lip Lifting", type: "alacarte", name: "Side Lip Lifting", detail: "1 dot", price: 88 },
  { id: "wrinkle-lip-3", category: "wrinkle", group: "Lip Lifting", type: "alacarte", name: "Side Lip Lifting", detail: "3 dots", price: 218 },
  { id: "wrinkle-body-relax", category: "wrinkle", group: "Body Muscle Relax", type: "alacarte", name: "Shoulder / Calf Muscle Relax", price: 500 },
  { id: "wrinkle-body-pkg", category: "wrinkle", group: "Packages", type: "package", name: "Shoulder / Calf Muscle Relax", detail: "3 sessions", price: 1000, note: "Valid for 1 year." },

  /* ---------------------------------------------------------- 10. Promotional Offers */
  { id: "promo-collagen-face", category: "promos", group: "Collagen Combo of 3", type: "promo", name: "Face Lifting", detail: "1ml Collagen", price: 108 },
  { id: "promo-collagen-eye", category: "promos", group: "Collagen Combo of 3", type: "promo", name: "Eye", detail: "1ml Collagen", price: 108 },
  { id: "promo-collagen-laugh", category: "promos", group: "Collagen Combo of 3", type: "promo", name: "Laugh Line", detail: "1ml Collagen", price: 108 },
  {
    id: "promo-fatmelt-20",
    category: "promos",
    group: "Fat Melt Promotion",
    type: "promo",
    name: "Fat Melt",
    detail: "20 bottles",
    price: 3000,
    includes: ["10 bottles free", "5 Detox free"],
  },
  { id: "promo-holiday", category: "promos", group: "Holiday Promo", type: "promo", name: "Cell Renewal + 1ml Collagen + Eye Wrinkle", price: 588 },

  /* --------------------------------------------------------- 11. Recovery Products */
  { id: "recovery-egf", category: "recovery-products", group: "Aftercare", type: "product", name: "EGF", price: 25 },
  { id: "recovery-cream", category: "recovery-products", group: "Aftercare", type: "product", name: "Cream", price: 10 },
  { id: "recovery-serum", category: "recovery-products", group: "Aftercare", type: "product", name: "Repair Serum", price: 58, note: "Buy 2, get 1 free." },

  /* ----------------------------------------------------- 12. Pigmentation Products */
  { id: "pigment-prod-peeling", category: "pigmentation-products", group: "Home Care", type: "product", name: "Peeling Cream", price: 98 },
  { id: "pigment-prod-whitening", category: "pigmentation-products", group: "Home Care", type: "product", name: "Whitening Cream", price: 38 },
  { id: "pigment-prod-egf", category: "pigmentation-products", group: "Home Care", type: "product", name: "EGF", price: 25 },
  { id: "pigment-prod-cream", category: "pigmentation-products", group: "Home Care", type: "product", name: "Cream", price: 10 },
  { id: "pigment-prod-serum", category: "pigmentation-products", group: "Home Care", type: "product", name: "Repair Serum", price: 58 },

  /* -------------------------------------------------- 13. Other Skincare Products */
  { id: "skincare-pimple", category: "skincare-products", group: "Retail", type: "product", name: "Pimple Cream", price: 38 },
  { id: "skincare-cleanser", category: "skincare-products", group: "Retail", type: "product", name: "Amino Acid Cleanser", price: 38 },
  { id: "skincare-essence", category: "skincare-products", group: "Retail", type: "product", name: "Water Element Essence", price: 68 },
  { id: "skincare-sunscreen", category: "skincare-products", group: "Retail", type: "product", name: "Sunscreen", price: 98 },
  { id: "skincare-pigment-set", category: "skincare-products", group: "Retail", type: "product", name: "Pigmentation Set", detail: "Whitening", price: 136 },
  { id: "skincare-whitening-mask", category: "skincare-products", group: "Retail", type: "product", name: "Whitening Mask", price: 68 },
  { id: "skincare-anti-itch", category: "skincare-products", group: "Retail", type: "product", name: "Allergy Anti Itch Cream", price: 138 },
  { id: "skincare-spray", category: "skincare-products", group: "Retail", type: "product", name: "Polypeptide Rejuvenating Spray", price: 68 },
];

export const CATEGORY_MAP = CATEGORIES.reduce((map, category) => {
  map[category.id] = category;
  return map;
}, {});

export const TYPE_MAP = TYPES.reduce((map, type) => {
  map[type.id] = type;
  return map;
}, {});

/** Every searchable string of an item, lower-cased and pre-joined. */
const buildSearchText = (item) => {
  const category = CATEGORY_MAP[item.category];
  return [
    item.name,
    item.detail,
    item.group,
    item.note,
    category ? category.name : "",
    TYPE_MAP[item.type] ? TYPE_MAP[item.type].label : "",
    ...(item.includes || []),
    ...(item.keywords || []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
};

export const MENU_ITEMS = ITEMS.map((item) => ({
  ...item,
  searchText: buildSearchText(item),
}));

export const SUGGESTED_SEARCHES = [
  "Nose",
  "Collagen",
  "Fat Melt",
  "Detox",
  "Acne",
  "Facial",
  "Wrinkle",
  "Whitening",
];

const TYPE_LABELS = TYPES.map((type) => type.label);

/** True for headings like "First Trial" that only restate an item's type. */
export const isTypeLabel = (value) => TYPE_LABELS.includes(value);

/** Items named after their type ("First Trial") read better as their group. */
export const displayName = (item) =>
  isTypeLabel(item.name) ? item.group : item.name;

export const formatPrice = (value) => `$${value.toLocaleString("en-SG")}`;

/** "$328", or "$98 / $218" for items our menu prices two ways. */
export const priceLabel = (item) =>
  item.priceAlt
    ? `${formatPrice(item.price)} / ${formatPrice(item.priceAlt)}`
    : formatPrice(item.price);

/** An item matches a band if either of its prices falls inside it. */
export const matchesBand = (item, band) =>
  [item.price, item.priceAlt]
    .filter((value) => typeof value === "number")
    .some((value) => value >= band.min && value <= band.max);

export const TOTAL_ITEMS = MENU_ITEMS.length;

export const PRICE_FROM = MENU_ITEMS.reduce(
  (lowest, item) => Math.min(lowest, item.price),
  Infinity
);

export const TRIAL_PRICE_FROM = MENU_ITEMS.reduce(
  (lowest, item) =>
    item.type === "trial" ? Math.min(lowest, item.price) : lowest,
  Infinity
);
