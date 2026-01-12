import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/blog">Yume Blog</a>
      </div>
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
    </header>
  );
}
