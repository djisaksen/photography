import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>About</h1>
        <div className={styles.text}>
          <p>My relationship with photography began casually, without much intention. I was shooting on an iPhone 12 mini while traveling through Lisbon, Portugal — wandering the city with no real destination, guided by light, color, and instinct. I was especially drawn to Lisbon’s contrasting colors and layered architecture, often stopping simply because something felt worth noticing.</p>
          <p>
After that trip, I kept shooting. During a spring break trip to Montreal, I continued photographing on my phone, braving the late-winter cold and learning to work within harsher conditions. What began as documenting travel slowly became a way of slowing down and paying attention, even in unfamiliar places.
          </p>
          <p>
For my college graduation, my mother gifted me a Nikon D3500 — a camera I still use today. With it, I began approaching photography more deliberately. One of the first trips I took with it was to Hereford, England, where I spent time along the River Wye with one of my oldest friends while he bass fished. Photographing those quiet, unposed moments by the river helped shape the way I see and photograph the world.
          </p>
          <p>After graduating, my cousin Robert became a major influence, introducing me to the world of film photography. Through long walks and conversations about goals, composition, and light, he shifted the way light and time were considered within a frame. For my birthday, I received a Canon AE-1, which traveled with me to Toronto, where hours were spent sitting on a bench watching people ice skate around the park, allowing moments to arrive rather than pursuing them.</p>
        </div>
      </div>
    </div>
  );
}
