import logo1 from '../assets/studio-logos/studio1.png'
import logo2 from '../assets/studio-logos/studio2.png'
import logo3 from '../assets/studio-logos/studio3.png'
import logo4 from '../assets/studio-logos/studio4.png'
import logo5 from '../assets/studio-logos/studio5.png'
import logo6 from '../assets/studio-logos/studio6.png'

export type studioListType = { logo: string; name: string }[]

export const studioList: studioListType = [
  { logo: logo1, name: 'Madhouse' },
  { logo: logo2, name: 'Studio Bones' },
  { logo: logo3, name: 'J.C STAFF' },
  { logo: logo4, name: 'Wit Studio' },
  { logo: logo5, name: 'MAPPA' },
  { logo: logo6, name: 'A-1 Pictures' },
  { logo: logo1, name: 'Kyoto Animacion' },
  { logo: logo2, name: 'Ufotable' },
  { logo: logo3, name: 'Studio Ghibli' },
]
