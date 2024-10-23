import Front from "../components/ExperienceFront/Front"
import styles from './Experience.module.css'


const ExperiencePage = () => {

  return(
    <article
    >
      <h3>Experience</h3>
        <section
      className={styles.experience}
        
        >
          <Front />

        </section>
    </article>

  )
} 

export default ExperiencePage