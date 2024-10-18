import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projectspage = () => {
  return (
    <>
      <section>
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
        <div>
          <Image
            src={'https://photos.google.com/share/AF1QipNZusMAEOjAEHplS9Q-YHrhry3e2lxLhmjfRgHFzv54pCkbpF9uGyuLdOyTsNNbqQ/photo/AF1QipMBfrP2Z8OnkKeRVeNMfA2EdeTfLVURSKa_rCu9?key=MTd4SVBTYjFqZ0xFcmdZOHNPYWhVSldJVWxaNm5n'}
            alt='푸딩캠프, 컨퍼런스 단체 사진'
            width="300"
            height="300"
          >

          </Image>
        </div>
      </section>
    </>
    
  )
}

export default Projectspage