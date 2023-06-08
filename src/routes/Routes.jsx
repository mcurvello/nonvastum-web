import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/Home";

export default function Switch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  );
}
