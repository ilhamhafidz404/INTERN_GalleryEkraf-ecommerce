import { useState } from "react";
// import { Route, Routes } from "react-router-dom";

import Navbar from "alope-ui/Navbar";
import Header from "alope-ui/Header";
import Footer from "alope-ui/Footer";
import Card from "alope-ui/Card";
import Select from "alope-ui/Select";
import { Button } from "alope-ui/Button";
import { CustomModal } from "alope-ui/Modal";

import products from "./data/product.json";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [showCustomModal, setShowCustomModal] = useState(false);

  const handleSubmitFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const subsektorValue = (
      target.elements.namedItem("subsektor") as HTMLSelectElement
    ).value;

    // Membuat objek URLSearchParams untuk memodifikasi query string
    const params = new URLSearchParams(window.location.search);
    params.set("subsektor", subsektorValue); // Tambahkan atau update parameter subsektor

    // Push state ke URL tanpa reload
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);

    setShowCustomModal(false);
  };

  const navigate = useNavigate();

  const handleReset = () => {
    navigate(window.location.pathname, { replace: true });
  };
  const getSubsektorFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    const subsektorValue = params.get("subsektor");

    return subsektorValue;
  };

  const filteredProducts = !getSubsektorFromUrl()
    ? products
    : products.filter((product) => product.category === getSubsektorFromUrl());

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
      />
      <Header
        title="Connect, Collaboration, Commerce"
        bgUrls={[
          "https://images.unsplash.com/photo-1613463639651-4aca3f3dd83e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1609174112693-52fdcebffd89?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1567366865909-4841d122b8ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]}
        description="Komite Ekraf Kuningan, sebuah badan independen non-pemerintah yang dibentuk oleh kepala daerah, kini memiliki tugas strategis dalam membantu program pembangunan ekonomi daerah di sektor industri kreatif. dengan anggota Komunitas kreatif, Akademisi, Praktisi, Pengusaha dan Media."
        logoUrl="https://kuninganbeu.kuningankab.go.id/images/logo/KuninganBeu_Putih.png"
        actions={[
          {
            buttonColor: "primary",
            placeholder: "Lihat Lebih Lengkap",
            to: "/",
          },
          {
            buttonColor: "light",
            placeholder: "Lihat Produk",
            to: "/",
          },
        ]}
      />

      <main className="md:px-10 px-3 my-20">
        <div className="mb-10 flex md:flex-row flex-col md:items-center items-start justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Produk</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              tempora explicabo cupiditate rem animi solut
            </p>
          </div>
          <div className="flex gap-2 md:mt-0 mt-5">
            <span onClick={() => setShowCustomModal(true)}>
              <Button
                text="Filter"
                color="primary"
                iconLeft={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
            </span>
            {getSubsektorFromUrl() && (
              <span onClick={() => handleReset()}>
                <Button text="Reset Filter" color="error" />
              </span>
            )}
          </div>
        </div>
        <section className="grid md:grid-cols-4 grid-cols-1 md:gap-5 gap-2">
          {filteredProducts.length === 0 ? (
            <div className="col-span-4 flex items-center justify-center bg-gray-200 py-14 rounded-md border">
              <div className="text-center">
                <span className="bg-indigo-500 size-12 rounded-full inline-flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>
                </span>
                <p className="mt-3 text-xl">
                  Produk kategori {getSubsektorFromUrl()} belum tersedia...
                </p>
              </div>
            </div>
          ) : (
            filteredProducts.map((product, index) => (
              <Card
                key={index}
                image={product.image}
                title={product.title}
                subtitle={product.harga.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                })}
                description={product.description}
                button={<Button text={"Detail"} color="primary" fullWidth />}
                ribbon={product.category}
                forceSameHeight
              />
            ))
          )}
        </section>
      </main>

      <CustomModal
        isShow={showCustomModal}
        onCloseAction={() => setShowCustomModal(false)}
        body={
          <form method="GET" onSubmit={(e) => handleSubmitFilter(e)}>
            <Select
              name="subsektor"
              options={[
                {
                  name: "Kuliner",
                  value: "kuliner",
                },
                {
                  name: "Fashion",
                  value: "fashion",
                },
                {
                  name: "Kriya",
                  value: "kriya",
                },
                {
                  name: "Televisi & Radio",
                  value: "radio-tv",
                },
                {
                  name: "Penerbitan",
                  value: "penerbitan",
                },
                {
                  name: "Arsitektur",
                  value: "arsitektur",
                },
                {
                  name: "Periklanan",
                  value: "periklanan",
                },
                {
                  name: "Musik",
                  value: "musik",
                },
                {
                  name: "Fotografi",
                  value: "fotografi",
                },
                {
                  name: "Seni Pertunjukan",
                  value: "seni-pertunjukan",
                },
                {
                  name: "Desain Produk",
                  value: "product-design",
                },
                {
                  name: "Seni Rupa",
                  value: "seni-rupa",
                },
                {
                  name: "Desain Interior",
                  value: "interior",
                },
                {
                  name: "Film, Animasi, dan Video",
                  value: "film-animation-and-video",
                },
                {
                  name: "DKV",
                  value: "dkv",
                },
                {
                  name: "Aplikasi",
                  value: "aplikasi",
                },
                {
                  name: "Game",
                  value: "game",
                },
              ]}
            />
            <div className="mt-5">
              <Button text="Filter" color="primary" fullWidth />
            </div>
          </form>
        }
      />

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
      {/* <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/menu" element={<MenuView />} />
        <Route path="/location" element={<LocationView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/detail" element={<DetailView />} />
        <Route path="/reservation" element={<ReservationView />} />
      </Routes>
      <Footer /> */}
    </>
  );
}
