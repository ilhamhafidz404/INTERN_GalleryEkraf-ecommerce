import { Route, Routes } from "react-router-dom";

import DetailProduct from "./views/Detail";
import Home from "./views/Home";
import DetailUmkm from "./views/Umkm";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<DetailProduct />} />
        <Route path="/umkm" element={<DetailUmkm />} />
      </Routes>
    </>
  );
}
