import styles from './MainExperience.module.css'

const ExperienceDatas = [
  {
    data : "2024.08.26 ~ 2029.28",
    period : '1mo +',
    title : "푸딩캠프, 컨퍼런스-언컨퍼런스2024",
    contents : [
      "기획자 + 디자이너 + 백 엔드 개발자와 협업.",
      "프론트엔드(약 92%) + 현장 방송팀 지원.",
      "총 약 310명 신청 (오프라인 : 약 60명, 온라인 : 약 250명).",
    ]
  },
  {
    data : "2023.09 ~ 2024.03",
    period : '6mo',
    title : "프로젝트기반 프론트엔드 웹&앱 SW개발자 양성 과정",
    contents : [
      "HTML5, CSS 그리고 JavaScript 기초 및 SPA(React) 학습.",
      "총 3개 프로젝트 진행(개인 2개 / 팀 1개 ).",
    ]
  },
  {
    data : "2023.04.14 ~ 2025.04.14",
    period : '2yrs',
    title : "SQLD 자격증 취득",
    contents : [
      "한국데이터산업진흥원.",

    ]
  },

]
const Front = () => {

  return(
    <section
      className={styles.experienceWrap}
    >

{
          ExperienceDatas.map((item,index) =>(
            <div
            className={styles.experienceItem}
            key={index}
            >
              <div
                className={styles.experienceHeader}
              >
                <p>
                  <span className={styles.data} >{item.data}</span>
                  <span className={styles.period} >{item.period}</span>
                </p>
                <h3>{item.title}</h3>
              </div>
              <ul
                key={index}
                className={styles.experienceBottom}
              >
                {
                  item.contents.map((message, index) =>(
                  <li
                    key={index}
                    className={styles.item} 
                  >
                  {message}
                  </li>
                  ))
                }
              </ul>
            </div>
          ))
        }

    </section>
  )
}

export default Front