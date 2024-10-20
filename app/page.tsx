import Image from "next/image";
import styles from "./page.module.css";
import WhoAmI from "./components/Who/WhoAmI";

export default function Home() {
  return (
    <div className={styles.page}>

    <h1>TEST</h1>
    <WhoAmI />
    </div>
  );
}
