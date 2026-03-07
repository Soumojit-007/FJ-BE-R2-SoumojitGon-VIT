import { useState } from "react";
import axios from "../api/axios";

const BankImport = () => {
  const [file, setFile] = useState(null);

  const upload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    await axios.post("/bank/import", formData);

    alert("Bank statement uploaded");
  };

  return (
    <div className="bg-white shadow rounded p-4 md:p-6 w-full max-w-md">

      <h2 className="font-semibold mb-4">
        Import Bank Statement
      </h2>

      <input
        type="file"
        className="border p-2 w-full mb-3"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        onClick={upload}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Upload
      </button>

    </div>
  );
};

export default BankImport;