import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/header/Header";
const TransactionDetail = () => {
  const [transaction, setTransaction] = useState({});
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: "Bearer " + token,
  };
  const getTransactionById = () => {
    axios
      .get(`http://127.0.0.1:8000/api/v1/transactions/${id}`, { headers })
      .then((response) => {
        console.log(response.data.transaction);
        setTransaction(response.data.transaction);
      });
  };

  useEffect(() => {
    getTransactionById();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col justify-center items-center">
        <div className="w-full max-w-lg">
          <button
            className="mb-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-300"
            onClick={(e) => window.history.back(e)}
          >
            Revenir en arrière
          </button>
          <div className="border border-gray-300 shadow-lg rounded-lg bg-white">
            <div className="flex flex-col gap-4 p-6">
              <h2 className="text-2xl font-bold text-center text-gray-700">
                {transaction.title}
              </h2>
              <div className="flex">
                <p className="text-gray-600">
                  Détail de la transaction :
                  <span className="text-gray-400 block">
                    {transaction.description}
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-5">
                <h3 className="text-lg font-semibold text-gray-600">
                  Montant :
                </h3>
                {transaction.type === "incomings" ? (
                  <h3 className="text-2xl font-bold text-green-500">
                    {"+" + transaction.amount + " €"}
                  </h3>
                ) : (
                  <h3 className="text-2xl font-bold text-red-500">
                    {"-" + transaction.amount + " €"}
                  </h3>
                )}
                <span
                  className={`px-2 py-1 text-sm font-medium rounded ${
                    transaction.type === "incomings"
                      ? "bg-green-100 text-green-500"
                      : "bg-red-100 text-red-500"
                  }`}
                >
                  {transaction.type === "incomings" ? "Entrée" : "Sortie"}
                </span>
              </div>
              <h3 className="text-gray-500 text-sm">{transaction.date}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TransactionDetail;
