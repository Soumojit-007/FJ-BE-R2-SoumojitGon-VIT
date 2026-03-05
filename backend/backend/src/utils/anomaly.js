export const calculateAnomaly = (transactions, newAmount) => {
  if (transactions.length < 5) return false;

  const amounts = transactions.map(t => Number(t.amount));
  const mean = amounts.reduce((a, b) => a + b, 0) / amounts.length;

  const variance =
    amounts.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) /
    amounts.length;

  const stdDev = Math.sqrt(variance);

  const zScore = (newAmount - mean) / stdDev;

  return Math.abs(zScore) > 3;
};