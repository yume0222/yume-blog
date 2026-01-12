import { BLOG_LIST_LIMIT } from "@/app/_constants";
import BlogList from "@/app/_components/BlogList";
import Hero from "@/app/_components/Hero";
import SearchField from "@/app/_components/SearchField";
import Sheet from "@/app/_components/Sheet";
import SheetStyles from "@/app/_components/Sheet/index.module.css";
import { getBlogList } from "@/app/_libs/microcms";
import styles from "./page.module.css";

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const { contents: blog } = await getBlogList({
    limit: BLOG_LIST_LIMIT,
    q: searchParams.q,
  });

  return (
    <Sheet className={SheetStyles.containerLg}>
      <Hero text={"A blog about Yume, birds, food, and more."} />
      <SearchField />
      <div className={styles.blogList}>
        <BlogList blog={blog} />
      </div>
    </Sheet>
  );
}
