import AnimeLinks from './AnimeLinks'
import styles from './mainContant.module.scss'

const MainContant = () => {
  return (
    <main className={styles.main}>
      <section className={styles.videoContainer}>
        <iframe
          src="https://www.youtube.com/embed/78WIYzX_m98?start=7"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </section>

      <AnimeLinks />
    </main>
  )
}

export default MainContant
