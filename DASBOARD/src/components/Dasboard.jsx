import React from "react";
import { Routes, Route } from "react-router-dom";
import WatchList from "./WatchList";
import Summery from "./Summery";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import App from "./App";

import { GeneralContextProvider } from "./GeneralContext";
import { GeneralContextForSellProvider } from "./GeneralContextForSell";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
      <GeneralContextForSellProvider>
          <WatchList />
      </GeneralContextForSellProvider>
      </GeneralContextProvider>

      <div className="content">
        <Routes>
          <Route path="/" element={<Summery />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/holding" element={<Holdings />} />
          <Route path="/position" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<App />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
