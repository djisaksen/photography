import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { galleries } from "@/data/galleries";
import styles from "./page.module.css";

type GalleryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return galleries.map((gallery) => ({ slug: gallery.slug }));
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { slug } = await params;
  const gallery = galleries.find((item) => item.slug === slug);

  if (!gallery) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Trip gallery</p>
          <h1 className={styles.title}>{gallery.title}</h1>
          <p className={styles.subtitle}>{gallery.subtitle}</p>
        </div>
        <Link href="/" className={styles.backLink}>
          Back to all trips
        </Link>
      </header>

      <div className={styles.grid}>
        {gallery.photos.map((photo) => (
          <div key={photo.id} className={styles.photoItem}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className={styles.photo}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
            />
          </div>
        ))}
      </div>
    </div>
  );
}
