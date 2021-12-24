import styles from './animeLinks.module.scss'
import { animeList } from '../../data/animeList'
import { useState } from 'react'

const AnimeLinks = () => {
  const itemsToShow = 16

  const [showAnime, setshowAnime] = useState(itemsToShow)

  const showMoreAnime = () => {
    setshowAnime((showAnime) => showAnime + itemsToShow)
  }

  return (
    <section className={styles.section}>
      <div className={styles.tagsContainer}>
        <a href="#">ანიმე</a>
        <a href="#">მანგა</a>
        <a href="#">შონენი</a>
        <a href="#">სეინენი</a>
        <a href="#">ფანტასტიკა</a>
        <a href="#">ფილმი</a>
      </div>

      <div className={styles.animeList}>
        {animeList.slice(0, showAnime).map((anime, index) => {
          return (
            <div key={index} className={styles.card}>
              <div
                style={{ backgroundImage: `url(${anime.posterUrl})` }}
                className={styles.bgImg}
              />
              <div className={styles.cardContent}>
                <img src={anime.posterUrl} alt="" />
                <h3>{anime.name}</h3>
                <p>{anime.episodes} ეპიზოდი</p>
              </div>
            </div>
          )
        })}
      </div>
      <button
        className={styles.showMore}
        onClick={showMoreAnime}
        style={{
          display: `${showAnime >= animeList.length ? 'none' : 'block'}`,
        }}
      >
        მეტის ჩვენება
      </button>
    </section>
  )
}

export default AnimeLinks
