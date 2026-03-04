import { attachReceipt, getReceipt } from "./receipt.service.js";

export const uploadReceipt = async (req, res) => {
  try {
    const { transactionId } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const fileUrl = `/uploads/${req.file.filename}`;

    const receipt = await attachReceipt(transactionId, fileUrl);

    res.status(201).json(receipt);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const fetchReceipt = async (req, res) => {
  try {
    const receipt = await getReceipt(req.params.transactionId);
    res.json(receipt);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};