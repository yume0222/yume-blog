import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a
              href="https://portfolio-nextjs-eta-ashy.vercel.app/"
              target="_blank"
            >
              about
            </a>
          </li>
          <li className={styles.item}>
            <a href="/blog">blog</a>
          </li>
        </ul>
        <p className={styles.copyright}>
          Copyright © 2026 Yume Blog. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
