import styles from "./page.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <div className={styles.imgText}>
            <div className={styles.title}>
              Welcome to
            </div>
            <div className={styles.logo}>
              Hateno World
            </div>
            <div className={styles.joinNowButton}>
              <Link href='/login'>JOIN NOW</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
