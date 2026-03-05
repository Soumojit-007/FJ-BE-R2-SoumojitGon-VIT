export const budgetExceededTemplate = (name, category, limit) => ({
  subject: "⚠ Budget Exceeded",
  text: `Hi ${name}, you exceeded your ${category} budget of ₹${limit}.`,
  html: `
    <h3>Budget Alert</h3>
    <p>Hi ${name},</p>
    <p>You have exceeded your <strong>${category}</strong> budget.</p>
    <p>Limit: ₹${limit}</p>
  `,
});

export const monthlyReportTemplate = (name, income, expense) => ({
  subject: "📊 Monthly Financial Report",
  text: `Income: ₹${income}, Expenses: ₹${expense}`,
  html: `
    <h2>Monthly Summary</h2>
    <p>Income: ₹${income}</p>
    <p>Expenses: ₹${expense}</p>
  `,
});