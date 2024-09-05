import { NavLink } from "react-router-dom";
const Transaction = ({ transaction }) => {
  return (
    <>
      <div className="flex items-center justify-center gap-3 border rounded w-full p-2">
        <h3 className="w-1/6">{transaction.title}</h3>
        <h3 className="w-1/6">{transaction.description}</h3>
        {transaction.type === "incomings" ? (
          <h3 className="text-green-500 w-1/6">
            {"+" + transaction.amount + " €"}
          </h3>
        ) : (
          <h3 className="text-red-500 w-1/6">
            {"-" + transaction.amount + " €"}
          </h3>
        )}

        {transaction.type === "incomings" ? (
          <h3 className="text-green-500 w-1/6">{transaction.type}</h3>
        ) : (
          <h3 className="text-red-500 w-1/6">{transaction.type}</h3>
        )}
        <h3 className="w-1/6">{transaction.date}</h3>
        <div className="flex gap-5">
          <NavLink>
            <button className="rounded bg-green-950 text-white">
              Voir plus
            </button>
          </NavLink>
          <button
            onClick={(e) => deleteTransaction(e, transaction.id)}
            className="rounded bg-red-600 text-white"
          >
            Supprimer
          </button>
        </div>
      </div>
    </>
  );
};
export default Transaction;
