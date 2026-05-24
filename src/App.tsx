import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Practice from "./components/Practice";

type Question = {
  id: number;
  topic: string;
  title: string;
  options: [string, string, string, string];
  correct: "A" | "B" | "C" | "D";
};

type Cell = {
  id: number;
  kind: "lucky" | "question";
  question?: Question;
};

const TOTAL_CELLS = 30;
const LUCKY_COUNT = 6;
const optionLabels: Array<Question["correct"]> = ["A", "B", "C", "D"];

const questions: Question[] = [
  {
    id: 1,
    topic: "Cơ sở hạ tầng",
    title: "Cơ sở hạ tầng là gì?",
    options: [
      "Toàn bộ tư tưởng xã hội",
      "Toàn bộ quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội",
      "Hệ thống pháp luật và nhà nước",
      "Nền văn hóa xã hội",
    ],
    correct: "B",
  },
  {
    id: 2,
    topic: "Kiến trúc thượng tầng",
    title: "Kiến trúc thượng tầng bao gồm:",
    options: [
      "Máy móc sản xuất",
      "Quan hệ sản xuất",
      "Ý thức xã hội và các thiết chế chính trị – pháp luật",
      "Tài nguyên thiên nhiên",
    ],
    correct: "C",
  },
  {
    id: 3,
    topic: "Kiến trúc thượng tầng",
    title:
      "Theo triết học Mác – Lênin, yếu tố nào quyết định kiến trúc thượng tầng?",
    options: ["Tôn giáo", "Văn hóa", "Cơ sở hạ tầng", "Giáo dục"],
    correct: "C",
  },
  {
    id: 4,
    topic: "Cơ sở hạ tầng",
    title: "Khi kiến trúc thượng tầng phù hợp với cơ sở hạ tầng thì:",
    options: [
      "Kìm hãm xã hội phát triển",
      "Thúc đẩy kinh tế phát triển",
      "Làm xã hội trì trệ",
      "Không ảnh hưởng gì",
    ],
    correct: "B",
  },
  {
    id: 5,
    topic: "Cơ sở hạ tầng",
    title: "Kiến trúc thượng tầng không phù hợp với cơ sở hạ tầng sẽ:",
    options: [
      "Thúc đẩy sản xuất",
      "Làm tăng năng suất lao động",
      "Kìm hãm sự phát triển kinh tế",
      "Không tác động đến xã hội",
    ],
    correct: "C",
  },
  {
    id: 6,
    topic: "Quan hệ kinh tế - chính trị",
    title:
      "Mối quan hệ giữa cơ sở hạ tầng và kiến trúc thượng tầng thực chất là:",
    options: [
      "Quan hệ văn hóa và giáo dục",
      "Quan hệ kinh tế và chính trị",
      "Quan hệ dân số và môi trường",
      "Quan hệ pháp luật và đạo đức",
    ],
    correct: "B",
  },
  {
    id: 7,
    topic: "Kiến trúc thượng tầng",
    title: "Bộ phận nào là mạnh mẽ nhất trong kiến trúc thượng tầng?",
    options: [
      "Văn học nghệ thuật",
      "Tôn giáo",
      "Hệ thống chính trị và pháp luật",
      "Phong tục tập quán",
    ],
    correct: "C",
  },
  {
    id: 8,
    topic: "Văn hóa doanh nghiệp",
    title: "Ở Việt Nam hiện nay, nền tảng tư tưởng của Đảng là:",
    options: [
      "Chủ nghĩa tư bản",
      "Chủ nghĩa dân tộc",
      "Chủ nghĩa Mác – Lênin và tư tưởng Hồ Chí Minh",
      "Chủ nghĩa tự do",
    ],
    correct: "C",
  },
  {
    id: 9,
    topic: "Nhà nước và pháp luật",
    title: "Nhà nước Việt Nam được xác định là:",
    options: [
      "Nhà nước tư sản",
      "Nhà nước quân chủ",
      "Nhà nước của dân, do dân, vì dân",
      "Nhà nước phong kiến",
    ],
    correct: "C",
  },
  {
    id: 10,
    topic: "Quản trị sản xuất",
    title: "Trong thời kỳ đổi mới, Đảng ta xác định:",
    options: [
      "Đổi mới chính trị là trung tâm",
      "Đổi mới văn hóa là trung tâm",
      "Đổi mới kinh tế là trung tâm",
      "Quốc phòng là trung tâm",
    ],
    correct: "C",
  },
  {
    id: 11,
    topic: "Kỷ luật lao động",
    title: "Chính trị tác động đến kinh tế thông qua:",
    options: [
      "Thiên nhiên",
      "Đường lối, chính sách của Đảng và Nhà nước",
      "Hoạt động tôn giáo",
      "Tập quán xã hội",
    ],
    correct: "B",
  },
  {
    id: 12,
    topic: "Quan hệ kinh tế - chính trị",
    title: "Theo V.I. Lênin:",
    options: [
      "Kinh tế không liên quan đến chính trị",
      "Chính trị là biểu hiện tập trung của kinh tế",
      "Chính trị quyết định hoàn toàn kinh tế",
      "Chính trị và kinh tế tách rời nhau",
    ],
    correct: "B",
  },
  {
    id: 13,
    topic: "Kiến trúc thượng tầng",
    title: "Kiến trúc thượng tầng xã hội chủ nghĩa phản ánh:",
    options: [
      "Xã hội phong kiến",
      "Cơ sở hạ tầng tư bản chủ nghĩa",
      "Cơ sở hạ tầng xã hội chủ nghĩa",
      "Nền kinh tế tự nhiên",
    ],
    correct: "C",
  },
  {
    id: 14,
    topic: "Quản trị sản xuất",
    title: "Vai trò lãnh đạo kinh tế ở Việt Nam thuộc về:",
    options: [
      "Quốc hội",
      "Nhân dân",
      "Đảng Cộng sản Việt Nam",
      "Doanh nghiệp tư nhân",
    ],
    correct: "C",
  },
  {
    id: 15,
    topic: "Quản trị sản xuất",
    title: "Sự quản lí kinh tế ở Việt Nam hiện nay thuộc về:",
    options: ["Nhà nước", "Tôn giáo", "Quân đội", "Các tổ chức quốc tế"],
    correct: "A",
  },
  {
    id: 16,
    topic: "Kỷ luật lao động",
    title:
      "Giai cấp nào cùng tầng lớp trí thức làm nền tảng của Nhà nước XHCN Việt Nam?",
    options: ["Địa chủ", "Công nhân và nông dân", "Tư sản", "Tiểu thương"],
    correct: "B",
  },
  {
    id: 17,
    topic: "Quan hệ kinh tế - chính trị",
    title: "Ý nghĩa phương pháp luận của quy luật này là:",
    options: [
      "Nhận thức đúng quan hệ giữa kinh tế và chính trị",
      "Chỉ tập trung vào văn hóa",
      "Phủ nhận vai trò kinh tế",
      "Tách rời kinh tế với chính trị",
    ],
    correct: "A",
  },
  {
    id: 18,
    topic: "Cơ sở hạ tầng",
    title: "Trong xã hội, yếu tố giữ vai trò quyết định cuối cùng là:",
    options: ["Chính trị", "Kinh tế", "Tôn giáo", "Đạo đức"],
    correct: "B",
  },
  {
    id: 19,
    topic: "Kỷ luật lao động",
    title: "Đổi mới chính trị ở Việt Nam được thực hiện:",
    options: [
      "Nóng vội, cấp tốc",
      "Thận trọng, vững chắc",
      "Không cần đổi mới",
      "Hoàn toàn tự phát",
    ],
    correct: "B",
  },
  {
    id: 20,
    topic: "Kiến trúc thượng tầng",
    title: "Kiến trúc thượng tầng tác động trở lại cơ sở hạ tầng theo:",
    options: [
      "Một xu hướng duy nhất",
      "Hai xu hướng tích cực và tiêu cực",
      "Ba xu hướng",
      "Không có xu hướng nào",
    ],
    correct: "B",
  },
  {
    id: 21,
    topic: "Kiến trúc thượng tầng",
    title: "Yếu tố nào sau đây thuộc kiến trúc thượng tầng?",
    options: [
      "Quan hệ sản xuất",
      "Lực lượng sản xuất",
      "Nhà nước",
      "Công cụ lao động",
    ],
    correct: "C",
  },
  {
    id: 22,
    topic: "Quan hệ kinh tế - chính trị",
    title: "Khi chính trị ổn định sẽ:",
    options: [
      "Cản trở kinh tế",
      "Thúc đẩy phát triển kinh tế",
      "Làm giảm sản xuất",
      "Không ảnh hưởng đến kinh tế",
    ],
    correct: "B",
  },
  {
    id: 23,
    topic: "Văn hóa doanh nghiệp",
    title: "Đổi mới ở Việt Nam nhằm mục tiêu:",
    options: [
      "Xóa bỏ CNXH",
      "Giữ vững định hướng xã hội chủ nghĩa",
      "Phát triển chủ nghĩa phong kiến",
      "Loại bỏ kinh tế thị trường",
    ],
    correct: "B",
  },
  {
    id: 24,
    topic: "Kiến trúc thượng tầng",
    title: "Thực chất vai trò của kiến trúc thượng tầng là:",
    options: [
      "Hoạt động tự giác của các giai cấp vì lợi ích kinh tế",
      "Hoạt động tự nhiên của môi trường",
      "Hoạt động văn hóa thuần túy",
      "Hoạt động quân sự đơn thuần",
    ],
    correct: "A",
  },
];

const palette: Array<[string, string]> = [
  ["#82d173", "#baf2a4"],
  ["#4ecdc4", "#a9f1e3"],
  ["#5c7cfa", "#c4d2ff"],
  ["#f7b267", "#ffd6a5"],
  ["#f17f8b", "#ffc3c7"],
  ["#6dd6f4", "#c0f1ff"],
  ["#f9d65c", "#fff1b5"],
  ["#9b7bff", "#d7c6ff"],
];

const shuffle = <T,>(items: T[]) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

function App() {
  const [activeHash, setActiveHash] = useState("home");
  const luckySet = useMemo(() => {
    const picks = shuffle(
      Array.from({ length: TOTAL_CELLS }, (_, index) => index + 1),
    );
    return new Set(picks.slice(0, LUCKY_COUNT));
  }, []);

  const board = useMemo<Cell[]>(() => {
    let questionIndex = 0;
    return Array.from({ length: TOTAL_CELLS }, (_, index) => {
      const id = index + 1;
      if (luckySet.has(id)) {
        return { id, kind: "lucky" };
      }
      const question = questions[questionIndex];
      questionIndex += 1;
      return { id, kind: "question", question };
    });
  }, [luckySet]);

  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [activeCell, setActiveCell] = useState<Cell | null>(null);
  const [selectedOption, setSelectedOption] = useState<
    Question["correct"] | null
  >(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [lastSpinNumber, setLastSpinNumber] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinPool, setSpinPool] = useState<number[]>(() =>
    Array.from({ length: TOTAL_CELLS }, (_, index) => index + 1),
  );
  const [spinAngle, setSpinAngle] = useState(0);

  const handleCellClick = (cell: Cell) => {
    if (selected.has(cell.id)) {
      return;
    }
    setSelected((prev) => {
      const next = new Set(prev);
      next.add(cell.id);
      return next;
    });
    setActiveCell(cell);
  };

  const handleSpin = () => {
    if (isSpinning) {
      return;
    }
    if (spinPool.length === 0) {
      return;
    }
    setIsSpinning(true);
    const pickIndex = Math.floor(Math.random() * spinPool.length);
    const pickNumber = spinPool[pickIndex];
    const segmentAngle = 360 / TOTAL_CELLS;
    const spins = 4 + Math.floor(Math.random() * 3);
    const targetAngle =
      360 - (pickNumber - 1) * segmentAngle - segmentAngle / 2;
    setSpinAngle(targetAngle + spins * 360);
    window.setTimeout(() => {
      setIsSpinning(false);
      setLastSpinNumber(pickNumber);
      setSpinPool((prev) => prev.filter((value) => value !== pickNumber));
    }, 2400);
  };

  const closeModal = () => setActiveCell(null);

  const handleOptionClick = (label: Question["correct"]) => {
    if (!activeCell?.question || isAnswerCorrect) {
      return;
    }
    setSelectedOption(label);
    setIsAnswerCorrect(label === activeCell.question.correct);
  };

  useEffect(() => {
    const updateFromHash = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      setActiveHash(hash);
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);
    return () => window.removeEventListener("hashchange", updateFromHash);
  }, []);

  useEffect(() => {
    if (!activeCell) {
      setSelectedOption(null);
      setIsAnswerCorrect(null);
      return;
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeCell]);

  return (
    <div className="page">
      <Header />

      <main className={`content${activeHash === "game" ? " game-page" : ""}`}>
        {activeHash === "practice" && <Practice />}

        {activeHash !== "game" ? null : (
          <section className="game-page-header">
            <a className="game-back" href="#home">
              ← Quay về giới thiệu
            </a>
          </section>
        )}

        {activeHash === "game" && (
          <section className="game-shell" id="game">
            <div className="game-header">
              <div>
                <h2>Đấu trường Chân Lý</h2>
                <p>
                  Click từng ô để mở câu hỏi hoặc ô may mắn. Ô đã chọn sẽ được
                  đánh dấu.
                </p>
              </div>
            </div>

            <div className="rule-panel" aria-label="Quy tắc trò chơi">
              <div className="rule-title">
                <span className="rule-icon">🔥</span>
                <div>
                  <p className="rule-subtitle">Mini game khám phá kiến thức</p>
                  <h3>Đấu trường triết học</h3>
                </div>
              </div>
              <ol className="rule-list">
                <li>Click chọn vòng quay may mắn.</li>
                <li>Click một ô bất kỳ để mở.</li>
                <li>Ô câu hỏi: chọn đáp án trắc nghiệm cho đến khi đúng.</li>
                <li>Ô may mắn sẽ được qua lượt và nhận phần thưởng.</li>
                <li>Ô đã mở sẽ được đánh dấu và không chọn lại.</li>
              </ol>
            </div>

            <div className="wheel-panel" aria-label="Vòng quay may mắn">
              <div className="wheel-text">
                <p className="wheel-subtitle">Game 1</p>
                <h3>Vòng quay may mắn 1–30</h3>
                <p>
                  Quay để lấy số ngẫu nhiên. Số đã trúng sẽ bị loại khỏi vòng
                  quay.
                </p>
                <div className="wheel-meta">
                  <span>Còn lại: {spinPool.length}</span>
                  <span>Kết quả gần nhất: {lastSpinNumber ?? "--"}</span>
                </div>
                <button
                  type="button"
                  className="spin-button"
                  onClick={handleSpin}
                  disabled={isSpinning || spinPool.length === 0}
                >
                  {isSpinning ? "Đang quay..." : "Quay ngay"}
                </button>
              </div>
              <div className="wheel-wrap">
                <div className="wheel-pointer" />
                <div
                  className={`wheel${isSpinning ? " is-spinning" : ""}`}
                  style={{ transform: `rotate(${spinAngle}deg)` }}
                  aria-live="polite"
                >
                  <div className="wheel-center">{lastSpinNumber ?? "🎴"}</div>
                </div>
              </div>
            </div>

            <div
              className="board-grid"
              role="grid"
              aria-label="Lưới mini game 30 ô"
            >
              {board.map((cell, index) => {
                const isSelected = selected.has(cell.id);
                const [toneA, toneB] = palette[index % palette.length];
                const iconLabel = isSelected
                  ? cell.kind === "lucky"
                    ? "🍀"
                    : "Q"
                  : "🎴";
                return (
                  <button
                    key={cell.id}
                    type="button"
                    className="board-cell"
                    data-kind={cell.kind}
                    data-selected={isSelected}
                    style={{
                      ["--cell-tone-a" as string]: toneA,
                      ["--cell-tone-b" as string]: toneB,
                    }}
                    onClick={() => handleCellClick(cell)}
                    disabled={isSelected}
                    aria-label={`Ô số ${cell.id}`}
                  >
                    <span className="cell-inner">
                      <span className="cell-front">
                        <span className="cell-index">
                          {cell.id.toString().padStart(2, "0")}
                        </span>
                        <span className="cell-icon">{iconLabel}</span>
                      </span>
                      <span className="cell-back">Đã mở</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        )}
      </main>

      {activeCell && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-card">
            <button
              type="button"
              className="modal-close"
              onClick={closeModal}
              aria-label="Đóng"
            >
              ✕
            </button>
            {activeCell.kind === "lucky" ? (
              <div className="lucky-content">
                <span className="lucky-emoji">🍀</span>
                <h3>Ô may mắn</h3>
                <p>
                  Bạn vừa mở một ô may mắn! Hãy chia sẻ một ví dụ thực tế thú vị
                  cho nhóm.
                </p>
              </div>
            ) : (
              <div className="question-content">
                <div className="question-meta">
                  {activeCell.question?.topic}
                </div>
                <h3>{activeCell.question?.title}</h3>
                <div className="option-list">
                  {activeCell.question?.options.map((option, optionIndex) => {
                    const label = optionLabels[optionIndex];
                    const isCorrect = label === activeCell.question?.correct;
                    const isChosen = selectedOption === label;
                    const showResult = selectedOption !== null;
                    const revealCorrect = isAnswerCorrect === true;
                    const optionClassName = [
                      "option-item",
                      isChosen && "is-selected",
                      revealCorrect && isCorrect && "is-correct",
                      showResult && isChosen && !isCorrect && "is-wrong",
                    ]
                      .filter(Boolean)
                      .join(" ");
                    return (
                      <button
                        key={label}
                        type="button"
                        className={optionClassName}
                        onClick={() => handleOptionClick(label)}
                        disabled={isAnswerCorrect === true}
                      >
                        <span className="option-label">{label}</span>
                        <span>{option}</span>
                      </button>
                    );
                  })}
                </div>
                {selectedOption && (
                  <div
                    className={`answer-highlight${isAnswerCorrect ? " is-correct" : " is-wrong"}`}
                  >
                    {isAnswerCorrect
                      ? "Chính xác!"
                      : "Sai rồi, thử chọn đáp án khác."}
                  </div>
                )}
              </div>
            )}
          </div>
          <button
            type="button"
            className="modal-backdrop"
            onClick={closeModal}
            aria-label="Đóng"
          />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
