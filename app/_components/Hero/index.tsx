import styles from "./index.module.css";

type Props = {
  text: React.ReactNode;
}

export default function Hero({ text }: Props) {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Yume Blog</h1>
      <p className={styles.sub}>{text}</p>
    </section>
  )
}
