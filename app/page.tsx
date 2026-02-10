import PhotoGrid from "@/components/PhotoGrid";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Gallery</h1>
        <p className={styles.subtitle}>Nikon D3500, Canon AE-1 & iPhone</p>
      </header>
      <PhotoGrid />
    </div>
  );
}
