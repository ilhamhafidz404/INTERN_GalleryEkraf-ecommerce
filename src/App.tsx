// import { Route, Routes } from "react-router-dom";
import Navbar from "alope-ui/Navbar";
import Header from "alope-ui/Header";
import Footer from "alope-ui/Footer";
import Card from "alope-ui/Card";
import { Button } from "alope-ui/Button";

// views

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

      <main className="px-10 my-20">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold">Produk</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            tempora explicabo cupiditate rem animi solut
          </p>
        </div>
        <section className="grid grid-cols-4 gap-5">
          <Card
            image="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Sepatu Bagus banget"
            subtitle="Rp 20.000"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
        laboriosam."
            button={<Button text={"Detail"} color="primary" fullWidth />}
            ribbon="Fesyen"
          />
          <Card
            image="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Sepatu Bagus banget"
            subtitle="Rp 20.000"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
        laboriosam."
            button={<Button text={"Detail"} color="primary" fullWidth />}
            ribbon="Fesyen"
          />
          <Card
            image="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Sepatu Bagus banget"
            subtitle="Rp 20.000"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
        laboriosam."
            button={<Button text={"Detail"} color="primary" fullWidth />}
            ribbon="Fesyen"
          />
          <Card
            image="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Sepatu Bagus banget"
            subtitle="Rp 20.000"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
        laboriosam."
            button={<Button text={"Detail"} color="primary" fullWidth />}
            ribbon="Fesyen"
          />
          <Card
            image="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Sepatu Bagus banget"
            subtitle="Rp 20.000"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
        laboriosam."
            button={<Button text={"Detail"} color="primary" fullWidth />}
            ribbon="Fesyen"
          />
          <Card
            image="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Sepatu Bagus banget"
            subtitle="Rp 20.000"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
        laboriosam."
            button={<Button text={"Detail"} color="primary" fullWidth />}
            ribbon="Fesyen"
          />
          <Card
            image="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Sepatu Bagus banget"
            subtitle="Rp 20.000"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
        laboriosam."
            button={<Button text={"Detail"} color="primary" fullWidth />}
            ribbon="Fesyen"
          />
          <Card
            image="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Sepatu Bagus banget"
            subtitle="Rp 20.000"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
        laboriosam."
            button={<Button text={"Detail"} color="primary" fullWidth />}
            ribbon="Fesyen"
          />
        </section>
      </main>

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
