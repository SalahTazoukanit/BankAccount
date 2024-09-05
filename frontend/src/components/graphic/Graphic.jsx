import axios from "axios";
import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const Graphic = () => {
  const [transactions, setTransactions] = useState([]);
  const [incomings, setIncomings] = useState(0);
  const [outgoings, setOutgoings] = useState(0);
  const [difference, setDifference] = useState(0);
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: "Bearer " + token,
  };

  const getTransactions = () => {
    axios
      .get("http://127.0.0.1:8000/api/v1/transactions", { headers })
      .then((response) => {
        const transactionsData = response.data.transactions;
        setTransactions(transactionsData);

        let totalIncomings = 0;
        let totalOutgoings = 0;

        transactionsData.forEach((transaction) => {
          if (transaction.type === "incomings") {
            totalIncomings += transaction.amount;
          } else if (transaction.type === "outgo") {
            totalOutgoings += transaction.amount;
          }
        });

        let difference = totalIncomings - totalOutgoings;

        setIncomings(totalIncomings);
        setOutgoings(totalOutgoings);
        setDifference(difference);
      });
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <>
      <Doughnut
        data={{
          labels: ["Depenses", "Revenues", "Restant"],
          datasets: [
            {
              label: ["SmartWallet"],
              data: [outgoings, incomings, difference],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(0, 128, 0)",
                "rgb(255, 205, 86)",
              ],
              hoverOffset: 4,
            },
          ],
        }}
      />
    </>
  );
};
export default Graphic;
