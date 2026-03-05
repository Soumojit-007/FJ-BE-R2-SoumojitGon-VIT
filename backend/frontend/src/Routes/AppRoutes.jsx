import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Transactions from "../pages/Transactions";
import Categories from "../pages/Categories";
import Budgets from "../pages/Budgets";
import Reports from "../pages/Reports";
import AIInsights from "../pages/AIInsights";
import BankImport from "../pages/BankImport";
// import OAuthSuccess from "../pages/OAuthSuccess";
import ProtectedRoute from "../components/ProtectedRoute";
import DashboardLayout from "../layouts/DashboardLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/oauth-success" element={<OAuthSuccess />} /> */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/transactions"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Transactions />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/categories"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Categories />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/budgets"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Budgets />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Reports />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/ai-insights"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <AIInsights />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/bank-import"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <BankImport />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;