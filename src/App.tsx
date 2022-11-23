import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";

import Header from "./components/Header/Header";

import SubHeader from "./components/SubHeader/SubHeader";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ConsumptionPower from "./pages/ConsumptionPower/ConsumptionPower";
import CustomerService from "./pages/CustomerService/CustomerService";
import TodayDeals from "./pages/TodayDeals/TodayDeals";
import TopSell from "./pages/TopSell/TopSell";

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todayDeals" element={<TodayDeals />} />
        <Route path="/consumptionPower" element={<ConsumptionPower />} />
        <Route path="/topSell" element={<TopSell />} />
        <Route path="/customerService" element={<CustomerService />} />
        <Route path="*" element={<>404 : Page Not Found</>} />
      </Routes>
    </div>
  );
}

export default App;
