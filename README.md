# 💰 Finance Tracker

A **full-stack personal finance tracking application** that helps users manage their income, expenses, and financial habits efficiently.
The system allows users to record transactions, categorize spending, and analyze their financial behavior through a simple and responsive interface.

---

# 🚀 Features

* 📊 Track **income and expenses**
* 🏷️ Create and manage **custom categories**
* 🔍 View **transaction history**
* 📈 Monitor **financial activity**
* 🔐 Secure API with authentication
* ⚡ Fast backend powered by **Node.js and Prisma**
* 🎨 Clean UI built with **React + TailwindCSS**

---

# 🛠 Tech Stack

### Frontend

* **React.js**
* **Tailwind CSS**

### Backend

* **Node.js**
* **Express.js**
* **Prisma ORM**

### Database

* **PostgreSQL**

---

# 📂 Project Structure

```
Finance-Tracker
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend
│   ├── src
│   │   ├── controllers
        |---modules
│   │   ├── routes
│   │   ├── services
│   │   ├── middleware
│   │   └── server.js
│   │
│   ├── prisma
│   │   └── schema.prisma
│   │
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/finance-tracker.git
cd finance-tracker
```

---

# Backend Setup

### Install Dependencies

```bash
cd backend
npm install
```

### Setup Environment Variables

Create a `.env` file inside the backend folder:

```
DATABASE_URL="postgresql://user:password@localhost:5432/finance_db"
JWT_SECRET="your_secret_key"
PORT=5000
```

### Run Prisma Migration

```bash
npx prisma migrate dev
```

### Start Backend Server

```bash
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

# Frontend Setup

### Install Dependencies

```bash
cd frontend
npm install
```

### Start Frontend

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

# 🔐 Authentication

The application uses **JWT-based authentication** to secure API endpoints.
Users must authenticate to access protected routes.

---

# 📦 Database Schema (Prisma)

Example models:

* **User**
* **Transaction**
* **Category**
* **Budget**

These models allow structured tracking of financial data.

---

# 📸 Future Improvements

* 📊 Advanced financial analytics
* 📱 Mobile responsive dashboard
* 🤖 AI based spending insights
* 📅 Monthly budget tracking
* 📉 Spending trend visualization

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit changes
4. Open a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

Developed by **Soumojit**

---

⭐ If you found this project useful, consider giving it a **star on GitHub**!
