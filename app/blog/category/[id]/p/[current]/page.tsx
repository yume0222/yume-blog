import { notFound } from "next/navigation";
import BlogList from "@/app/_components/BlogList";
import Hero from "@/app/_components/Hero";
import Pagination from "@/app/_components/Pagination";
import Sheet from "@/app/_components/Sheet";
import SheetStyles from "@/app/_components/Sheet/index.module.css";
import { TOP_BLOG_LIMIT } from "@/app/_constants";
import { getBlogList, getCategoryDetail } from "@/app/_libs/microcms";
import styles from "./page.module.css";

type Props = {
  params: {
    id: string;
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const current = parseInt(params.current, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const category = await getCategoryDetail(params.id).catch(notFound);

  const { contents: blog, totalCount } = await getBlogList({
    filters: `category[equals]${category.id}`,
    limit: TOP_BLOG_LIMIT,
    offset: TOP_BLOG_LIMIT * (current - 1),
  });

  if (blog.length === 0) {
    notFound();
  }

  return (
    <>
      <Sheet className={SheetStyles.containerLg}>
        <Hero text={`「${category.name}」の一覧`} />
        <div className={styles.blogList}>
          <BlogList blog={blog} />
        </div>
        <div className={styles.pagination}>
          <Pagination
            totalCount={totalCount}
            current={current}
            basePath={`/blog/category/${category.id}`}
          />
        </div>
      </Sheet>
    </>
  );
}
