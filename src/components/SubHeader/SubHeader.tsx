import styles from "./SubHeader.module.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const subHeaders = [
  {
    name: "Today's Deals",
    path: "todayDeals",
    page: "TodayDeals",
  },
  {
    name: "Consumption Power",
    path: "consumptionPower",
    page: "ConsumptionPower",
  },
  {
    name: "Top Sell",
    path: "topSell",
    page: "TopSell",
  },
  {
    name: "Customer Service",
    path: "customerService",
    page: "CustomerService",
  },
];

export default function SubHeader() {
  return (
    <>
      <nav className={styles.subHeaders}>
        {subHeaders.map((subHeader) => {
          return (
            <Link to={`${subHeader.path}`}>
              <div className={styles.subHeader}>{subHeader.name}</div>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
{
  /* <div key={subHeader.name} className={styles.subHeader}>
{subHeader.name}
</div> */
}
