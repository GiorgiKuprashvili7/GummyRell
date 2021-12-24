import styles from './home.module.scss'
import Aside from './Aside'
import MainContant from './MainContant'
import AnimeLinks from './AnimeLinks'

const Home = () => {
  return (
    <section className={styles.homepage}>
      <div className={styles.content}>
        <MainContant />
        <Aside />
      </div>
    </section>
  )
}

export default Home
