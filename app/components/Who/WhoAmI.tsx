import React from 'react'
import ImageSlider from './ImageSlider'
import PersonalInfo from './PersonalInfo'
import styles from './who.module.css'


const WhoAmI = () => {
  return (
    <article
      className={styles.whoami}
    >
      <ImageSlider />
      <PersonalInfo />
    </article>
  ) 
}

export default WhoAmI