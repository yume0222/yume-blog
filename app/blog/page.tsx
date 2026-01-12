import BlogList from "../_components/BlogList";
import Hero from "../_components/Hero";
import Pagination from "../_components/Pagination";
import SearchField from "../_components/SearchField";
import Sheet from "../_components/Sheet";
import SheetStyles from "../_components/Sheet/index.module.css";
import { TOP_BLOG_LIMIT } from "../_constants";
import { getBlogList } from "../_libs/microcms";
import styles from "./page.module.css";

export default async function Page() {
  const { contents: blog, totalCount } = await getBlogList({
    limit: TOP_BLOG_LIMIT,
  });

  return (
    <>
      <Sheet className={SheetStyles.containerLg}>
        <Hero text={"A blog about Yume, birds, food, and more."} />
        <SearchField />
        <div className={styles.blogList}>
          <BlogList blog={blog} />
        </div>
        <div className={styles.pagination}>
          <Pagination totalCount={totalCount} />
        </div>
      </Sheet>
    </>
  );
}
