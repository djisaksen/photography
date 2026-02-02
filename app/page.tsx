import PhotoGrid from "@/components/PhotoGrid";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Gallery</h1>
        <p className={styles.subtitle}>A collection of my photographic work</p>
      </header>
      <PhotoGrid />
    </div>
  );
}
