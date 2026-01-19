import Link from "next/link";
import styles from "./index.module.css";
import { Blog } from "@/app/_libs/microcms";
import Category from "../Category";
import Date from "../Date";
import Image from "next/image";

type Props = {
  blog: Blog[];
};

export default function BlogList({ blog }: Props) {
  if (blog.length === 0) {
    return <p>記事がありません。</p>;
  }

  return (
    <>
      <ul className={styles.list}>
        {blog.map((article) => (
          <li key={article.id}>
            <Link href={`/blog/${article.id}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={article.thumbnail.url}
                  alt=""
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.category}>
                <Category category={article.category} />
              </div>
              <div className={styles.title}>{article.title}</div>
              <div className={styles.date}>
                <Date date={article.publishedAt ?? article.createdAt} />
              </div>
              <p className={styles.desc}>{article.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
