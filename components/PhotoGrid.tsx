import Image from "next/image";
import Link from "next/link";
import styles from "./PhotoGrid.module.css";
import { galleries } from "@/data/galleries";

export default function PhotoGrid() {
  return (
    <div className={styles.grid}>
      {galleries.map((gallery) => (
        <Link
          key={gallery.slug}
          href={`/galleries/${gallery.slug}`}
          className={styles.card}
        >
          <div className={styles.photoItem}>
            <Image
              src={gallery.cover.src}
              alt={gallery.cover.alt}
              width={gallery.cover.width}
              height={gallery.cover.height}
              className={styles.photo}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
            />
          </div>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{gallery.title}</h2>
            <p className={styles.cardMeta}>{gallery.subtitle}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
