import Link from "next/link";
import styles from "./index.module.css";
import { TOP_BLOG_LIMIT } from "@/app/_constants";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

export default function Pagination({
  totalCount,
  current = 1,
  basePath = "/blog",
}: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / TOP_BLOG_LIMIT) },
    (_, i) => i + 1
  );

  return (
    <nav>
      <ul className={styles.list}>
        {pages.map((p) => (
          <li className={styles.item} key={p}>
            {current !== p ? (
              <Link href={`${basePath}/p/${p}`} className={styles.link}>
                {p}
              </Link>
            ) : (
              <span className={`${styles.link} ${styles.current}`}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
