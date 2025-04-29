import React, { useState, useEffect } from "react";
import axios from 'axios';

const Orders = () => {
  const [currOrder, setCurrOrder] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:3000/currOrder")
    .then((res) => {
      console.log("Order Data:", res.data);
      setCurrOrder(res.data);
    })
    .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  return (
    <div className="orders">
      <div className="no-orders">
        <p>You orders today</p>

        {currOrder.map((stock, index) => (
          <tr key={index}>
            <td>{stock.name}</td>
            <td>{stock.price}</td>
            <td>{stock.quantity}</td>
          </tr>
        ))}
      </div>
    </div>
  );
};

export default Orders;
