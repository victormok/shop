import { SlMagnifier } from "react-icons/sl";
import styles from "./SearchBar.module.css";
export default function SearchBar() {
  return (
    <div className={styles.searchCon}>
      <div className={styles.searchBar}>
        <select name="categories" id="categories" className={styles.selector}>
          <option value="all">All</option>
        </select>
        <input
          type="text"
          id="input"
          name="input"
          className={styles.input}
        ></input>
        <button type="submit" value="Submit" className={styles.searchBtn}>
          <SlMagnifier className={styles.searchBtnLogo} />
        </button>
      </div>
    </div>
  );
}
