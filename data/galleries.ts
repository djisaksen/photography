export type GalleryPhoto = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Gallery = {
  slug: string;
  title: string;
  subtitle: string;
  cover: GalleryPhoto;
  photos: GalleryPhoto[];
};

export const galleries: Gallery[] = [
  {
    slug: "iceland-2024",
    title: "Iceland Highlights",
    subtitle: "Ring Road • June 2024",
    cover: {
      id: 1,
      src: "/photos/photo-1.jpg",
      alt: "Iceland landscape",
      width: 800,
      height: 600,
    },
    photos: [
      {
        id: 1,
        src: "/photos/photo-1.jpg",
        alt: "Iceland landscape",
        width: 800,
        height: 600,
      },
      {
        id: 2,
        src: "/photos/photo-2.jpg",
        alt: "Iceland waterfall",
        width: 800,
        height: 1000,
      },
      {
        id: 3,
        src: "/photos/photo-3.jpg",
        alt: "Iceland black sand beach",
        width: 800,
        height: 600,
      },
    ],
  },
  {
    slug: "tokyo-2023",
    title: "Tokyo Nights",
    subtitle: "Shibuya • October 2023",
    cover: {
      id: 4,
      src: "/photos/photo-4.jpg",
      alt: "Tokyo street portrait",
      width: 800,
      height: 1000,
    },
    photos: [
      {
        id: 4,
        src: "/photos/photo-4.jpg",
        alt: "Tokyo street portrait",
        width: 800,
        height: 1000,
      },
      {
        id: 5,
        src: "/photos/photo-5.jpg",
        alt: "Tokyo street scene",
        width: 800,
        height: 600,
      },
      {
        id: 6,
        src: "/photos/photo-6.jpg",
        alt: "Tokyo architecture",
        width: 800,
        height: 1000,
      },
    ],
  },
  {
    slug: "pacific-northwest-2022",
    title: "Pacific Northwest",
    subtitle: "Oregon Coast • May 2022",
    cover: {
      id: 2,
      src: "/photos/photo-2.jpg",
      alt: "Oregon coast cliffs",
      width: 800,
      height: 1000,
    },
    photos: [
      {
        id: 2,
        src: "/photos/photo-2.jpg",
        alt: "Oregon coast cliffs",
        width: 800,
        height: 1000,
      },
      {
        id: 1,
        src: "/photos/photo-1.jpg",
        alt: "Oregon coastal sunset",
        width: 800,
        height: 600,
      },
      {
        id: 6,
        src: "/photos/photo-6.jpg",
        alt: "Oregon lighthouse",
        width: 800,
        height: 1000,
      },
    ],
  },
];
