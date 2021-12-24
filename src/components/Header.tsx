import styles from './header.module.scss'
import { RiSearchLine } from 'react-icons/ri'
import { IoNotificationsSharp } from 'react-icons/io5'
import { HiOutlineChevronDown } from 'react-icons/hi'
import profiePic from '../assets/guest-profile-pic.jpg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.search}>
          <RiSearchLine className={styles.icon} />
          <input type="text" placeholder="anime, action" />
        </div>
        <IoNotificationsSharp className={styles.notification} />

        <div className={styles.profile}>
          <img src={profiePic} alt="" />
          <HiOutlineChevronDown className={styles.icon} />
        </div>
      </div>
    </header>
  )
}

export default Header
