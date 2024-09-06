import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import Login from "./views/login/Login";
import Register from "./views/register/Register";
import AddTransaction from "./views/addTransaction/AddTransaction";
import LandingPage from "./views/landing-page/LandingPage";
import Dashboard from "./views/dashboard/Dashboard";
import TransactionDetail from "./views/dashboard/transaction-detail/TransactionDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/add-transaction"
            element={
              <ProtectedRoute>
                <AddTransaction />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/transaction-detail/:id"
            element={
              <ProtectedRoute>
                <TransactionDetail />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
