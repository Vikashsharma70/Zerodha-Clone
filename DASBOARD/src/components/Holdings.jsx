import React, { useEffect, useState } from "react";
import axios from "axios";
import Summary from "./Summery";
import { VerticalGraph } from "./VerticalGraph";


export default function Holdings() {
  const [allHoldings, setAllHoldings] = useState([]);
  const [currOrder, setCurrOrder] = useState([]); // Initialize with an empty array

  useEffect(() => {
    // Fetch holdings data
    axios
      .get("http://localhost:3000/allHoldings")
      .then((res) => {
        console.log("Holdings Data:", res.data);
        setAllHoldings(res.data);
      })
      .catch((error) => console.error("Error fetching holdings:", error));

    // Fetch current orders data
    axios
    .get("http://localhost:3000/allholding")
    .then((res) => {
      console.log("Holdings Data:", res.data);
      setAllHoldings(res.data.holdings);  // Make sure to use the correct property name from the response
    })
    .catch((error) => console.error("Error fetching holdings:", error));

  }, []);

  const totalCurValue = allHoldings.reduce((sum, stock) => sum + stock.price * stock.qty, 0);
  const totalInvestment = allHoldings.reduce((acc, stock) => acc + stock.avg * stock.qty, 0);

  // // Calculate P&L (Profit/Loss)
  const profitLoss = totalCurValue - totalInvestment;

  // // Calculate P&L Percentage
  const profitLossPercentage = totalInvestment
    ? ((profitLoss / totalInvestment) * 100).toFixed(2)
    : "0.00";

    const labels = allHoldings.map((subArray) =>['name']);

    const data = {
      labels,
      datasets: [{
        label: 'Stock name',
        data: allHoldings.map((subArray) => subArray.price),
        backgroundColor: 'rgba(255,99,132,0.5',
      },
    ],
    };

  return (
    <> 

      <h3 className="title">Holdings ({allHoldings.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Orders Table */}
      {currOrder.length > 0 && (
        <div className="order-table">
          <h4>New Orders</h4>
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {currOrder.map((stock, index) => (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.price}</td>
                  <td>{stock.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Investment Summary */}
      <div className="row">
        <div className="col">
          <h5>
            {totalInvestment.toFixed(2)}
            <span>55</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {totalCurValue.toFixed(2)}
            <span> {allHoldings.length}</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>
            {profitLoss.toFixed(2)} ({profitLossPercentage}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data}/>
    </>
  );
}
