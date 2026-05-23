import { useState } from "react";
import {
  lesson2Accordion,
  lesson2Concepts,
  lesson2Content,
  lesson2Flow,
  lesson2HeroPanels,
  lesson2Highlights,
  lesson2Outline,
  lesson2Rules,
} from "./lesson2Data";
import {
  ConceptGrid,
  InsightAccordion,
  Lesson2Hero,
  RuleTabs,
  SectionHeader,
} from "./lesson2Components";
import "./lesson2.css";

export default function Lesson2() {
  const [activeRuleId, setActiveRuleId] = useState(lesson2Rules[0].id);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className="lesson2-shell" id="phan-2">
      <Lesson2Hero
        header={lesson2Content.header}
        outlineTitle={lesson2HeroPanels.outlineTitle}
        outline={lesson2Outline}
        flowTitle={lesson2HeroPanels.flowTitle}
        flow={lesson2Flow}
        highlights={lesson2Highlights}
      />

      <section className="lesson2-section" aria-labelledby="lesson2-concepts">
        <SectionHeader
          id="lesson2-concepts"
          title={lesson2Content.sections.concepts.title}
          lead={lesson2Content.sections.concepts.lead}
        />
        <ConceptGrid cards={lesson2Concepts} />
      </section>

      <section className="lesson2-section" aria-labelledby="lesson2-rules">
        <SectionHeader
          id="lesson2-rules"
          title={lesson2Content.sections.rules.title}
          lead={lesson2Content.sections.rules.lead}
        />
        <RuleTabs
          rules={lesson2Rules}
          activeRuleId={activeRuleId}
          onChange={setActiveRuleId}
        />
      </section>

      <section
        className="lesson2-section"
        aria-labelledby="lesson2-application"
      >
        <SectionHeader
          id="lesson2-application"
          title={lesson2Content.sections.application.title}
          lead={lesson2Content.sections.application.lead}
        />
        <InsightAccordion
          items={lesson2Accordion}
          openIndex={openIndex}
          onToggle={setOpenIndex}
        />
      </section>
    </main>
  );
}
