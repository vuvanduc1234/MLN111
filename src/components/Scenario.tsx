import { useEffect, useCallback, useState } from "react";
import "./Scenario.css";
import imgFactory from "../assets/story_factory_traditional.png";
import imgDirector from "../assets/story_director_google.png";
import imgDisaster from "../assets/story_factory_disaster.png";
import imgSolution from "../assets/story_solution.png";

/* ════════════════════════════════════════
   DATA
════════════════════════════════════════ */

const slides = [
  {
    id: 0,
    badge: "Chương 1 · Bối cảnh",
    badgeColor: "#3b82f6",
    title: "Nhà máy gạch men truyền thống",
    subtitle: "Cơ sở hạ tầng sản xuất công nghiệp nặng",
    image: imgFactory,
    accent: "rgba(59,130,246,0.85)",
    bullets: [
      "🏭  Lò nung 1.200°C hoạt động liên tục 24/7",
      "👷  200+ công nhân làm ca kíp xoay vòng chặt chẽ",
      "⏰  Bàn giao ca đúng phút — trễ 30 phút = hỏng cả mẻ gạch",
      "🔧  Máy ép thủy lực áp suất cao — rủi ro tai nạn cực lớn",
    ],
    callout: {
      icon: "⚙️",
      label: "CSHT",
      text: "Sản xuất công nghiệp nặng — đòi hỏi kỷ luật tuyệt đối",
    },
  },
  {
    id: 1,
    badge: "Chương 2 · Sự kiện",
    badgeColor: "#f59e0b",
    title: 'Giám đốc mới mang về "văn hóa Google"',
    subtitle: "Kiến trúc thượng tầng nhập khẩu — không điều chỉnh",
    image: imgDirector,
    accent: "rgba(245,158,11,0.85)",
    bullets: [
      '✈️  Ông Minh về nước sau 2 năm MBA tại Mỹ',
      '🎱  Lắp bàn bi-a, ghế lười giữa phân xưởng sản xuất',
      '👕  Bỏ đồng phục bảo hộ — "tự do mặc gì cũng được"',
      '🕓  Cho phép công nhân đến làm bất cứ lúc nào họ muốn',
    ],
    callout: {
      icon: "💡",
      label: "KTTT mới",
      text: '"Tự do sáng tạo" — copy nguyên xi từ Google, không điều chỉnh',
    },
  },
  {
    id: 2,
    badge: "Chương 3 · Hậu quả",
    badgeColor: "#ef4444",
    title: "Thảm họa xảy ra…",
    subtitle: "Khi KTTT và CSHT mâu thuẫn nhau",
    image: imgDisaster,
    accent: "rgba(239,68,68,0.85)",
    bullets: [
      "📅  Tuần 1: Công nhân đến muộn → lò nung mất kiểm soát → hỏng mẻ đầu tiên",
      "🤕  Tháng 1: Tai nạn lao động — 1 công nhân bị thương nặng",
      "📦  Sản phẩm lỗi tăng vọt: từ 2% → 34% — khách hàng hủy hợp đồng",
      "💸  Quý 1: Thua lỗ 4,2 tỷ đồng — đối tác chiến lược rút vốn",
    ],
    callout: {
      icon: "📉",
      label: "Kết quả",
      text: "Đình trệ · Tai nạn · Lỗi 34% · Thua lỗ 4,2 tỷ đồng",
    },
  },
];

const whyCards = [
  {
    num: "01",
    icon: "🏗️",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.25)",
    title: "CSHT quyết định KTTT",
    body: "Theo Mác–Lênin, Cơ sở hạ tầng (quan hệ sản xuất) quyết định nội dung và hình thức của Kiến trúc thượng tầng. Lò nung liên tục, ca kíp 8 tiếng, nguy cơ tai nạn cao → đòi hỏi văn hóa kỷ luật, an toàn lao động, chuẩn hóa quy trình.",
    tag: "Nguyên lý nền tảng",
  },
  {
    num: "02",
    icon: "⚡",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.3)",
    title: "KTTT Google sinh từ CSHT khác hoàn toàn",
    body: 'Google = lao động tri thức, sản phẩm vô hình, không có dây chuyền vật lý. Kỹ sư đến muộn 2 tiếng không làm máy chủ phát nổ. Nhưng công nhân ca lò nung trễ 30 phút = hỏng cả mẻ sản xuất. Hai CSHT → không thể dùng chung một KTTT.',
    tag: "So sánh CSHT",
  },
  {
    num: "03",
    icon: "💥",
    color: "#ef4444",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.28)",
    title: "Mâu thuẫn biện chứng dẫn đến sụp đổ",
    body: "Khi KTTT không phù hợp với CSHT, thay vì thúc đẩy nó sẽ kìm hãm và phá hoại lực lượng sản xuất. Đây là mâu thuẫn nội tại không thể giải quyết khi để hai yếu tố đối lập cùng tồn tại — hệ thống sụp đổ từ bên trong.",
    tag: "Quy luật biện chứng",
  },
];

const lessonSteps = [
  {
    step: "❌",
    stepColor: "#ef4444",
    stepBg: "rgba(239,68,68,0.1)",
    title: "Không thể copy văn hóa cơ học",
    body: 'KTTT không tồn tại độc lập — nó nảy sinh từ và phục vụ CSHT cụ thể. "Copy" văn hóa mà không thay đổi nền tảng sản xuất = làm ngược quy luật biện chứng. Kết quả tất yếu: thất bại.',
    tag: "Vi phạm quy luật",
    tagColor: "#ef4444",
  },
  {
    step: "🔄",
    stepColor: "#6366f1",
    stepBg: "rgba(99,102,241,0.1)",
    title: "Cải tạo CSHT trước — KTTT theo sau",
    body: "Con đường đúng: Đầu tư tự động hóa dây chuyền (robot, IoT, cảm biến) → giảm phụ thuộc con người vào thời điểm cứng → CSHT mới sinh ra không gian cho KTTT linh hoạt hơn.",
    tag: "Con đường biện chứng",
    tagColor: "#6366f1",
  },
  {
    step: "✅",
    stepColor: "#10b981",
    stepBg: "rgba(16,185,129,0.1)",
    title: "KTTT chỉ tích cực khi phù hợp CSHT",
    body: "Áp dụng có chọn lọc: Kỷ luật nghiêm ngặt ở dây chuyền nung — linh hoạt sáng tạo ở bộ phận R&D thiết kế mẫu. Mỗi bộ phận CSHT khác nhau cần KTTT tương ứng.",
    tag: "Giải pháp thực tiễn",
    tagColor: "#10b981",
  },
];

/* ════════════════════════════════════════
   STORY SLIDESHOW
════════════════════════════════════════ */
function StorySlideshow() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const total = slides.length;

  const go = useCallback(
    (dir: "next" | "prev") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent((c) =>
          dir === "next" ? (c + 1) % total : (c - 1 + total) % total
        );
        setAnimating(false);
      }, 350);
    },
    [animating, total]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go("next");
      if (e.key === "ArrowLeft") go("prev");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go]);

  const slide = slides[current];

  return (
    <div className="ss-root">
      {/* ── Image pane ── */}
      <div
        className={`ss-img-pane ${animating ? `ss-exit-${direction}` : ""}`}
        style={{ "--accent": slide.accent } as React.CSSProperties}
      >
        <img src={slide.image} alt={slide.title} className="ss-bg-img" />
        <div className="ss-img-overlay" />

        {/* Badge */}
        <div
          className="ss-badge"
          style={{ background: slide.badgeColor }}
        >
          {slide.badge}
        </div>

        {/* Slide counter */}
        <div className="ss-counter">
          {String(current + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(total).padStart(2, "0")}
        </div>

        {/* Dot nav */}
        <div className="ss-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`ss-dot ${i === current ? "is-active" : ""}`}
              onClick={() => {
                if (i !== current) go(i > current ? "next" : "prev");
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Content pane ── */}
      <div
        className={`ss-content-pane ${animating ? `ss-exit-${direction}` : ""}`}
      >
        <div className="ss-content-inner">
          <p className="ss-subtitle">{slide.subtitle}</p>
          <h3 className="ss-title">{slide.title}</h3>

          <ul className="ss-bullets">
            {slide.bullets.map((b, i) => (
              <li key={i} className="ss-bullet" style={{ animationDelay: `${i * 80}ms` }}>
                {b}
              </li>
            ))}
          </ul>

          <div className="ss-callout">
            <span className="ss-callout-icon">{slide.callout.icon}</span>
            <div>
              <span className="ss-callout-label">{slide.callout.label}</span>
              <p className="ss-callout-text">{slide.callout.text}</p>
            </div>
          </div>
        </div>

        {/* ── Navigation arrows ── */}
        <div className="ss-nav">
          <button
            type="button"
            className="ss-nav-btn"
            onClick={() => go("prev")}
            disabled={animating}
            aria-label="Slide trước"
          >
            ←
          </button>
          <span className="ss-nav-hint">← → phím mũi tên</span>
          <button
            type="button"
            className="ss-nav-btn"
            onClick={() => go("next")}
            disabled={animating}
            aria-label="Slide tiếp"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   ANALYSIS SECTION
════════════════════════════════════════ */
function AnalysisSection() {
  const [tab, setTab] = useState<"why" | "lesson">("why");

  return (
    <div className="an-root">
      {/* Transition banner */}
      <div className="an-banner">
        <div className="an-banner-line" />
        <div className="an-banner-pill">
          <span>🔍</span>
          <div>
            <p className="an-banner-sup">Vận dụng Triết học Mác–Lênin</p>
            <p className="an-banner-main">Phân tích biện chứng</p>
          </div>
        </div>
        <div className="an-banner-line" />
      </div>

      {/* Tab bar */}
      <div className="an-tabbar" role="tablist">
        <button
          role="tab"
          type="button"
          className={`an-tab ${tab === "why" ? "is-active" : ""}`}
          onClick={() => setTab("why")}
        >
          <span className="an-tab-icon">❓</span>
          <span>Tại sao thất bại?</span>
        </button>
        <button
          role="tab"
          type="button"
          className={`an-tab ${tab === "lesson" ? "is-active" : ""}`}
          onClick={() => setTab("lesson")}
        >
          <span className="an-tab-icon">📖</span>
          <span>Bài học quản trị</span>
        </button>
      </div>

      {/* ── WHY FAILED ── */}
      {tab === "why" && (
        <div className="an-panel" key="why">
          <div className="an-panel-header">
            <h3>Tại sao văn hóa "Tự do sáng tạo" thất bại?</h3>
            <p>Phân tích theo quy luật: <em>Cơ sở hạ tầng quyết định Kiến trúc thượng tầng</em></p>
          </div>

          <div className="an-cards">
            {whyCards.map((c) => (
              <div
                key={c.num}
                className="an-card"
                style={{
                  "--c-color": c.color,
                  "--c-bg": c.bg,
                  "--c-border": c.border,
                } as React.CSSProperties}
              >
                <div className="an-card-num">{c.num}</div>
                <div className="an-card-icon">{c.icon}</div>
                <div className="an-card-tag">{c.tag}</div>
                <h4 className="an-card-title">{c.title}</h4>
                <p className="an-card-body">{c.body}</p>
              </div>
            ))}
          </div>

          {/* Conclusion bar */}
          <div className="an-conclusion">
            <span className="an-conclusion-icon">⚖️</span>
            <div>
              <strong>Kết luận biện chứng:</strong>{" "}
              CSHT (dây chuyền gạch men) <mark>quyết định</mark> yêu cầu
              của KTTT (văn hóa lao động). KTTT không phù hợp sẽ{" "}
              <mark>kìm hãm</mark> thay vì thúc đẩy lực lượng sản xuất —
              đây là quy luật phổ quát mà Triết học Mác–Lênin đã chỉ rõ.
            </div>
          </div>
        </div>
      )}

      {/* ── LESSONS ── */}
      {tab === "lesson" && (
        <div className="an-panel" key="lesson">
          <div className="an-panel-header">
            <h3>Có thể "copy" văn hóa doanh nghiệp không?</h3>
            <p>Bài học quản trị từ góc nhìn Triết học Mác–Lênin</p>
          </div>

          <div className="an-steps">
            {lessonSteps.map((s, i) => (
              <div key={i} className="an-step">
                {i < lessonSteps.length - 1 && <div className="an-step-line" />}
                <div
                  className="an-step-icon"
                  style={{ background: s.stepBg, color: s.stepColor }}
                >
                  {s.step}
                </div>
                <div className="an-step-content">
                  <div
                    className="an-step-tag"
                    style={{ color: s.tagColor, borderColor: s.tagColor + "44", background: s.stepBg }}
                  >
                    {s.tag}
                  </div>
                  <h4 className="an-step-title">{s.title}</h4>
                  <p className="an-step-body">{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Solution image */}
          <div className="an-solution">
            <img
              src={imgSolution}
              alt="Giải pháp nhà máy thông minh"
              className="an-solution-img"
            />
            <div className="an-solution-overlay">
              <p className="an-solution-text">
                ✨ Cải tạo CSHT (tự động hóa, IoT) → xây dựng KTTT mới phù hợp → phát triển bền vững
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════
   ROOT COMPONENT
════════════════════════════════════════ */
function Scenario() {
  return (
    <section className="sc-root" aria-label="Tình huống phân tích">
      {/* Section title */}
      <div className="sc-header">
        <div className="sc-header-badge">📖 Câu chuyện thực tiễn</div>
        <h2 className="sc-header-title">
          Khi văn hóa Google gặp nhà máy gạch men
        </h2>
        <p className="sc-header-sub">
          Một bài học đắt giá về biện chứng giữa{" "}
          <strong>Cơ sở hạ tầng</strong> và{" "}
          <strong>Kiến trúc thượng tầng</strong> — nhìn từ thực tiễn doanh nghiệp Việt Nam.
        </p>
      </div>

      {/* Part 1 — Slideshow */}
      <StorySlideshow />

      {/* Part 2 — Analysis */}
      <AnalysisSection />
    </section>
  );
}

export default Scenario;
