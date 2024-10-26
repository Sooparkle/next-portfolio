import Image from 'next/image'
import styles from './MainProjects.module.css'
import Link from 'next/link'
import pudding from '@/app/asset/puddingcamp.png'
import jom from '@/app/asset/jomswimswim.png'
import library from '@/app/asset/library.png'
import ProjectBtn from './ProjectBtn'

const projects = [
  {
    title: "Project 4",
    isAble: true,
    type : "협업",
    name: "컨퍼런스-언컨퍼런스 by 푸딩캠프",
    description:
      "푸딩캠프에서 주최하는 컨퍼런스 홈페이지 프론트 엔드로써 참여",
    contribution: "(프론트 : 약 92%)",
    imageUrl: [
      pudding
    ],
    url: `https://conference.puddingcamp.com/`,
    github: "https://puddingcamp.com/meetups/conference2024/staffs#staff-soo-parkle",
    contents:[
      "기획자 + 디자이너 + 백 엔드 개발자와 협업",
      "총 약 310명 신청 (오프라인 신청자 : 약 60명, 온라인 신청자 : 약 250명)",
    ],
    star : 
    [
      {Situation : "사용자에게 더 편리한 경험 선사[React => Next]"},
      {Task : "1)Image, Link bundler 최적화 2) UI 가독성 3) 더 많은 정보 제공"},
      {Action : "1) Next 14 사용법 숙지 및 실행 2) Naver 파이넨셜팀 UI 적용 3) 타 숙박업소 밴처마킹"},
      {Result : "1) 더 많은 정보 취득 가능 2) Lighthouse, Peformance 78 to 85 증가"},
    ],
    keywords: [
      "React",
      "react-router-dom",
    ],
    popup:[
      {puddingcamp : "https://puddingcamp.com/meetups/conference2024/staffs#staff-soo-parkle"},
      {blog : "https://life-explorer.tistory.com/category/Projects"},
    ]
  },
  {
    title: "Project 3",
    isAble: true,
    type : "개인",
    name: "숙박 사이트, '좀쉼쉼'",
    description:
      "DB 설계 및 DB User Table 활용, 로그인 인증 가능 숙박 사이트",
    contribution: "100%",
    imageUrl: [
      jom,
    ],
    url: `https://next-type-accommodation.pages.dev/`,
    github: "https://github.com/Sooparkle/project3/tree/home",
    gitServer: "https://github.com/Sooparkle/pj3_server/tree/main",
    contents:[
      "교육과정 프로젝트로, 'Client - Server - DB' 통신",
      "직접 만든 Supabase DB로 검색, 예약 그리고 예약 확인까지 가능",
    ],
    star : 
    [
      {Situation : "사용자에게 더 편리한 경험 선사[React => Next]"},
      {Task : "1)Image, Link bundler 최적화 2) UI 가독성 3) 더 많은 정보 제공"},
      {Action : "1) Next 14 사용법 숙지 및 실행 2) Naver 파이넨셜팀 UI 적용 3) 타 숙박업소 밴처마킹"},
      {Result : "1) 더 많은 정보 취득 가능 2) Lighthouse, Peformance 78 to 85 증가"},
    ],
    keywords: [
      "Next 14",
      "Zustand",
      "react-calendar",
      `Supabse(PostgreSQL)`,
    ],
    popup:[
      {git : "https://github.com/Sooparkle/project3/tree/home"},
      {blog : "https://life-explorer.tistory.com/category/Projects"},
    ]
  },
  {
    title: "Project 2",
    isAble: true,
    type : "개인",
    name: "서울시 지역구 독서 베스트 대출",
    description:
      "공공 API를 활용하여, 서울특별시 지역구별 도서 베스트 대출 목록 통신",
    contribution: "100%",

    imageUrl: [
      library,
    ],
    url: "https://library-62r.pages.dev",
    github: "https://github.com/Sooparkle/next-accom",
    gitServer: "https://github.com/Sooparkle/pj3_server/tree/main",
    contents:[
      "교육과정 프로젝트로, '문해력'이라는 사회적 이슈 + '도서' 활용 해결 제안",
      "서울시 특정 지역구, 특정 기간 동안 가장 관심있는 도서 검색 가능",
    ],
    star : 
    [
      {Situation : "상세 페이지 조회 이후 검색 결과 목록 페이지로 이동시 데이터 사라짐"},
      {Task : "검색 결과 목록 조회 페이지 데이터 유지"},
      {Action : "TanStack Query Library 사용(캐쉬 저장 방식)"},
      {Result : "데이터 그대로 존재 + 번외) 검색 결과 내 검색 속도 향상"},
    ],
    keywords: [
      "TypeScript",
      "react-router-dom",
      "TanStack Query",
      "ChartJS",
      "react-datepicker",
      "공공데이터 API",
      "Zustand",
    ],
    popup:[
      {git : "https://github.com/Sooparkle/Library/tree/renewerlibrary"},
      {blog : "https://life-explorer.tistory.com/category/Projects"},
    ]
  },
]

const ProjectsList = () =>{

  return(
    <section
      className={styles.eachProjectWrap}
    >
      <ul>
        {
          projects.map((item, index) =>(
          <li
            key={index}
            className={styles.projectItem}
          >
            {/* 이미지 영역 */}
            <div
              className={styles.imageWrap}
            >
              {
                item.imageUrl.map((img, index) =>(
                  <Image
                    key={index}
                    src={img}
                    alt='project image'
                    fill
                    sizes='max-width : 500px height : 350px'
                    priority={false}
                  >
                    </Image>
                  
                ))
              }
              <p
                className={styles.contribution}
              >
                <span>{item.type}</span>
                <span>{item.contribution}</span>
              </p>
            </div>
  

            {/* 내용 영역 */}
            <div
              className={styles.projectContentWrap}
            >

              <h3>{item.title}. {item.name}</h3>
              {/* 프로젝트 메세지 영역 */}
              <ul>
                {
                  item.contents.map((message, index) =>(
                    <li key={index} >{message}</li>
                  ))
                }
              </ul>


              {/* 키워드 영역 */}
              <p
                className={styles.projectKeywordWrap}
              >
                {
                  item.keywords.map((keyword, index) =>(
                    <span 
                      key={index}
                      className={styles.projectKeyword}
                    >
                      {keyword}
                    </span>
                  ))
                }
              </p>
              {
                <ProjectBtn liveDemo={item.url} popupURL={item.popup} />
              }
            </div>
          </li>

          ))

        }

      </ul>


    </section>
  )
}

export default ProjectsList