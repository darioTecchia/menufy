import type { ReactElement } from 'react'
import LogoFace from '../components/logo/LogoFace'
import DefaultLayout from '../layouts/DefaultLayout'

import styles from '../styles/info.module.scss'

export default function Index() {
  return (
    <div className={styles.info}>
      <div className="logo">
        <LogoFace />
      </div>
      <div className={styles.infoBox}>
        <span>Madamé Lounge Bar</span>
        <br /><br />
        <span>
          <a target="_blank" href="https://www.google.com/maps/place/Madam%C3%A8/@40.625488,14.5672334,15z/data=!4m2!3m1!1s0x0:0x6fdb417377d98e37?sa=X&ved=2ahUKEwiNi-Td1-XpAhVQTxUIHc0hA-gQ_BIwCnoECBQQCA">Piazza Generale Avitabile, 80051 Agerola NA</a>
        </span>
        <br /><br />
        <span><a href="tel:+39 329 398 5389">+39 329 398 5389</a></span>
      </div>
    </div>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout title='Madamé - Info'>
      {page}
    </DefaultLayout>
  )
}