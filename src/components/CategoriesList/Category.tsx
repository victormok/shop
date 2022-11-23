import { useState } from "react";
import styles from "./CategoriesList.module.css";

export default function Category({ category }: any) {
  return (
    <div className={styles.category} key={category.id}>
      <input
        type="checkbox"
        checked={category.checked}
        id={category.en.category}
        name={category.en.category}
      ></input>
      <div>{category.en.category}</div>
    </div>
  );
}
