import { getBlogDetail, getBlogList } from "@/app/_libs/microcms";
import styles from "./page.module.css";
import Article from "@/app/_components/Article";
import { notFound } from "next/navigation";
import Sheet from "@/app/_components/Sheet";
import SheetStyles from "@/app/_components/Sheet/index.module.css";
import RecommendedArticles from "@/app/_components/RecommendedArticles";

type Props = {
  params: {
    slug: string;
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getBlogDetail(params.slug).catch(notFound);
  const { contents: blog } = await getBlogList({
    filters: `category[equals]${data.category.id}`,
  });

  return (
    <Sheet className={SheetStyles.containerSm}>
      <Article data={data} />
      <div className={styles.title}>Recommended Articles</div>
      <div className={styles.blogList}>
        <RecommendedArticles blog={blog} />
      </div>
    </Sheet>
  );
}
