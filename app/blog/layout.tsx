import styles from "./page.module.css";

export const metadata = {
  title: 'ブログ',
};

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function BlogLayout({ children }: Props) {
  return <>{children}</>;
}
