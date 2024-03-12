import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.copyright}>@2024 Cmy. All rights reserved.</div>
      <div className={styles.socialIcons}>
        <Image src="/welcome/1.png" height={15} width={15} className={styles.socialIcon} alt="cmy" />
        <Image src="/welcome/2.png" height={15} width={15} className={styles.socialIcon} alt="cmy" />
        <Image src="/welcome/3.png" height={15} width={15} className={styles.socialIcon} alt="cmy" />
        <Image src="/welcome/4.png" height={15} width={15} className={styles.socialIcon} alt="cmy" />
      </div>
    </div>
  )
}

export default Footer