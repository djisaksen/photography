import Image from 'next/image';
import styles from './PhotoGrid.module.css';

// Sample photos data - in a real app, this would come from a CMS or API
const photos = [
  { id: 1, src: '/photos/photo-1.jpg', alt: 'Landscape photograph', width: 800, height: 600 },
  { id: 2, src: '/photos/photo-2.jpg', alt: 'Nature photograph', width: 800, height: 1000 },
  { id: 3, src: '/photos/photo-3.jpg', alt: 'Urban photograph', width: 800, height: 600 },
  { id: 4, src: '/photos/photo-4.jpg', alt: 'Portrait photograph', width: 800, height: 1000 },
  { id: 5, src: '/photos/photo-5.jpg', alt: 'Street photograph', width: 800, height: 600 },
  { id: 6, src: '/photos/photo-6.jpg', alt: 'Architecture photograph', width: 800, height: 1000 },
];

export default function PhotoGrid() {
  return (
    <div className={styles.grid}>
      {photos.map((photo) => (
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
  );
}
