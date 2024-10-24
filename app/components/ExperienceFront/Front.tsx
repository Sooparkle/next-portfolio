import styles from '@/app/experience/Experience.module.css'

const Front = () => {

  return(
    <section
      className={styles.experienceWrap}
    >

      <div
        className={styles.experienceItem}
      >
        <div
          className={styles.experienceHeader}
        >
          <p>2024.09.28</p>
          <h3>푸딩캠프, 컨퍼런스-언컨퍼런스2024</h3>
        </div>

        <ul
          className={styles.experienceBottom}
        >
          <li className={styles.item} >기획자 + 디자이너 + 백 엔드 개발자와 협업.</li>
          <li className={styles.item} >프론트엔드(약 92%) + 현장 방송팀 지원.</li>
          <li className={styles.item} >총 약 310명 신청 (오프라인 : 약 60명, 온라인 : 약 250명).</li>
        </ul>
      </div>

      <div
        className={styles.experienceItem}
      >
        <div
          className={styles.experienceHeader}
        >
          <p>2024.09.28</p>
          <h3>푸딩캠프, 컨퍼런스-언컨퍼런스2024</h3>
        </div>

        <ul
          className={styles.experienceBottom}
        >
          <li className={styles.item} >기획자 + 디자이너 + 백 엔드 개발자와 협업.</li>
          <li className={styles.item} >프론트엔드(약 92%) + 현장 방송팀 지원.</li>
          <li className={styles.item} >총 약 310명 신청 (오프라인 : 약 60명, 온라인 : 약 250명).</li>
        </ul>
      </div>


    </section>
  )
}

export default Front