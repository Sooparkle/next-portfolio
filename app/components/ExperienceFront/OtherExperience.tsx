import styles from "./MainExperience.module.css";

const OtherExperience = () => {
  return (
    <section
      className={styles.OtherExperience}
    >
      <h4>Other Experiences</h4>

      <div
        className={styles.OtherExperienceItemWrap}
      >
        <ul>
          <li>
            <div>
              <p className={styles.OtherExperienceItemHeader}>총 : 5년 이상</p>
              <p className={styles.OtherExperienceItemBottom}>비개발경험</p>
            </div>
          </li>
          <li>
            <div>
              <p className={styles.OtherExperienceItemHeader}>3 년</p>
              <p className={styles.OtherExperienceItemBottom}>매니저 / 기획</p>

            </div>
            <div>
              <p className={styles.OtherExperienceItemHeader}>11 개월</p>
              <p className={styles.OtherExperienceItemBottom}>uiux / 디자인</p>
            </div>
          </li>
          <li>
          <div>
              <p className={styles.OtherExperienceItemHeader}>9 개월</p>
              <p className={styles.OtherExperienceItemBottom}>사업 기획</p>

            </div>
            <div>
              <p className={styles.OtherExperienceItemHeader}>1년 이상</p>
              <p className={styles.OtherExperienceItemBottom}>기타</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OtherExperience;
