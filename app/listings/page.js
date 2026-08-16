import Menu from "../../components/menu";
import { CATEGORIES, MENU_ITEMS, PRICE_FROM } from "../../lib/menuData";

export const metadata = {
  title: "Full Menu & Price List | Vskin Beauty & Slimming",
  description:
    "The complete VSkin Beauty & Slimming menu — V Jet collagen, cell renewal, lifting, acne, pigmentation, facials, slimming and wrinkle treatments, plus skincare products. Search and filter by category, first trial price or package.",
  alternates: {
    canonical: "https://www.vskinbeauty.shop/listings",
  },
};

export default function ListingsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "VSkin Beauty & Slimming — Treatment and Product Menu",
    url: "https://www.vskinbeauty.shop/listings",
    numberOfItems: MENU_ITEMS.length,
    lowPrice: PRICE_FROM,
    priceCurrency: "SGD",
    itemListElement: CATEGORIES.map((category, index) => ({
      "@type": "OfferCatalog",
      position: index + 1,
      name: category.name,
      itemListElement: MENU_ITEMS.filter(
        (item) => item.category === category.id
      ).map((item) => ({
        "@type": "Offer",
        name: [item.name, item.detail].filter(Boolean).join(" — "),
        price: item.price,
        priceCurrency: "SGD",
        availability: "https://schema.org/InStock",
      })),
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Menu />
    </main>
  );
}
