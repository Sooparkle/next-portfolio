import Front from "../components/ExperienceFront/Front"
import OtherExperience from "../components/ExperienceFront/OtherExperience"
import styles from './Experience.module.css'


const ExperiencePage = () => {

  return(
    <main
    >
      <h3>Experience</h3>
        <section
        className={styles.experience}
        >

          <Front />
          <OtherExperience />

        </section>
    </main>

  )
} 

export default ExperiencePage