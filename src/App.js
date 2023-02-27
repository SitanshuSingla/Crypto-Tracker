import Home from "./Pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import SingleCoin from "./Components/SingleCoin/SingleCoin";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<SingleCoin />} path="/single"></Route>
          <Route element={<SingleCoin />} path="/single/:id"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
