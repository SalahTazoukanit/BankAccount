// import axios from "axios";
// import { useState, useEffect } from "react";
// import Chart from "chart.js/auto";

// const Doughnut = () => {
//   const [transactions, setTransactions] = useState([]);

//   const token = localStorage.getItem("token");
//   const headers = {
//     Authorization: "Bearer " + token,
//   };

//   const getTransactions = () => {
//     axios
//       .get("http://127.0.0.1:8000/api/v1/transactions", { headers })
//       .then((response) => {
//         setTransactions(response.data.transactions);
//       });
//   };

//   useEffect(() => {
//     getTransactions();
//   }, []);

//   //   const data = {
//   //     labels: ["Red", "Blue", "Yellow"],
//   //     datasets: [
//   //       {
//   //         label: "My First Dataset",
//   //         data: [300, 50, 100],
//   //         backgroundColor: [
//   //           "rgb(255, 99, 132)",
//   //           "rgb(54, 162, 235)",
//   //           "rgb(255, 205, 86)",
//   //         ],
//   //         hoverOffset: 4,
//   //       },
//   //     ],
//   //   };

//   return <></>;
// };
// export default Doughnut;

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

const Doughnut = () => {
  const [transactions, setTransactions] = useState([]);
  const chartRef = useRef(null);

  const token = localStorage.getItem("token");
  const headers = {
    Authorization: "Bearer " + token,
  };

  const getTransactions = () => {
    axios
      .get("http://127.0.0.1:8000/api/v1/transactions", { headers })
      .then((response) => {
        setTransactions(response.data.transactions);
      });
  };

  useEffect(() => {
    getTransactions();
  }, []);

  useEffect(() => {
    if (transactions.length > 0) {
      const data = transactions.map((t) => t.amount); // Supposez que chaque transaction a un montant

      const chartData = {
        datasets: [
          {
            label: "Montants des transactions",
            data: data,
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(153, 102, 255)",
              "rgb(255, 159, 64)",
            ],
            hoverOffset: 4,
          },
        ],
      };

      // Initialiser le graphique si une référence existe
      const ctx = chartRef.current.getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: chartData,
      });
    }
  }, [transactions]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Doughnut;
