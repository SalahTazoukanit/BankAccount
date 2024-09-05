import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTransaction = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();

  const addTransaction = (e) => {
    e.preventDefault();
    const transaction = {
      title: title,
      description: description,
      date: date,
      amount: amount,
      type: type,
    };

    const token = localStorage.getItem("token");
    const headers = {
      Authorization: "Bearer " + token,
    };

    axios
      .post("http://127.0.0.1:8000/api/v1/transactions/post", transaction, {
        headers,
      })
      .then((response) => {
        console.log(response);
        alert(response.data.message);
        navigate("/dashboard");
      });
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mt-16 gap-10">
          <h1 className="">Ajouter votre transaction</h1>
          <form onSubmit={(e) => addTransaction(e)} className="flex">
            <div className="flex flex-col justify-center items-center gap-10">
              <label htmlFor="">
                Titre <br />
                <input
                  className="border rounded w-80"
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  name="title"
                />
              </label>
              <label htmlFor="">
                Description <br />
                <input
                  className="border rounded w-80"
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  name="description"
                />
              </label>
              <label htmlFor="">
                Total <br />
                <input
                  className="border rounded w-80"
                  onChange={(e) => setAmount(e.target.value)}
                  type="text"
                  name="amount"
                />
              </label>
              <label htmlFor="">
                Date
                <br />
                <input
                  className="border rounded w-80"
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  name="date"
                />
              </label>
              <label htmlFor="">
                Type
                <br />
                <select
                  className="border rounded w-80"
                  onChange={(e) => setType(e.target.value)}
                  name="type"
                >
                  <option value=""></option>
                  <option value="incomings">Crédit</option>
                  <option value="outgo">Débit</option>
                </select>
              </label>
              <div className="flex border w-80 justify-center items-center bg-green-500 text-white">
                <button type="submit">S'Enregistrer</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddTransaction;
