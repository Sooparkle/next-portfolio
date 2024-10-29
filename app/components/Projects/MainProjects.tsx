import styles from './MainProjects.module.css';
import ProjectsList from './ProjectsList';


const MainProjects = () => {

  return(
    <article
      className={styles.MainProjects}
    >
      <h2>PROJECTS</h2>

      <ProjectsList />
    </article>
  )

}

export default MainProjects