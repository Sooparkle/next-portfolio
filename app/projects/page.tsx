import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './projects.module.css';


const Projectspage = () => {
  return (
    <>
      <section
        className={styles.projectWrap}
      >
        {/* left area */}
        <div>
          <h3>
          <Link 
            href='https://conference.puddingcamp.com/
            targer="_black"
          '>컨퍼런스-언컨퍼런스</Link>
          </h3>
          <p>역할 : 프론트엔드 개발자, 현장 방송팀 지원</p>
          <p>기간 : 한달</p>
          <p>
            
            </p>
        </div>


        {/* right area */}
        <div
        style={{
          position : 'relative',
          width: '500px',
          aspectRatio: '1/1'
        }}
        >
          <Image
            src='https://lh3.googleusercontent.com/pw/AP1GczMnkz73OX9FhyEzSjqGCph5Ychtf3CzeQAlVkqo5kU17wMBS4HngmoiHMZVxhf97rooU_N9H9UZE0UVfyhb1nzqH_Xq3-jk_EMD8QKkCkip9zkwOR6GdLcJCU_hnbr9Z-Tl6cC_kJuaANGeqaApSw0R=w2048-h1536-s-no-gm?authuser=0'
            alt='푸딩캠프, 컨퍼런스 단체 사진'
            fill
            objectFit='contain'
          >

          </Image>
        </div>
      </section>
    </>
    
  )
}

export default Projectspage