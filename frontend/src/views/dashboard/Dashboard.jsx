import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Graphic from "../../components/graphic/Graphic";
import Calculate from "../../components/calculate/Calculate";
import Transaction from "../../components/transaction/Transaction";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  const token = localStorage.getItem("token");
  const headers = {
    Authorization: "Bearer " + token,
  };
  const navigate = useNavigate();

  const logout = () => {
    axios
      .post("http://127.0.0.1:8000/api/v1/users/logout", {}, { headers })
      .then((response) => {
        console.log(response);
        alert(response.data.message);
        localStorage.removeItem("token");
        navigate("/");
      });
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

  return (
    <>
      <div className="flex justify-around gap-10 m-2">
        <div className="">
          <img
            className="w-40"
            src="src/assets/images/SmartWallet.png"
            alt=""
          />
        </div>

        <div className="flex flex-col m-5">
          <h1>Bienvenue sur le Dashboard </h1>
          <div className="flex border rounded p-1 w-80 justify-center items-center bg-green-500 text-white">
            <NavLink to={"/dashboard/add-transaction"}>
              <button>Ajouter une transaction</button>
            </NavLink>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex border rounded p-1 justify-center items-center bg-red-500 text-white">
            <button onClick={logout}>Déconnexion</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-center p-10 gap-10">
        <div>
          <Graphic />
        </div>
        <div>
          <Calculate />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 m-5">
        <h2 className="text-center">Transactions effectuées</h2>
        <div className="flex gap-3 w-full">
          <h3 className="w-1/6">Nom transaction</h3>
          <h3 className="w-1/6">Description</h3>
          <h3 className="w-1/6">Total</h3>
          <h3 className="w-1/6">Type</h3>
          <h3 className="w-1/6">Date</h3>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 m-5">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </>
  );
};
export default Dashboard;
