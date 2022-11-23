import { useState } from "react";
import Product from "./Product";
import styles from "./ProductList.module.css";
import iphone from "../../imgs/iphone-black.jpg";
import samsung from "../../imgs/samsung.jpg";

export default function ProductList() {
  const [products, setProducts] = useState([
    {
      id: 1,
      price: 5000,
      currency: "HKD",
      discountCode: "20% off",
      img: iphone,
      en: {
        description: "High performance, high quality, cheap and practical",
        category: "phone",
        brand: "apple",
        placeOfProduction: "American",
      },
      tc: {
        description: "高性能, 高質感, 便宜實用",
        category: "手機",
        brand: "蘋果",
        placeOfProduction: "美國",
      },
    },
    {
      id: 2,
      price: 4500,
      currency: "HKD",
      discountCode: "20% off",
      img: samsung,
      en: {
        description: "High performance, high quality, cheap and practical",
        category: "phone",
        brand: "samsung",
        placeOfProduction: "Korea",
      },
      tc: {
        description: "高性能, 高質感, 便宜實用",
        category: "手機",
        brand: "三星",
        placeOfProduction: "韓國",
      },
    },
  ]);

  return (
    <>
      <div className={styles.productList}>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}
