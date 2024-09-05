import { useEffect, useState } from "react";
import axios from "axios";

const Calculate = () => {
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
      <div className="flex w-full justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-5 mt-10">
          <div className="flex flex-col justify-center items-center border rounded-lg p-5 text-white bg-green-500 w-full">
            <h3>Crédit :</h3>
            <h2>{incomings + "€"}</h2>
            <p className="text-white">Total des entrées</p>
          </div>
          <div className="flex flex-col justify-center items-center border rounded-lg p-5 text-white bg-red-500 w-full">
            <h3>Débit :</h3>
            <h2>{"-" + outgoings + "€"}</h2>
            <p className="text-white">Total des depenses faites</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border rounded-lg p-5 text-white bg-yellow-500 w-80 h-32">
          <h3>Difference :</h3>
          {difference > 0 ? (
            <h2 className="text-green-600">{difference + "€"}</h2>
          ) : (
            <h2 className="text-red-600">{difference + "€"}</h2>
          )}
          <p className="text-white">Porte monnaie</p>
        </div>
      </div>
    </>
  );
};

export default Calculate;
