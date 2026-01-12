import { notFound } from "next/navigation";
import BlogList from "@/app/_components/BlogList";
import Hero from "@/app/_components/Hero";
import Pagination from "@/app/_components/Pagination";
import Sheet from "@/app/_components/Sheet";
import SheetStyles from "@/app/_components/Sheet/index.module.css";
import { TOP_BLOG_LIMIT } from "@/app/_constants";
import { getBlogList } from "@/app/_libs/microcms";
import styles from "./page.module.css";

type Props = {
  params: {
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const current = parseInt(params.current, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: blog, totalCount } = await getBlogList({
    limit: TOP_BLOG_LIMIT,
    offset: TOP_BLOG_LIMIT * (current - 1),
  });

  if (blog.length === 0) {
    notFound();
  }

  return (
    <>
      <Sheet className={SheetStyles.containerLg}>
        <Hero text={"A blog about Yume, birds, food, and more."} />
        <div className={styles.blogList}>
          <BlogList blog={blog} />
        </div>
        <div className={styles.pagination}>
          <Pagination totalCount={totalCount} current={current} />
        </div>
      </Sheet>
    </>
  );
}
