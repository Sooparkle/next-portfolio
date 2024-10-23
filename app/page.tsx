import Image from "next/image";
import styles from "./page.module.css";
import WhoAmI from "./components/Who/WhoAmI";

export default function Home() {
  return (
    <main className={styles.page}>

      <h1>TEST</h1>
      <WhoAmI />
    </main>
  );
}
