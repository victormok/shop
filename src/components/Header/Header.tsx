import React from "react";
import styles from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar";
import shopLogo from "./shopLogo.png";
import americanLogo from "./american.png";
import { GrLocation } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className={styles.navBar}>
        <Link to="/">
          <img className={styles.shopLogo} src={shopLogo} alt="shopLogo" />
        </Link>
        <div className={styles.location}>
          <GrLocation size={18} className={styles.locationLogo} />
          <div className={styles.deliverBox}>
            <div className={styles.deliverTo}>Deliver to</div>
            <div className={styles.country}>Hong Kong</div>
          </div>
        </div>
        <SearchBar />
        <div className={styles.language}>
          <img
            className={styles.americanLogo}
            src={americanLogo}
            alt="americanLogo"
          />
          EN
        </div>
        <div className={styles.account}>
          <div className={styles.status}>Hello, sign in</div>
          <div className={styles.accountInfo}>Account & Lists</div>
        </div>
        <div className={styles.returnOrder}>
          <span className={styles.returns}>Returns</span>
          <span className={styles.orders}>& Orders</span>
        </div>
        <div className={styles.cart}>
          <FiShoppingCart size={30} className={styles.cartLogo} />
          <div className={styles.cartCount}>0</div>
        </div>
      </div>
    </div>
  );
}
