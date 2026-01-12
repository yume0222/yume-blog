import Sheet from "@/app/_components/Sheet";
import BlogList from "@/app/_components/BlogList";
import Hero from "@/app/_components/Hero";
import SheetStyles from "@/app/_components/Sheet/index.module.css";
import { getBlogList, getCategoryDetail } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Pagination from "@/app/_components/Pagination";
import { TOP_BLOG_LIMIT } from "@/app/_constants";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const category = await getCategoryDetail(params.id).catch(notFound);
  const { contents: blog, totalCount } = await getBlogList({
    limit: TOP_BLOG_LIMIT,
    filters: `category[equals]${category.id}`,
  });

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
            basePath={`/blog/category/${category.id}`}
          />
        </div>
      </Sheet>
    </>
  );
}
