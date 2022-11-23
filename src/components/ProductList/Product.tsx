import styles from "./ProductList.module.css";

export default function Product({ product }: any) {
  function amount(price: number, discountCode: string) {
    const [rate] = discountCode.split("%", 1);
    const discountRate = 1 - parseInt(rate) / 100;
    return <div>{price * discountRate}</div>;
  }
  return (
    <>
      <div className={styles.product}>
        <div className={styles.productImg}>
          <img src={product.img} alt="shopLogo" />
        </div>
        <div>
          <div className={styles.description}>{product.en.description}</div>
          <div className={styles.brand}>Brand : {product.en.brand}</div>
          <div className={styles.discount}>{product.discountCode}</div>
        </div>
      </div>
    </>
  );
}
