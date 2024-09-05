import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./views/Dashboard/Dashboard";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import AddTransaction from "./views/addTransaction/AddTransaction";
import LandingPage from "./views/landing-page/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {" "}
          <Route path="/" Component={LandingPage} />
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/dashboard/add-transaction" Component={AddTransaction} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
