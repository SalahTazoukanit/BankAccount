import axios from "axios";
import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const Graphic = () => {
  const [transactions, setTransactions] = useState([]);
  const [incomings, setIncomings] = useState("");
  const [outgo, setOutgo] = useState("");

  const token = localStorage.getItem("token");
  const headers = {
    Authorization: "Bearer " + token,
  };
  const getTransactions = () => {
    axios
      .get("http://127.0.0.1:8000/api/v1/transactions", { headers })
      .then((response) => {
        console.log(response.data.transactions);
        setTransactions(response.data.transactions);

        // setIncomings(response.data.transactions);
      });
  };
  

  useEffect(() => {
    getTransactions();
  }, []);

  // data: transactions.map((transaction) => transaction.amount),
  return (
    <>
      <Doughnut
        data={{
          labels: transactions.map((transaction) => transaction.label),
          datasets: [
            {
              label: "",
              data: [300, 50, 100],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
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
