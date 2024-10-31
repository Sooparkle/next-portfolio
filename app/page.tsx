import Image from "next/image";
import styles from "./page.module.css";
import WhoAmI from "./components/Who/WhoAmI";
import Front from "./components/ExperienceFront/Front";
import MainExperience from "./components/ExperienceFront/MainExperience";
import MainProjects from "./components/Projects/MainProjects";
import Footer from "./components/Footer/Footer";
import MainSkills from "./components/Skills/MainSkills";
import MainPoints from "./components/points/MainPoints";




export default function Home() {
  return (
    <>
      <main className={styles.page}>

        <h1>TEST</h1>
        <MainProjects />
        <MainSkills />
        <MainPoints />
        <WhoAmI />
        <MainExperience />
      </main>
      <Footer/>
    </>
  );
}
