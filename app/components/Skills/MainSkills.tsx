import SkillLIst from './SkillList'
import styles from './Skills.module.css'


const MainSkills = () =>{

  return(
    <article
      className={styles.MainSkills}
    >
      <h2>SKILLS</h2>

      <SkillLIst />
      
    </article>
  )
}

export default MainSkills