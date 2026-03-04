export const isDuplicateTransaction = (existing, incoming) => {
  return existing.some((txn) =>
    txn.date === incoming.date &&
    Number(txn.amount) === Number(incoming.amount) &&
    txn.description === incoming.description
  );
};