import React from "react";
import Card from "alope-ui/Card";
import { Button } from "alope-ui/Button";

export default function DetailProduct() {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <nav className="text-sm text-gray-600 mb-4">
          <a className="hover:underline" href="#">
            {" "}
            Home{" "}
          </a>
          &gt;
          <a className="hover:underline" href="#">
            {" "}
            Tops{" "}
          </a>
          &gt; Light Gray Top
        </nav>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img
              alt="Light Gray Top for Women"
              className="md:px-10 px-3"
              height="600"
              src="https://storage.googleapis.com/a1aa/image/ipCvEUfdPgUmcixLrfnUa8ljTOXnMh9dI0MmWosu8Qe4FFUnA.jpg"
              width="600"
            />
            <div className="flex space-x-2 md:px-10 px-3">
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
              <img
                alt="Product thumbnail 4"
                className="w-20 h-20"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/ipCvEUfdPgUmcixLrfnUa8ljTOXnMh9dI0MmWosu8Qe4FFUnA.jpg"
                width="100"
              />
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h2 className="text-sm text-gray-500 uppercase mb-2">
              Minimal Women Collection
            </h2>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Light Gray Top for Women
            </h1>
            <div className="text-xl text-gray-900 mb-4">
              <span className="line-through text-gray-500"> $50.00 </span>
              <span className="ml-2"> $40 </span>
            </div>
            <div className="mb-4">
              <span className="text-sm text-gray-500"> SELECT SIZE </span>
              <div className="flex space-x-2 mt-2">
                <Button text="S" color="primary" gradient />
                <Button text="M" color="primary" gradient />
                <Button text="L" color="primary" gradient />
                <Button text="XL" color="primary" gradient />
                <Button text="XXL" color="primary" gradient />
              </div>
            </div>
            <div className="flex space-x-4 mb-4">
              <Button text="Wishlist" color="secondary" />
              <Button text="Beli Produk" color="success" />
            </div>
            <div className="mb-4">
              <h3 className="text-sm text-gray-500 uppercase mb-2">
                Product Details
              </h3>
              <p className="text-gray-700">
                Light Gray solid Top, has a boat neck, 3/4 sleeves
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-sm text-gray-500 uppercase mb-2">
                Material &amp; Care
              </h3>
              <p className="text-gray-700">Cotton</p>
              <p className="text-gray-700">Machine-wash</p>
            </div>
            <div className="mb-4">
              <h3 className="text-sm text-gray-500 uppercase mb-2">Sold By</h3>
              <p className="text-teal-600">Wind Store, Stillwater</p>
              <p className="text-gray-700">Product Code: 12345678</p>
              <p className="text-gray-700">12 Months Manufacturer Warranty</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Produk Serupa
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
