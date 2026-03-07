import { useEffect, useState } from "react";
import transactionService from "../services/transactionService";
import TransactionForm from "../components/TransactionForm";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const load = async () => {
    const data = await transactionService.getTransactions();
    setTransactions(data);
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id) => {
    await transactionService.deleteTransaction(id);
    load();
  };

  return (
    <div>

      <TransactionForm refresh={load} />

      <div className="bg-white shadow rounded p-4 overflow-x-auto">

        <h2 className="font-semibold mb-3">Transactions</h2>

        <table className="w-full text-left min-w-[500px]">

          <thead>
            <tr className="border-b">
              <th>Description</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((t) => (
              <tr key={t.id} className="border-b">

                <td>{t.description}</td>
                <td>₹ {t.amount}</td>
                <td>{t.type}</td>

                <td>
                  <button
                    onClick={() => remove(t.id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Transactions;