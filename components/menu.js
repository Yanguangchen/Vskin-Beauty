"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./menu.module.css";
import {
  CATEGORIES,
  CATEGORY_MAP,
  MENU_ITEMS,
  PRICE_BANDS,
  SORT_OPTIONS,
  SUGGESTED_SEARCHES,
  TOTAL_ITEMS,
  TRIAL_PRICE_FROM,
  TYPES,
  TYPE_MAP,
  formatPrice,
  isTypeLabel,
  matchesBand,
  priceLabel,
} from "../lib/menuData";

const TAG_CLASS = {
  trial: styles.tagTrial,
  package: styles.tagPackage,
  promo: styles.tagPromo,
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** "fat melt" -> ["fat", "melt"]; longest first so highlighting prefers them. */
const toTokens = (query) =>
  query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);

const toggleValue = (list, value) =>
  list.includes(value)
    ? list.filter((entry) => entry !== value)
    : [...list, value];

/** Every token has to appear somewhere in the item, in any order. */
function filterItems({ tokens, types, categories, band }) {
  return MENU_ITEMS.filter((item) => {
    if (types.length && !types.includes(item.type)) return false;
    if (categories.length && !categories.includes(item.category)) return false;
    if (band && !matchesBand(item, band)) return false;
    return tokens.every((token) => item.searchText.includes(token));
  });
}

const countBy = (items, key) =>
  items.reduce((counts, item) => {
    counts[item[key]] = (counts[item[key]] || 0) + 1;
    return counts;
  }, {});

function Highlight({ text, tokens }) {
  if (!text) return null;
  if (!tokens.length) return text;

  const parts = String(text).split(
    new RegExp(`(${tokens.map(escapeRegExp).join("|")})`, "ig")
  );

  return parts.map((part, index) =>
    tokens.includes(part.toLowerCase()) ? (
      <mark key={index} className={styles.mark}>
        {part}
      </mark>
    ) : (
      <React.Fragment key={index}>{part}</React.Fragment>
    )
  );
}

/* Inside a "First Trial" block, or a Products card, the type tag only repeats
   what the heading above already says — so it is dropped there. */
const tagIsRedundant = (item) => {
  const label = TYPE_MAP[item.type].label;
  if (item.group === label || item.name === label) return true;
  if (item.type === "product") return true;
  return item.category === "promos" && item.type === "promo";
};

function MenuRow({ item, tokens, showCategory }) {
  const type = TYPE_MAP[item.type];
  const category = CATEGORY_MAP[item.category];
  const showTypeTag = type && (showCategory || !tagIsRedundant(item));
  const context = isTypeLabel(item.group)
    ? category.name
    : `${category.name} · ${item.group}`;

  return (
    <li className={styles.row}>
      <div className={styles.rowMain}>
        <p className={styles.rowName}>
          <Highlight text={item.name} tokens={tokens} />
        </p>

        {item.detail && (
          <p className={styles.rowDetail}>
            <Highlight text={item.detail} tokens={tokens} />
          </p>
        )}

        {item.includes && (
          <ul className={styles.rowIncludes}>
            {item.includes.map((entry) => (
              <li key={entry} className={styles.rowIncludesItem}>
                + {entry}
              </li>
            ))}
          </ul>
        )}

        {item.note && <p className={styles.rowNote}>{item.note}</p>}

        {(showCategory || showTypeTag) && (
          <div className={styles.rowTags}>
            {showCategory && (
              <span className={`${styles.tag} ${styles.tagCategory}`}>
                {context}
              </span>
            )}
            {showTypeTag && (
              <span className={`${styles.tag} ${TAG_CLASS[item.type] || ""}`}>
                {type.label}
              </span>
            )}
          </div>
        )}
      </div>

      <span className={styles.price}>{priceLabel(item)}</span>
    </li>
  );
}

function Menu() {
  const [query, setQuery] = useState("");
  const [activeTypes, setActiveTypes] = useState([]);
  const [activeCategories, setActiveCategories] = useState([]);
  const [activeBand, setActiveBand] = useState("");
  const [sort, setSort] = useState("menu");
  const [panelOpen, setPanelOpen] = useState(false);

  const tokens = useMemo(() => toTokens(query), [query]);
  const band = useMemo(
    () => PRICE_BANDS.find((entry) => entry.id === activeBand) || null,
    [activeBand]
  );

  const results = useMemo(
    () =>
      filterItems({
        tokens,
        types: activeTypes,
        categories: activeCategories,
        band,
      }),
    [tokens, activeTypes, activeCategories, band]
  );

  /* Facet counts ignore their own filter, so chips always show what a click
     would give you rather than dropping to zero once something is selected. */
  const typeCounts = useMemo(
    () =>
      countBy(
        filterItems({
          tokens,
          types: [],
          categories: activeCategories,
          band,
        }),
        "type"
      ),
    [tokens, activeCategories, band]
  );

  const categoryCounts = useMemo(
    () =>
      countBy(
        filterItems({ tokens, types: activeTypes, categories: [], band }),
        "category"
      ),
    [tokens, activeTypes, band]
  );

  const sortedResults = useMemo(() => {
    if (sort === "menu") return null;
    const direction = sort === "price-asc" ? 1 : -1;
    return [...results].sort((a, b) => (a.price - b.price) * direction);
  }, [results, sort]);

  const grouped = useMemo(() => {
    if (sort !== "menu") return [];

    const byCategory = new Map();
    results.forEach((item) => {
      if (!byCategory.has(item.category)) byCategory.set(item.category, new Map());
      const groups = byCategory.get(item.category);
      if (!groups.has(item.group)) groups.set(item.group, []);
      groups.get(item.group).push(item);
    });

    return CATEGORIES.filter((category) => byCategory.has(category.id)).map(
      (category) => ({
        category,
        groups: Array.from(byCategory.get(category.id), ([name, items]) => ({
          name,
          items,
        })),
      })
    );
  }, [results, sort]);

  const activeFilterCount =
    activeTypes.length + activeCategories.length + (activeBand ? 1 : 0);
  const hasAnyFilter = activeFilterCount > 0 || query.trim().length > 0;

  const activePills = [
    ...activeTypes.map((id) => ({
      key: `type-${id}`,
      label: TYPE_MAP[id].label,
      remove: () => setActiveTypes((current) => toggleValue(current, id)),
    })),
    ...activeCategories.map((id) => ({
      key: `category-${id}`,
      label: CATEGORY_MAP[id].name,
      remove: () => setActiveCategories((current) => toggleValue(current, id)),
    })),
    ...(band
      ? [{ key: "band", label: band.label, remove: () => setActiveBand("") }]
      : []),
  ];

  const resetAll = () => {
    setQuery("");
    setActiveTypes([]);
    setActiveCategories([]);
    setActiveBand("");
    setSort("menu");
  };

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        {/* ------------------------------------------------------- header */}
        <header className={styles.hero}>
          <p className={styles.heroKicker}>Price List</p>
          <h1 className={styles.heroTitle}>Our Full Menu</h1>
          <p className={styles.heroText}>
            Every treatment, package and product we offer — with transparent
            pricing. Search for what you need, or filter by category, first
            trial price, package or budget.
          </p>
          <ul className={styles.heroStats}>
            <li className={styles.heroStat}>{TOTAL_ITEMS} prices listed</li>
            <li className={styles.heroStat}>
              First trials from {formatPrice(TRIAL_PRICE_FROM)}
            </li>
            <li className={styles.heroStat}>Free consultation</li>
          </ul>
        </header>

        {/* ------------------------------------------------- consultation */}
        <div className={styles.consult}>
          <p className={styles.consultText}>
            Not sure where to start? Consultation is free for every treatment on
            this menu.
          </p>
          <Link href="/contact" className={styles.consultLink}>
            Book a free consultation
          </Link>
        </div>

        {/* ----------------------------------------------------- controls */}
        <section
          className={styles.controls}
          role="search"
          aria-label="Search and filter the menu"
        >
          <div className={styles.searchRow}>
            <div className={styles.searchField}>
              <svg
                className={styles.searchIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="21" y2="21" />
              </svg>

              <label htmlFor="menu-search" className={styles.visuallyHidden}>
                Search treatments, packages and products
              </label>
              <input
                id="menu-search"
                type="search"
                className={styles.searchInput}
                placeholder="Search treatments, e.g. nose, fat melt, acne…"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                autoComplete="off"
              />

              {query && (
                <button
                  type="button"
                  className={styles.clearButton}
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                >
                  &#10005;
                </button>
              )}
            </div>

            <button
              type="button"
              className={`${styles.filterToggle} ${
                panelOpen ? styles.filterToggleOpen : ""
              }`}
              onClick={() => setPanelOpen((open) => !open)}
              aria-expanded={panelOpen}
              aria-controls="menu-filter-panel"
            >
              Filters
              {activeFilterCount > 0 && (
                <span className={styles.filterCount}>{activeFilterCount}</span>
              )}
              <svg
                className={`${styles.chevron} ${
                  panelOpen ? styles.chevronOpen : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <polyline points="5 9 12 16 19 9" />
              </svg>
            </button>
          </div>

          {/* type chips — always visible */}
          <div
            className={styles.chipRow}
            role="group"
            aria-label="Filter by price type"
          >
            <button
              type="button"
              className={`${styles.chip} ${
                activeTypes.length === 0 ? styles.chipActive : ""
              }`}
              onClick={() => setActiveTypes([])}
              aria-pressed={activeTypes.length === 0}
            >
              Everything
            </button>
            {TYPES.map((type) => (
              <button
                key={type.id}
                type="button"
                className={`${styles.chip} ${
                  activeTypes.includes(type.id) ? styles.chipActive : ""
                }`}
                onClick={() =>
                  setActiveTypes((current) => toggleValue(current, type.id))
                }
                aria-pressed={activeTypes.includes(type.id)}
                title={type.hint}
              >
                {type.label}
                <span className={styles.chipCount}>
                  {typeCounts[type.id] || 0}
                </span>
              </button>
            ))}
          </div>

          {/* collapsible panel */}
          <div
            id="menu-filter-panel"
            className={`${styles.panel} ${panelOpen ? styles.panelOpen : ""}`}
            aria-hidden={!panelOpen}
          >
            <div className={styles.panelInner}>
              <div className={styles.panelGroup}>
                <p className={styles.panelLabel} id="menu-category-label">
                  Category
                </p>
                <div className={styles.chipRow} role="group" aria-labelledby="menu-category-label">
                  <button
                    type="button"
                    className={`${styles.chip} ${
                      activeCategories.length === 0 ? styles.chipActive : ""
                    }`}
                    onClick={() => setActiveCategories([])}
                    aria-pressed={activeCategories.length === 0}
                    tabIndex={panelOpen ? 0 : -1}
                  >
                    All categories
                  </button>
                  {CATEGORIES.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      className={`${styles.chip} ${
                        activeCategories.includes(category.id)
                          ? styles.chipActive
                          : ""
                      }`}
                      onClick={() =>
                        setActiveCategories((current) =>
                          toggleValue(current, category.id)
                        )
                      }
                      aria-pressed={activeCategories.includes(category.id)}
                      tabIndex={panelOpen ? 0 : -1}
                    >
                      {category.name}
                      <span className={styles.chipCount}>
                        {categoryCounts[category.id] || 0}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.panelGroup}>
                <p className={styles.panelLabel} id="menu-price-label">
                  Price
                </p>
                <div className={styles.chipRow} role="group" aria-labelledby="menu-price-label">
                  <button
                    type="button"
                    className={`${styles.chip} ${
                      activeBand === "" ? styles.chipActive : ""
                    }`}
                    onClick={() => setActiveBand("")}
                    aria-pressed={activeBand === ""}
                    tabIndex={panelOpen ? 0 : -1}
                  >
                    Any price
                  </button>
                  {PRICE_BANDS.map((entry) => (
                    <button
                      key={entry.id}
                      type="button"
                      className={`${styles.chip} ${
                        activeBand === entry.id ? styles.chipActive : ""
                      }`}
                      onClick={() =>
                        setActiveBand(activeBand === entry.id ? "" : entry.id)
                      }
                      aria-pressed={activeBand === entry.id}
                      tabIndex={panelOpen ? 0 : -1}
                    >
                      {entry.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.panelGroup}>
                <p className={styles.panelLabel} id="menu-sort-label">
                  Sort
                </p>
                <div className={styles.sortRow}>
                  <label
                    htmlFor="menu-sort"
                    className={styles.visuallyHidden}
                  >
                    Sort the menu
                  </label>
                  <select
                    id="menu-sort"
                    className={styles.sortSelect}
                    value={sort}
                    onChange={(event) => setSort(event.target.value)}
                    tabIndex={panelOpen ? 0 : -1}
                  >
                    {SORT_OPTIONS.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* summary + active filters */}
          <div className={styles.summary}>
            <span aria-live="polite">
              <span className={styles.summaryCount}>{results.length}</span> of{" "}
              {TOTAL_ITEMS} prices
            </span>

            {activePills.map((pill) => (
              <button
                key={pill.key}
                type="button"
                className={styles.pill}
                onClick={pill.remove}
                aria-label={`Remove filter ${pill.label}`}
              >
                {pill.label}
                <span className={styles.pillX} aria-hidden="true">
                  &#10005;
                </span>
              </button>
            ))}

            {hasAnyFilter && (
              <button type="button" className={styles.clearAll} onClick={resetAll}>
                Clear all
              </button>
            )}
          </div>
        </section>

        {/* suggestions when nothing is typed yet */}
        {!query && (
          <div className={styles.chipRow} style={{ marginBottom: "1.5rem" }}>
            <span className={styles.panelLabel} style={{ alignSelf: "center" }}>
              Popular
            </span>
            {SUGGESTED_SEARCHES.map((term) => (
              <button
                key={term}
                type="button"
                className={styles.chip}
                onClick={() => setQuery(term)}
              >
                {term}
              </button>
            ))}
          </div>
        )}

        {/* ------------------------------------------------------ results */}
        {results.length === 0 ? (
          <div className={styles.empty}>
            <p className={styles.emptyTitle}>No matches on the menu</p>
            <p className={styles.emptyText}>
              We could not find anything for those filters. Try a shorter search
              term, or clear the filters to browse the full menu — and if you
              are after something you cannot see here, just ask us.
            </p>
            <button type="button" className={styles.ctaButton} onClick={resetAll}>
              Show the full menu
            </button>
          </div>
        ) : sortedResults ? (
          <div className={styles.results}>
            <div className={`${styles.card} ${styles.flatCard}`}>
              <ul className={styles.rows}>
                {sortedResults.map((item) => (
                  <MenuRow
                    key={item.id}
                    item={item}
                    tokens={tokens}
                    showCategory
                  />
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className={styles.results}>
            {grouped.map(({ category, groups }) => (
              <section key={category.id} className={styles.card}>
                <header className={styles.cardHeader}>
                  <h2 className={styles.cardTitle}>{category.name}</h2>
                  {category.blurb && (
                    <p className={styles.cardBlurb}>{category.blurb}</p>
                  )}

                  {category.includes && (
                    <>
                      <span className={styles.cardMeta}>
                        {category.includesLabel}
                      </span>
                      <ul className={styles.includes}>
                        {category.includes.map((entry) => (
                          <li key={entry} className={styles.includesItem}>
                            {entry}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {category.note && (
                    <p className={styles.cardNote}>{category.note}</p>
                  )}
                </header>

                <div className={styles.cardBody}>
                  {groups.map((group) => (
                    <div key={group.name} className={styles.group}>
                      <h3 className={styles.groupTitle}>{group.name}</h3>
                      <ul className={styles.rows}>
                        {group.items.map((item) => (
                          <MenuRow key={item.id} item={item} tokens={tokens} />
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* ---------------------------------------------------------- CTA */}
        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Ready to book, or want a recommendation for your skin?
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Contact Us
          </Link>
        </div>

        <p className={styles.footnote}>
          All prices are in Singapore dollars and are subject to change. Package
          sessions are for the named treatment unless stated otherwise. Your
          therapist will confirm the right treatment plan for you at your free
          consultation.
        </p>
      </div>
    </div>
  );
}

export default Menu;
