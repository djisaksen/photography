import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>About</h1>
        <div className={styles.text}>
          <p>
            Welcome to my photography portfolio. I'm passionate about capturing moments
            and telling stories through the lens of my camera.
          </p>
          <p>
            My work focuses on landscapes, urban environments, and portrait photography.
            Each image represents a unique perspective and a moment frozen in time.
          </p>
          <p>
            Photography is not just about taking pictures; it's about seeing the world
            differently and sharing that vision with others.
          </p>
        </div>
        <div className={styles.contact}>
          <h2>Get in Touch</h2>
          <p>For inquiries or collaborations, feel free to reach out.</p>
        </div>
      </div>
    </div>
  );
}
