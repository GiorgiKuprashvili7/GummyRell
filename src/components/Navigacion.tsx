import styles from './navigacion.module.scss'
import { useState, useEffect } from 'react'
import { studioList, studioListType } from '../data/studioList'
import { RiHomeFill, RiSettingsFill } from 'react-icons/ri'
import { FaBookOpen, FaHeart } from 'react-icons/fa'
import { MdVideoLibrary } from 'react-icons/md'
import { GiMoebiusTriangle } from 'react-icons/gi'
import { IoMdLogIn } from 'react-icons/io'
import { AiOutlineMenu } from 'react-icons/ai'

const Navigacion = () => {
  const [list, setlist] = useState<studioListType | []>([])
  const [visible, setvisible] = useState(3)
  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setlist(studioList)
  }, [])

  const showAllItems = () => {
    setOpen(!open)
    if (!open) {
      setvisible(studioList.length)
    } else {
      setvisible(3)
    }
  }

  const menuToggler = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <div className={styles.headerlogo}>
        <AiOutlineMenu onClick={menuToggler} className={styles.menu} />
        <GiMoebiusTriangle className={styles.icon} /> <h1>GummyRoll</h1>
      </div>
      <div className={`${styles.navigacion} ${menuOpen ? styles.active : ''}`}>
        <div className={styles.logo}>
          <AiOutlineMenu onClick={menuToggler} className={styles.menu} />
          <GiMoebiusTriangle className={styles.icon} /> <h1>GummyRoll</h1>
        </div>

        <nav className={styles.nav}>
          <ul>
            <li className={styles.active}>
              <a href="#">
                <RiHomeFill className={styles.icon} /> მთავარი
              </a>
            </li>
            <li>
              <a href="#">
                <MdVideoLibrary className={styles.icon} /> განაგრძე ყურება
                <p>08</p>
              </a>
            </li>
            <li>
              <a href="#">
                <FaBookOpen className={styles.icon} /> კატალოგი <p>13</p>
              </a>
            </li>
            <li>
              <a href="#">
                <FaHeart className={styles.icon} /> ფავორიტები <p>06</p>
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.subscriptions}>
          <h1>გამოწერილები</h1>
          <ul className={styles.subsList}>
            {list.slice(0, visible).map((item, index) => {
              return (
                <li key={index} className={styles.subsListItem}>
                  <img src={item.logo} alt="" />
                  <a href="#">{item.name}</a>
                </li>
              )
            })}
          </ul>
          <button onClick={showAllItems}>
            {open ? 'ნაკლების ნახვა' : 'ყველას ნახვა'}
          </button>
        </div>

        <div className={styles.settings}>
          <a href="#">
            <RiSettingsFill className={styles.icon} />
            პარამეტრები
          </a>
        </div>

        <button className={styles.registerBtn}>
          <IoMdLogIn className={styles.icon} />
          ავტორიზაცია
        </button>
      </div>
    </>
  )
}

export default Navigacion
