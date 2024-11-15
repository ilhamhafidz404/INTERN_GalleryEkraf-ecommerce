import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import Header from "alope-ui/Header";
import Card from "alope-ui/Card";
import Select from "alope-ui/Select";
import { Button } from "alope-ui/Button";
import { CustomModal } from "alope-ui/Modal";

// data
import products from "./../data/products.json";
import subsectors from "./../data/subsectors.json";

// sections
import HomeUMKM from "../sections/HomeUMKM";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const [totalSubsectorRendered, setTotalSubsectorRendered] = useState(8);

  return (
    <>
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

      <main className="my-20">
        {/* <section>
          <div className="md:px-10 px-3">
            <h2 className="text-3xl font-semibold">17 Subsektor</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              tempora explicabo cupiditate rem animi solut
            </p>
          </div>
          <div className="md:px-10 px-3 py-10 grid md:grid-cols-4 grid-cols-1 gap-5 mt-10">
            {subsectors.slice(0, totalSubsectorRendered).map((subsector) => (
              <Card
                title={subsector.name}
                subtitle="20 Pelaku"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                    <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                  </svg>
                }
                description="Fashion adalah gaya berpakaian yang populer pada waktu, tempat, dan konteks tertentu"
              />
            ))}

            <div className="md:col-span-4">
              {totalSubsectorRendered == 8 ? (
                <span onClick={() => setTotalSubsectorRendered(17)}>
                  <Button
                    color="primary"
                    text="Read More"
                    addedClass="mx-auto mt-10"
                  />
                </span>
              ) : (
                <span onClick={() => setTotalSubsectorRendered(8)}>
                  <Button
                    color="primary"
                    text="Read Less"
                    addedClass="mx-auto mt-10"
                  />
                </span>
              )}
            </div>
          </div>
        </section> */}

        <section className="md:px-10 px-3 mb-10">
          <div className="flex md:flex-row flex-col md:items-center items-start justify-between mt-20 mb-10">
            <div>
              <h2 className="text-3xl font-semibold">Produk</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia tempora explicabo cupiditate rem animi solut
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
          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-5 gap-2">
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
                  button={
                    <Button
                      text={"Detail"}
                      color="primary"
                      fullWidth
                      to="detail"
                    />
                  }
                  ribbon={product.category}
                  forceSameHeight
                />
              ))
            )}
          </div>
        </section>

        <HomeUMKM />

        {/* <div className="container mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Statistics</h2>
          </div>
          <div className="flex justify-center space-x-12 mb-16">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">17</p>
              <p className="text-lg">SUBSEKTOR</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">17</p>
              <p className="text-lg">KECAMATAN</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">30++</p>
              <p className="text-lg">ANGGOTA</p>
            </div>
          </div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Contact us</h2>
          </div>
          <div className="flex justify-center space-x-8">
            <Card
              title="Email"
              subtitle=""
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              }
              description="galerryekrafkng@co.id"
              fullWidth
            />
            <Card
              title="No Handphone"
              subtitle=""
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
              }
              description="08762536234632"
              fullWidth
            />
            <Card
              title="Alamat"
              subtitle=""
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
              }
              description="Jln. Siliwangi"
              fullWidth
            />
          </div>
        </div> */}
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
    </>
  );
}
