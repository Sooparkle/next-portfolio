'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './Skills.module.css'
import useIntersectionObserver from '../hook/useIntersectionObserver';
import { text } from 'stream/consumers';


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

const IoOptions : IntersectionObserverInit = {
  threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
}

const TextList = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [ progressValues , setProgressValues ] = useState<number>()
  useEffect(()=>{
    const observer = new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting) updateProgress(entry.target)
    }, IoOptions)

    if(textRef.current){
      observer.observe(textRef.current)
    }

    return () => {
      if(textRef.current) {
        observer.unobserve(textRef.current)
      }
    }


  },[])

  const updateProgress = (element : Element) => {
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportCenter = viewportHeight;
    const elementCenter = rect.top + (rect.height / 2);
    const distanceFromCenter = Math.abs(viewportCenter - elementCenter);
    const animationRange = 500; // viewport 중앙으로부터 위아래로 200px 구간 애니메이션 발생
    const progress = Math.max(0, Math.min(1, 1 - (distanceFromCenter / animationRange)));

    setProgressValues(progress)
  }
  
  console.log("text", progressValues)

  return (
    <div
      ref={textRef}
      className={styles.scrolling1}
      style={{
        transform : `translateX(${1 - (progressValues || 0) * 2000}px)`
      }}
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
  )
}


const SkillList = () =>{
  const betterRef = useRef<HTMLDivElement>(null);
  const goodRef = useRef<HTMLDivElement>(null);
  const librariesRef = useRef<HTMLDivElement>(null);

  const { entries } = useIntersectionObserver(betterRef, IoOptions);
  const { entries: goodEntries } = useIntersectionObserver(goodRef, IoOptions);
  const { entries: libraryEntries } = useIntersectionObserver(librariesRef, IoOptions);

  useEffect(() => {

  }, [entries, goodEntries, libraryEntries]);
  return(
    <section
      className={styles.skillsWrap}
    >

      <TextList />

      {/* Better 스킬 영역 */}
      <div
      >
        <div
          ref={betterRef}
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
          ref={goodRef}
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
        ref={librariesRef}
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