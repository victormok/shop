import CategoriesList from "../../components/CategoriesList/CategoriesList";
import ProductList from "../../components/ProductList/ProductList";
import styles from "./Home.module.css";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.advertise}></div>
        <div className={styles.body}>
          <div className={styles.leftList}>
            <CategoriesList />
          </div>
          <ProductList />
        </div>
      </div>

      <Outlet />
    </>
  );
}
