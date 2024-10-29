import Front from './Front';
import styles from './MainExperience.module.css';
import OtherExperience from './OtherExperience';



const MainExperience =() =>{

  return(
    <article
      className={styles.MainExperience}
    >
      <h2>EXPERIENCES</h2>

      <div
        className={styles.ExperienceContentsWrap}
      >
        <Front />
        <OtherExperience />
      </div>
    </article>

  )
}

export default MainExperience