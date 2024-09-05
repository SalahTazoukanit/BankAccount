// import { Routes, BrowserRouter, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./views/Dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Dashboard} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
