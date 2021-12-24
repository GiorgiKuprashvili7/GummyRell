import styles from './aside.module.scss'
import { animeList } from '../../data/animeList'
import { AiFillPlayCircle } from 'react-icons/ai'

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <section className={styles.continueWatching}>
        <div className={styles.sectionTitle}>
          <h2>განაგრძე ყურება</h2>
          <a href="#">ყველას ნახვა</a>
        </div>
        <div className={styles.continueWatchingBox}>
          <img src={animeList[13].posterUrl} alt="" />
          <AiFillPlayCircle className={styles.playIcon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progressBar}>
              <div className={styles.completed}></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featuredShows}>
        <div className={styles.sectionTitle}>
          <h2>რეკომენდირებული</h2>
        </div>

        <div className={styles.recomendedList}>
          {animeList.slice(9, 14).map((anime, index) => {
            return (
              <div className={styles.card} key={index}>
                <img src={anime.posterUrl} alt="" />

                <div className={styles.textContainer}>
                  <h3>{anime.name}</h3>
                  <h4>{anime.episodes} ვიდეო</h4>
                  <p>{`${anime.description.slice(0, 100)}...`}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </aside>
  )
}

export default Aside
