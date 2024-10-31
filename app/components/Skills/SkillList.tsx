'use client'
import { useEffect, useRef } from 'react'
import styles from './Skills.module.css'


type Skill = string;

const BetterList: Skill[] = [
  'HTML5',
  'CSS',
  'JavaScript',
  'React js',
];

const GoodList: Skill[] = [
  'Next js',
  'TypeScript',
  'Node js',
  'git',
  'Supabase(PostgreSQL)',
];

const Libraries: Skill[] = [
  'Tan Stack query',
  'Zustand',
  'Chart js',
  'react-router-dom',
  'react-calender',
];

const SkillList = () =>{

  const scrollingRefs = useRef([]);
  const sectionIndex = useRef(0); // Track current section index

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Adjust to control when animation starts
    };
    
    console.log("intersectionObserver", scrollingRefs)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate);
        } else {
          entry.target.classList.remove(styles.animate);
        }
      });
    }, observerOptions);

    scrollingRefs.current.forEach((el) => observer.observe(el));
    return () => scrollingRefs.current.forEach((el) => observer.unobserve(el));
  }, []);


  return(
    <section
      className={styles.skillsWrap}
    >

      {/* Better 스킬 영역 */}
      <div
      >
        <div
          ref={(el) => (scrollingRefs.current[0] = el)}
          className={`${styles.scrolling1} ${styles.animated}`}
        >
        {
          BetterList.map((item, index)=>(
            <span
              key={index}
              className={styles.betterLine}
            >
              {item}
            </span>
          ))
        }
        </div>
        <div
          ref={(el) => (scrollingRefs.current[0] = el)}
          className={`${styles.scrolling1} ${styles.animated}`}
        >
        {
          BetterList.map((item, index)=>(
            <span
              key={index}
              className={styles.betterLine}
            >
              {item}
            </span>
          ))
        }
        </div>

      </div>

      {/* GOOD 스킬 영역 */}
      <div>
        <div
          ref={(el) => (scrollingRefs.current[1] = el)}
          className={`${styles.scrolling2} ${styles.animated}`}
        >
          {
            GoodList.map((item, index)=>(
              <span
                key={index}
                className={styles.goodLine}
              >
                {item}
              </span>
            ))
          }
        </div>
        <div
         ref={(el) => (scrollingRefs.current[1] = el)}
         className={`${styles.scrolling2} ${styles.animated}`}
        >
          {
            GoodList.map((item, index)=>(
              <span
                key={index}
                className={styles.goodLine}
              >
                {item}
              </span>
            ))
          }
        </div>

      </div>

      {/* Libraries 영역 */}
      <div>
        <div
        ref={(el) => (scrollingRefs.current[2] = el)}
        className={`${styles.scrolling3} ${styles.animated}`}
        >
          {
            Libraries.map((item, index)=>(
              <span
                key={index}
                className={styles.librariesLine}
              >
                {item}
              </span>
            ))
          }
        </div>
        <div
        ref={(el) => (scrollingRefs.current[2] = el)}
        className={`${styles.scrolling3} ${styles.animated}`}
        >
          {
            Libraries.map((item, index)=>(
              <span
                key={index}
                className={styles.librariesLine}
              >
                {item}
              </span>
            ))
          }
        </div>
        
      </div>


    </section>
  )
}

export default SkillList