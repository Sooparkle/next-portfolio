
import Front from './Front'
import styles from './MainExperienc.module.css'


const Mainexperience = () => {

  return(
    <article
      className={styles.MainExperience}
    >
      <h2>EXPERIENCE</h2>
      <div
        className={styles.ExperienceContentsWrap}
      >
        <Front />
        <Front />

      </div>

    </article>
  )
}

export default Mainexperience