import { useState } from "react";
import Category from "./Category";
import styles from "./CategoriesList.module.css";
export type Category = {
  id: number;
  en: {
    category: string;
    brand: string;
  };
  tc: {
    category: string;
    brand: string;
  };
  checked: boolean;
};
export default function CategoriesList() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      en: {
        category: "mobile phone",
        brand: "Apple",
      },
      tc: {
        category: "手機",
        brand: "蘋果",
      },
      complete: false,
    },
    {
      id: 2,
      en: {
        category: "tablet computer",
        brand: "samsung",
      },
      tc: {
        category: "平板電腦",
        brand: "三星",
      },
      complete: false,
    },
  ]);

  return (
    <>
      <div className={styles.categoryHeader}>Categories List</div>
      <div className={styles.categoriesList}>
        {categories.map((category) => {
          return <Category key={category.id} category={category} />;
        })}
      </div>
    </>
  );
}
