import { useState } from "react";
import axiosInstance from "../api/axios";
const ReceiptUpload = ({ transactionId }) => {
  const [file, setFile] = useState(null);

  const upload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("receipt", file);

    await axiosInstance.post(`/receipts/${transactionId}`, formData);

    alert("Receipt uploaded");
  };

  return (
    <div className="flex items-center gap-3">

      <input
        type="file"
        className="border p-1 rounded"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        onClick={upload}
        className="bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700"
      >
        Upload
      </button>

    </div>
  );
};

export default ReceiptUpload;