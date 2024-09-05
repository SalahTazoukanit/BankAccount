import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./views/Dashboard/Dashboard";
import Login from "./views/login/Login";
import Register from "./views/register/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
