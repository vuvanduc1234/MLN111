import "./Practice.css";
import flagImage from "../assets/marx-lenin-ho-chi-minh.jpg";

function Practice() {
  return (
    <section className="practice-section" id="practice">
      <div className="practice-container">
        <h2 className="practice-title">Liên hệ thực tiễn</h2>
        <div className="practice-hero hover-card reveal">
          <img
            src={flagImage}
            alt="Lá cờ Mác–Lênin và Hồ Chí Minh"
            className="practice-flag"
          />
        </div>
        <article className="practice-content">
          <div className="practice-block hover-card reveal">
            <h3>Vai trò của kiến trúc thượng tầng</h3>
            <ul className="practice-list">
              <li>
                Hình thành đời sống tinh thần, tư tưởng và chế độ chính trị của
                một xã hội.
              </li>
              <li>
                Hệ tư tưởng chính trị, pháp luật, Đảng và Nhà nước là những bộ
                phận quan trọng nhất.
              </li>
            </ul>
          </div>

          <div className="practice-block hover-card reveal">
            <h3>Kiến trúc thượng tầng ở Việt Nam</h3>
            <p>
              Ở Việt Nam hiện nay, kiến trúc thượng tầng phát triển theo hai
              định hướng chính:
            </p>
            <ul className="practice-list">
              <li>
                Lấy chủ nghĩa Mác–Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư
                tưởng, kim chỉ nam cho hoạt động của Đảng và xã hội.
              </li>
              <li>
                Xây dựng Nhà nước xã hội chủ nghĩa của dân, do dân, vì dân; lấy
                giai cấp công nhân, nông dân và đội ngũ trí thức làm nền tảng
                dưới sự lãnh đạo của Đảng.
              </li>
            </ul>
          </div>

          <div className="practice-block hover-card reveal">
            <h3>Mối quan hệ giữa hai thành phần</h3>
            <ul className="practice-list">
              <li>
                Củng cố kiến trúc thượng tầng song song với phát triển cơ sở hạ
                tầng giúp hoàn thiện thể chế xã hội và thúc đẩy quá trình quá độ
                lên chủ nghĩa xã hội diễn ra nhanh và phù hợp hơn.
              </li>
              <li>
                Kiến trúc thượng tầng xã hội chủ nghĩa phản ánh cơ sở hạ tầng xã
                hội chủ nghĩa, đồng thời việc xây dựng kiến trúc thượng tầng
                cũng tạo tiền đề cho sự hình thành và phát triển của cơ sở hạ
                tầng.
              </li>
            </ul>
          </div>

          {/* <div className="practice-block">
            <h3>Ứng dụng trong nền kinh tế thị trường</h3>
            <p>
              Trong nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt
              Nam, kiến trúc thượng tầng thể hiện vai trò thông qua sự lãnh đạo
              kinh tế của Đảng và sự quản lý kinh tế của Nhà nước.
            </p>
          </div> */}
        </article>
      </div>
    </section>
  );
}

export default Practice;
