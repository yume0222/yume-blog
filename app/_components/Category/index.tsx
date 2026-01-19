import styles from "./index.module.css";
import type { Category } from "@/app/_libs/microcms";

type Props = {
  category: Category;
};

export default function Category({ category }: Props) {
  let className = styles.tag;
  switch (category.name) {
    case "鳥":
      className += ` ${styles.tagBird}`;
      break;
    case "食":
      className += ` ${styles.tagFood}`;
      break;
    case "創":
      className += ` ${styles.tagMake}`;
      break;
    case "その他":
      className += ` ${styles.tagOthers}`;
      break;
  }
  return <span className={className}>{category.name}</span>;
}
