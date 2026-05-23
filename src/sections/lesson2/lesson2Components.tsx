import type {
  AccordionItem,
  ConceptCard,
  HighlightCard,
  Lesson2Header,
  Rule,
} from "./lesson2Data";

type Lesson2HeroProps = {
  header: Lesson2Header;
  outlineTitle: string;
  outline: string[];
  flowTitle: string;
  flow: string[];
  highlights: HighlightCard[];
};

type SectionHeaderProps = {
  id: string;
  title: string;
  lead: string;
};

type ConceptGridProps = {
  cards: ConceptCard[];
};

type RuleTabsProps = {
  rules: Rule[];
  activeRuleId: string;
  onChange: (id: string) => void;
};

type InsightAccordionProps = {
  items: AccordionItem[];
  openIndex: number;
  onToggle: (index: number) => void;
};

export function Lesson2Hero({
  header,
  outlineTitle,
  outline,
  flowTitle,
  flow,
  highlights,
}: Lesson2HeroProps) {
  return (
    <header className="lesson2-section lesson2-hero">
      <div className="lesson2-hero-top">
        <div className="lesson2-hero-main">
          <p className="lesson2-eyebrow">{header.eyebrow}</p>
          <h1 className="lesson2-title">{header.title}</h1>
          <p className="lesson2-subtitle">{header.subtitle}</p>
          <p className="lesson2-lead">{header.lead}</p>
        </div>
        <div className="lesson2-hero-rail">
          <div className="lesson2-hero-card">
            <h3 className="lesson2-card-title">{outlineTitle}</h3>
            <ol className="lesson2-outline">
              {outline.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
          <div className="lesson2-hero-card">
            <h3 className="lesson2-card-title">{flowTitle}</h3>
            <ol className="lesson2-flow">
              {flow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="lesson2-highlight-grid" aria-label="lesson2-highlights">
        {highlights.map((item) => (
          <article className="lesson2-highlight-card" key={item.title}>
            <p className="lesson2-highlight-title">{item.title}</p>
            <p className="lesson2-highlight-text">{item.text}</p>
          </article>
        ))}
      </div>
    </header>
  );
}

export function SectionHeader({ id, title, lead }: SectionHeaderProps) {
  return (
    <div className="lesson2-section-head">
      <h2 id={id}>{title}</h2>
      <p>{lead}</p>
    </div>
  );
}

export function ConceptGrid({ cards }: ConceptGridProps) {
  return (
    <div className="lesson2-concept-grid">
      {cards.map((card) => (
        <article className="lesson2-card" key={card.title}>
          <h3>{card.title}</h3>
          <p className="lesson2-intro">{card.intro}</p>
          <ul className="lesson2-list">
            {card.points.map((point) => (
              <li key={point.label}>
                <strong>{point.label}</strong>
                {point.text ? `: ${point.text}` : ""}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export function RuleTabs({ rules, activeRuleId, onChange }: RuleTabsProps) {
  const activeRule = rules.find((rule) => rule.id === activeRuleId) ?? rules[0];

  return (
    <div className="lesson2-tabs">
      <div
        className="lesson2-tab-list"
        role="tablist"
        aria-label="lesson2-rules"
      >
        {rules.map((rule) => {
          const isActive = rule.id === activeRuleId;
          return (
            <button
              key={rule.id}
              id={`lesson2-tab-${rule.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`lesson2-panel-${rule.id}`}
              className="lesson2-tab-button"
              onClick={() => onChange(rule.id)}
            >
              <span className="lesson2-tab-title">{rule.title}</span>
            </button>
          );
        })}
      </div>
      <div
        className="lesson2-tab-panel"
        role="tabpanel"
        id={`lesson2-panel-${activeRule.id}`}
        aria-labelledby={`lesson2-tab-${activeRule.id}`}
      >
        <article className="lesson2-card lesson2-panel" key={activeRule.id}>
          <h3 className="lesson2-panel-title">{activeRule.title}</h3>
          <ul className="lesson2-list">
            {activeRule.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}

export function InsightAccordion({
  items,
  openIndex,
  onToggle,
}: InsightAccordionProps) {
  return (
    <div className="lesson2-accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            className={`lesson2-accordion-item ${isOpen ? "is-open" : ""}`}
            key={item.title}
          >
            <button
              type="button"
              className="lesson2-accordion-trigger"
              aria-expanded={isOpen}
              aria-controls={`lesson2-accordion-panel-${index}`}
              id={`lesson2-accordion-trigger-${index}`}
              onClick={() => onToggle(isOpen ? -1 : index)}
            >
              <span>{item.title}</span>
              <span className="lesson2-accordion-icon">
                {isOpen ? "-" : "+"}
              </span>
            </button>
            <div
              className="lesson2-accordion-panel"
              role="region"
              id={`lesson2-accordion-panel-${index}`}
              aria-labelledby={`lesson2-accordion-trigger-${index}`}
              aria-hidden={!isOpen}
            >
              {item.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
