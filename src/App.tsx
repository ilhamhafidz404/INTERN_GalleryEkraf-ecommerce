import { Route, Routes } from "react-router-dom";

import DetailProduct from "./views/Detail";
import Home from "./views/Home";
import DetailUmkm from "./views/Umkm";
import Navbar from "alope-ui/Navbar";
import Footer from "alope-ui/Footer";

export default function App() {
  return (
    <>
      <Navbar
        logo={
          <img
            src="https://kuninganbeu.kuningankab.go.id/images/logo/KuninganBeu_Putih.png"
            className="w-[50px]"
          />
        }
        title={"EKRAF KUNINGAN"}
        links={[
          {
            placeholder: "Home",
            to: "/",
          },
          {
            placeholder: "About",
            to: "/about",
          },
          {
            placeholder: "Product",
            to: "/product",
          },
        ]}
        stickyTop={true}
        backDropBlur
        withSearchBar
        changeTextColorAfterScroll={500}
        // searchItems={products.slice(0, 3).map((product) =>  )}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<DetailProduct />} />
        <Route path="/umkm" element={<DetailUmkm />} />
      </Routes>

      <Footer
        imgUrlLogo="https://kuninganbeu.kuningankab.go.id/images/logo/KuninganBeu_Putih.png"
        text="Connect, Collaboration, Commerce"
        bottomText="Copyright by Ekraf Kuningan, since &copy; 2024"
        links={[
          {
            to: "",
            placeholder: <i className="fa-brands fa-instagram text-xl"></i>,
          },
          {
            to: "",
            placeholder: <i className="fa-brands fa-tiktok text-xl"></i>,
          },
          {
            to: "",
            placeholder: <i className="fa-brands fa-youtube text-xl"></i>,
          },
        ]}
      />
    </>
  );
}
