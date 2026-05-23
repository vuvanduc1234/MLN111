export type Lesson2Header = {
  eyebrow: string;
  title: string;
  subtitle: string;
  lead: string;
};

export type Lesson2Section = {
  title: string;
  lead: string;
};

export type Lesson2Content = {
  header: Lesson2Header;
  sections: {
    concepts: Lesson2Section;
    rules: Lesson2Section;
    application: Lesson2Section;
  };
};

export type ConceptPoint = {
  label: string;
  text?: string;
};

export type ConceptCard = {
  title: string;
  intro: string;
  points: ConceptPoint[];
};

export type Rule = {
  id: string;
  title: string;
  points: string[];
};

export type AccordionItem = {
  title: string;
  paragraphs: string[];
};

export type HighlightCard = {
  title: string;
  text: string;
};

export const lesson2Content: Lesson2Content = {
  header: {
    eyebrow:
      "Ch\u01b0\u01a1ng 3 \u2022 Ch\u1ee7 ngh\u0129a duy v\u1eadt l\u1ecbch s\u1eed",
    title:
      "2. Bi\u1ec7n ch\u1ee9ng gi\u1eefa l\u1ef1c l\u01b0\u1ee3ng s\u1ea3n xu\u1ea5t v\u00e0 quan h\u1ec7 s\u1ea3n xu\u1ea5t",
    subtitle:
      "Quy lu\u1eadt c\u01a1 b\u1ea3n nh\u1ea5t c\u1ee7a s\u1ef1 v\u1eadn \u0111\u1ed9ng x\u00e3 h\u1ed9i",
    lead: "LLSX l\u00e0 n\u1ed9i dung c\u1ee7a ph\u01b0\u01a1ng th\u1ee9c s\u1ea3n xu\u1ea5t (v\u00f4 c\u00f9ng n\u0103ng \u0111\u1ed9ng, lu\u00f4n bi\u1ebfn \u0111\u1ed5i), QHSX l\u00e0 h\u00ecnh th\u1ee9c x\u00e3 h\u1ed9i c\u1ee7a qu\u00e1 tr\u00ecnh s\u1ea3n xu\u1ea5t (t\u01b0\u01a1ng \u0111\u1ed1i \u1ed5n \u0111\u1ecbnh).",
  },
  sections: {
    concepts: {
      title: "Ph\u1ea7n I - C\u00e1c kh\u00e1i ni\u1ec7m c\u01a1 b\u1ea3n",
      lead: "L\u00e0m r\u00f5 n\u1ed9i h\u00e0m c\u1ee7a LLSX v\u00e0 QHSX \u0111\u1ec3 nh\u1eadn di\u1ec7n \u0111\u00fang n\u1ed9i dung v\u00e0 h\u00ecnh th\u1ee9c c\u1ee7a ph\u01b0\u01a1ng th\u1ee9c s\u1ea3n xu\u1ea5t.",
    },
    rules: {
      title:
        "Ph\u1ea7n II - Quy lu\u1eadt bi\u1ec7n ch\u1ee9ng gi\u1eefa LLSX v\u00e0 QHSX",
      lead: "Quy lu\u1eadt c\u01a1 b\u1ea3n nh\u1ea5t c\u1ee7a s\u1ef1 v\u1eadn \u0111\u1ed9ng x\u00e3 h\u1ed9i.",
    },
    application: {
      title:
        "Ph\u1ea7n III - \u00dd ngh\u0129a ph\u01b0\u01a1ng ph\u00e1p lu\u1eadn & v\u1eadn d\u1ee5ng \u1edf Vi\u1ec7t Nam",
      lead: "T\u1eeb quy lu\u1eadt r\u00fat ra \u0111\u1ecbnh h\u01b0\u1edbng ph\u00e1t tri\u1ec3n kinh t\u1ebf v\u00e0 c\u00e1ch v\u1eadn d\u1ee5ng v\u00e0o th\u1ef1c ti\u1ec5n Vi\u1ec7t Nam.",
    },
  },
};

export const lesson2Concepts: ConceptCard[] = [
  {
    title: "L\u1ef1c l\u01b0\u1ee3ng s\u1ea3n xu\u1ea5t (LLSX)",
    intro:
      "Th\u1ec3 hi\u1ec7n m\u1ed1i quan h\u1ec7 gi\u1eefa con ng\u01b0\u1eddi v\u1edbi t\u1ef1 nhi\u00ean trong qu\u00e1 tr\u00ecnh s\u1ea3n xu\u1ea5t.",
    points: [
      {
        label: "Ng\u01b0\u1eddi lao \u0111\u1ed9ng",
        text: "Bao g\u1ed3m n\u0103ng l\u1ef1c, k\u1ef9 n\u0103ng, tri th\u1ee9c (\u0110\u00e2y l\u00e0 y\u1ebfu t\u1ed1 quy\u1ebft \u0111\u1ecbnh h\u00e0ng \u0111\u1ea7u).",
      },
      {
        label: "T\u01b0 li\u1ec7u s\u1ea3n xu\u1ea5t",
        text: "Bao g\u1ed3m \u0110\u1ed1i t\u01b0\u1ee3ng lao \u0111\u1ed9ng v\u00e0 C\u00f4ng c\u1ee5 lao \u0111\u1ed9ng (Trong \u0111\u00f3, c\u00f4ng c\u1ee5 lao \u0111\u1ed9ng l\u00e0 y\u1ebfu t\u1ed1 \u0111\u1ed9ng nh\u1ea5t, c\u00e1ch m\u1ea1ng nh\u1ea5t, l\u00e0 th\u01b0\u1edbc \u0111o tr\u00ecnh \u0111\u1ed9 chinh ph\u1ee5c t\u1ef1 nhi\u00ean).",
      },
    ],
  },
  {
    title: "Quan h\u1ec7 s\u1ea3n xu\u1ea5t (QHSX)",
    intro:
      "L\u00e0 quan h\u1ec7 kinh t\u1ebf kh\u00e1ch quan gi\u1eefa ng\u01b0\u1eddi v\u1edbi ng\u01b0\u1eddi trong qu\u00e1 tr\u00ecnh s\u1ea3n xu\u1ea5t v\u1eadt ch\u1ea5t.",
    points: [
      {
        label:
          "Quan h\u1ec7 s\u1edf h\u1eefu \u0111\u1ed1i v\u1edbi t\u01b0 li\u1ec7u s\u1ea3n xu\u1ea5t",
        text: "Gi\u1eef vai tr\u00f2 quy\u1ebft \u0111\u1ecbnh b\u1ea3n ch\u1ea5t c\u1ee7a QHSX.",
      },
      {
        label:
          "Quan h\u1ec7 trong t\u1ed5 ch\u1ee9c v\u00e0 qu\u1ea3n l\u00fd s\u1ea3n xu\u1ea5t",
      },
      {
        label:
          "Quan h\u1ec7 trong ph\u00e2n ph\u1ed1i s\u1ea3n ph\u1ea9m lao \u0111\u1ed9ng",
      },
    ],
  },
];

export const lesson2Rules: Rule[] = [
  {
    id: "llsx-quyet-dinh",
    title:
      "Vai tr\u00f2 quy\u1ebft \u0111\u1ecbnh c\u1ee7a LLSX \u0111\u1ed1i v\u1edbi QHSX",
    points: [
      "LLSX l\u00e0 n\u1ed9i dung c\u1ee7a ph\u01b0\u01a1ng th\u1ee9c s\u1ea3n xu\u1ea5t (v\u00f4 c\u00f9ng n\u0103ng \u0111\u1ed9ng, lu\u00f4n bi\u1ebfn \u0111\u1ed5i), QHSX l\u00e0 h\u00ecnh th\u1ee9c x\u00e3 h\u1ed9i c\u1ee7a qu\u00e1 tr\u00ecnh s\u1ea3n xu\u1ea5t (t\u01b0\u01a1ng \u0111\u1ed1i \u1ed5n \u0111\u1ecbnh).",
      "LLSX ph\u00e1t tri\u1ec3n \u0111\u1ebfn \u0111\u00e2u th\u00ec QHSX ph\u1ea3i bi\u1ebfn \u0111\u1ed5i theo \u0111\u1ebfn \u0111\u00f3 \u0111\u1ec3 ph\u00f9 h\u1ee3p.",
      'Khi LLSX ph\u00e1t tri\u1ec3n v\u01b0\u1ee3t l\u00ean, QHSX c\u0169 tr\u1edf n\u00ean l\u1ea1c h\u1eadu v\u00e0 tr\u1edf th\u00e0nh "xi\u1ec1ng x\u00edch" k\u00ecm h\u00e3m LLSX. L\u00fac n\u00e0y, t\u1ea5t y\u1ebfu n\u1ea3y sinh m\u00e2u thu\u1eabn gay g\u1eaft, \u0111\u00f2i h\u1ecfi ph\u1ea3i x\u00f3a b\u1ecf QHSX c\u0169, thi\u1ebft l\u1eadp QHSX m\u1edbi (th\u01b0\u1eddng th\u00f4ng qua c\u00e1c cu\u1ed9c c\u00e1ch m\u1ea1ng x\u00e3 h\u1ed9i) \u0111\u1ec3 m\u1edf \u0111\u01b0\u1eddng cho LLSX ti\u1ebfp t\u1ee5c ph\u00e1t tri\u1ec3n.',
    ],
  },
  {
    id: "qhsx-tac-dong",
    title:
      "S\u1ef1 t\u00e1c \u0111\u1ed9ng tr\u1edf l\u1ea1i c\u1ee7a QHSX \u0111\u1ed1i v\u1edbi LLSX",
    points: [
      'N\u1ebfu QHSX "ph\u00f9 h\u1ee3p" v\u1edbi tr\u00ecnh \u0111\u1ed9 ph\u00e1t tri\u1ec3n c\u1ee7a LLSX: N\u00f3 s\u1ebd t\u1ea1o ra \u0111\u1ecba b\u00e0n r\u1ed9ng l\u1edbn, l\u00e0m \u0111\u1ed9ng l\u1ef1c th\u00fac \u0111\u1ea9y LLSX ph\u00e1t tri\u1ec3n m\u1ea1nh m\u1ebd.',
      'N\u1ebfu QHSX "kh\u00f4ng ph\u00f9 h\u1ee3p" (b\u1ecb l\u1ea1c h\u1eadu ho\u1eb7c v\u01b0\u1ee3t tr\u01b0\u1edbc qu\u00e1 xa m\u1ed9t c\u00e1ch duy \u00fd ch\u00ed): N\u00f3 s\u1ebd k\u00ecm h\u00e3m, c\u1ea3n tr\u1edf s\u1ef1 ph\u00e1t tri\u1ec3n c\u1ee7a LLSX.',
    ],
  },
];

export const lesson2Accordion: AccordionItem[] = [
  {
    title: "\u00dd ngh\u0129a ph\u01b0\u01a1ng ph\u00e1p lu\u1eadn",
    paragraphs: [
      "Mu\u1ed1n ph\u00e1t tri\u1ec3n kinh t\u1ebf, tr\u01b0\u1edbc h\u1ebft ph\u1ea3i ph\u00e1t tri\u1ec3n LLSX (ch\u00fa tr\u1ecdng \u0111\u00e0o t\u1ea1o con ng\u01b0\u1eddi v\u00e0 c\u1ea3i ti\u1ebfn c\u00f4ng ngh\u1ec7).",
      "Tuy\u1ec7t \u0111\u1ed1i kh\u00f4ng \u0111\u01b0\u1ee3c ch\u1ee7 quan, n\u00f3ng v\u1ed9i \u00e1p \u0111\u1eb7t m\u1ed9t QHSX qu\u00e1 cao khi LLSX c\u00f2n th\u1ea5p k\u00e9m.",
    ],
  },
  {
    title: "V\u1eadn d\u1ee5ng t\u1ea1i Vi\u1ec7t Nam",
    paragraphs: [
      "\u0110\u1ea3ng v\u00e0 Nh\u00e0 n\u01b0\u1edbc ta \u0111ang v\u1eadn d\u1ee5ng quy lu\u1eadt n\u00e0y b\u1eb1ng c\u00e1ch ph\u00e1t tri\u1ec3n n\u1ec1n kinh t\u1ebf th\u1ecb tr\u01b0\u1eddng \u0111\u1ecbnh h\u01b0\u1edbng XHCN v\u1edbi nhi\u1ec1u th\u00e0nh ph\u1ea7n kinh t\u1ebf, \u0111a d\u1ea1ng h\u00f3a c\u00e1c h\u00ecnh th\u1ee9c s\u1edf h\u1eefu (\u0111\u1ec3 ho\u00e0n thi\u1ec7n QHSX).",
      "\u0110\u1ed3ng th\u1eddi, \u0111\u1ea9y m\u1ea1nh c\u00f4ng nghi\u1ec7p h\u00f3a, hi\u1ec7n \u0111\u1ea1i h\u00f3a, ph\u00e1t tri\u1ec3n kinh t\u1ebf s\u1ed1 v\u00e0 ch\u00fa tr\u1ecdng \u0111\u00e0o t\u1ea1o ngu\u1ed3n nh\u00e2n l\u1ef1c ch\u1ea5t l\u01b0\u1ee3ng cao (\u0111\u1ec3 ph\u00e1t tri\u1ec3n LLSX).",
    ],
  },
];

export const lesson2Highlights: HighlightCard[] = [
  {
    title: lesson2Rules[0].title,
    text: lesson2Rules[0].points[0],
  },
  {
    title: lesson2Rules[1].title,
    text: lesson2Rules[1].points[0],
  },
  {
    title: lesson2Accordion[1].title,
    text: lesson2Accordion[1].paragraphs[0],
  },
];

export const lesson2Outline = [
  lesson2Content.sections.concepts.title,
  lesson2Content.sections.rules.title,
  lesson2Content.sections.application.title,
];

export const lesson2Flow = [
  lesson2Rules[0].points[0],
  lesson2Rules[0].points[1],
  lesson2Rules[0].points[2],
];

export const lesson2HeroPanels = {
  outlineTitle: "Ph\u1ea7n n\u1ed9i dung",
  flowTitle: "Tr\u1ee5c bi\u1ec7n ch\u1ee9ng",
};
