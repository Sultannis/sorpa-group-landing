import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.mainLogoWrapper}>
            <Image
              src="/sorpa-logo.svg"
              alt="Vercel Logo"
              className={styles.mainLogo}
              width={1}
              height={1}
              priority
            />
          </div>
          <div className={styles.general}>
            <h1>Sorpa group</h1>
            <h3>Support email</h3>
            <span>sultan.fb29@gmail.com</span>
          </div>
        </header>
        <section className={styles.mobileGames}>
          <h1>Mobile games</h1>
          <ul className={styles.mobileGamesList}>
            <li className={styles.mobileGameItem}>
              <Image
                src="/leep-up-logo.svg"
                alt="Leep up logo"
                className={styles.mobileGameLogo}
                width={1}
                height={1}
                priority
              />
              <div className={styles.mobileGameInfo}>
                <h2 className={styles.mobileGameName}>LeepUp</h2>
                <span className={styles.mobileGameSubtitle}>
                  Rise upwards with each step
                </span>
                <div className={styles.mobileGameLinks}>
                  <a
                    className={styles.mobileGameLinkButton}
                    href="https://play.google.com/store/apps/details?id=com.sorpa.leepup"
                  >
                    <Image
                      src="/google-icon-dark.svg"
                      alt="Google Play"
                      className={styles.mobileGameGoogleIconDark}
                      width={1}
                      height={1}
                      priority
                    />
                    <Image
                      src="/google-icon-light.svg"
                      alt="Google Play"
                      className={styles.mobileGameGoogleIconLight}
                      width={1}
                      height={1}
                      priority
                    />
                  </a>
                  <a
                    className={styles.mobileGameLinkButton}
                    href="https://apps.apple.com/us/app/leepup/id1580561961"
                  >
                    <Image
                      src="/apple-icon-dark.svg"
                      alt="App Store"
                      className={styles.mobileGameAppleIconDark}
                      width={1}
                      height={1}
                      priority
                    />
                    <Image
                      src="/apple-icon-light.svg"
                      alt="App Store"
                      className={styles.mobileGameAppleIconLight}
                      width={1}
                      height={1}
                      priority
                    />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
