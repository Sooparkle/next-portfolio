'use client'

import React, { useState } from 'react'
import pic1 from '@/app/asset/computer.jpg'
import pic2 from '@/app/asset/Osaka.jpeg'
import Image from 'next/image';
import styles from './who.module.css';

const ImageSlider = () => {
  const images = [pic1,pic2]
  const [ imageIndex, setImageIndex ] = useState(0);


  const showPrevImage = () =>{
    setImageIndex(index => {
      if(index === 0) return images.length -1
      return index -1
  })
  }

  const showNextImage = () =>{
    setImageIndex(index =>{
      if(index === images.length -1) return 0
      return  index +1
    })

  }

  return (
    <div
      className={styles.whoSlider}
    >
      <div
        className={styles.whoSliderImages}
      >
        {
          images.map((image, index)=>(
            <Image
              key={index}
              src={image}
              alt='본인 사진' 
              width={500}
              height={500}
              style={{
                translate : `${-100 * imageIndex}%`
              }}
              className={styles.sliderImg}
              />
          ))
        }
      </div>

      <button
        className={styles.sliderBtn}
        onClick={showPrevImage}
        style={{
          left : -10
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 11.9299H2" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M8.00009 19L2.84009 14C2.5677 13.7429 2.35071 13.433 2.20239 13.0891C2.05407 12.7452 1.97754 12.3745 1.97754 12C1.97754 11.6255 2.05407 11.2548 2.20239 10.9109C2.35071 10.567 2.5677 10.2571 2.84009 10L8.00009 5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      </button>

      <button
        className={styles.sliderBtn}
        onClick={showNextImage}
        style={{
          right:-10
        }}

      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12.0701H22" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M16 5L21.16 10C21.4324 10.2571 21.6494 10.567 21.7977 10.9109C21.946 11.2548 22.0226 11.6255 22.0226 12C22.0226 12.3745 21.946 12.7452 21.7977 13.0891C21.6494 13.433 21.4324 13.7429 21.16 14L16 19" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      </button>


      <div
        className={styles.sliderIndexBtnWrap}
      >
        {
          images.map((a, index)=>(
            <button
              className={styles.sliderIndexBtn}
              key={index}
              onClick={()=>setImageIndex(index)}
            >
              {
                index === imageIndex ? (
                  <svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z"></path> </g> </g> </g></svg>
                ) : (
                  <svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333z "></path> </g> </g> </g></svg>
                )
              }
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default ImageSlider