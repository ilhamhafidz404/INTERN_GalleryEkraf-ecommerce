import Card from "alope-ui/Card";
import { Button } from "alope-ui/Button";
import { FaWhatsapp, FaInstagram, FaShoppingBag } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import { useEffect } from "react";

export default function DetailProduct() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="container mx-auto px-4 py-8 mt-20">
        <div className="flex gap-20 items-center flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img
              alt="Light Gray Top for Women"
              className="w-full max-h-[600px] object-cover rounded border p-2"
              height="600"
              src="https://storage.googleapis.com/a1aa/image/ipCvEUfdPgUmcixLrfnUa8ljTOXnMh9dI0MmWosu8Qe4FFUnA.jpg"
              width="600"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-sm text-gray-500 uppercase mb-2">KRIYA</h2>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Angklung Angklungan
            </h1>
            <p className="text-3xl font-bold text-indigo-500 mb-4">
              Rp. 60.000
            </p>
            <div className="mb-10 mt-10">
              <span className="text-sm text-gray-500">PESAN PRODUK</span>
              <div className="flex space-x-2 mt-2">
                <a
                  href="https://wa.me/YOUR_NUMBER"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button color="primary" iconLeft={<FaWhatsapp />} text={""} />
                </a>
                <a
                  href="https://www.instagram.com/YOUR_INSTAGRAM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    color="primary"
                    iconLeft={<FaInstagram />}
                    text={""}
                  />
                </a>
                <a
                  href="https://www.tokopedia.com/YOUR_TOKOPEDIA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    color="primary"
                    iconLeft={<FaShoppingBag />}
                    text={""}
                  />
                </a>
                <a
                  href="https://shopee.co.id/YOUR_SHOPEE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button color="primary" iconLeft={<SiShopee />} text={""} />
                </a>
              </div>
            </div>
            <div className="mb-10">
              <h3 className="text-sm text-gray-500 uppercase mb-2">
                Deskripsi
              </h3>
              <p className="text-gray-700">
                Light Gray solid Top, has a boat neck, 3/4 sleeves
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-sm text-gray-500 uppercase mb-2">
                Dibuat oleh
              </h3>
              <p className="text-teal-600">Ilham Hafidz, ALOPE STORE</p>
            </div>
          </div>
        </div>
        <div className="flex space-x-2 mt-4">
          <img
            alt="Product thumbnail 1"
            className="w-20 h-20"
            height="100"
            src="https://storage.googleapis.com/a1aa/image/ipCvEUfdPgUmcixLrfnUa8ljTOXnMh9dI0MmWosu8Qe4FFUnA.jpg"
            width="100"
          />
          <img
            alt="Product thumbnail 2"
            className="w-20 h-20"
            height="100"
            src="https://storage.googleapis.com/a1aa/image/ipCvEUfdPgUmcixLrfnUa8ljTOXnMh9dI0MmWosu8Qe4FFUnA.jpg"
            width="100"
          />
          <img
            alt="Product thumbnail 3"
            className="w-20 h-20"
            height="100"
            src="https://storage.googleapis.com/a1aa/image/ipCvEUfdPgUmcixLrfnUa8ljTOXnMh9dI0MmWosu8Qe4FFUnA.jpg"
            width="100"
          />
        </div>

        {/*  */}
        <hr className="my-14" />

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4 ml-5">
            Produk Serupa
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
            <Card
              image="https://storage.googleapis.com/a1aa/image/ipCvEUfdPgUmcixLrfnUa8ljTOXnMh9dI0MmWosu8Qe4FFUnA.jpg"
              title="Card Title"
              subtitle="ini subtitle"
              description="..."
              button={<Button text={"Detail"} color="primary" fullWidth />}
            />
            <Card
              image="https://storage.googleapis.com/a1aa/image/ipCvEUfdPgUmcixLrfnUa8ljTOXnMh9dI0MmWosu8Qe4FFUnA.jpg"
              title="Card Title"
              subtitle="ini subtitle"
              description="..."
              button={<Button text={"Detail"} color="primary" fullWidth />}
            />
            <Card
              image="https://storage.googleapis.com/a1aa/image/ipCvEUfdPgUmcixLrfnUa8ljTOXnMh9dI0MmWosu8Qe4FFUnA.jpg"
              title="Card Title"
              subtitle="ini subtitle"
              description="..."
              button={<Button text={"Detail"} color="primary" fullWidth />}
            />
            <Card
              image="https://storage.googleapis.com/a1aa/image/ipCvEUfdPgUmcixLrfnUa8ljTOXnMh9dI0MmWosu8Qe4FFUnA.jpg"
              title="Card Title"
              subtitle="ini subtitle"
              description="..."
              button={<Button text={"Detail"} color="primary" fullWidth />}
            />
          </div>
        </div>
      </main>
    </>
  );
}
