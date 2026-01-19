import styles from "./index.module.css";
import type { Blog } from "@/app/_libs/microcms";
import Category from "../Category";
import Date from "../Date";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: Blog;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <Link href={`/blog/category/${data.category.id}`}>
        <Category category={data.category} />
      </Link>
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.date}>
        <Date date={data.publishedAt ?? data.createdAt} />
      </div>
      <div className={styles.imageWrapper}>
        <Image src={data.thumbnail.url} alt="" fill className={styles.image} />
      </div>
      <p className={styles.desc}>{data.description}</p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
    </main>
  );
}
