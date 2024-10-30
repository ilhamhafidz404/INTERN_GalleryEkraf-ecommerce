export default function DetailUmkm() {
  return (
    <>
      <body className="bg-gray-100">
        <section className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative">
              <img
                src="https://via.placeholder.com/800x400"
                alt="Men Fashion Banner"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                <h2 className="text-4xl font-bold text-white">Men Fashion</h2>
                <p className="mt-2 text-lg text-white">
                  Find the best fashion trends for men
                </p>
                <a
                  href="#"
                  className="bg-yellow-500 text-black font-bold py-2 px-4 mt-4 hover:bg-yellow-600"
                >
                  Shop Now
                </a>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="relative bg-yellow-500 text-white p-6 text-center rounded-lg">
                <h3 className="text-2xl font-bold">Save 20%</h3>
                <p className="mt-2">Special Offer</p>
                <a
                  href="#"
                  className="bg-black text-white py-2 px-4 mt-4 inline-block hover:bg-gray-900"
                >
                  Shop Now
                </a>
              </div>
              <div className="relative bg-yellow-500 text-white p-6 text-center rounded-lg">
                <h3 className="text-2xl font-bold">Save 20%</h3>
                <p className="mt-2">Special Offer</p>
                <a
                  href="#"
                  className="bg-black text-white py-2 px-4 mt-4 inline-block hover:bg-gray-900"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-8">
          <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-100 p-6 rounded shadow">
              <img
                src="https://via.placeholder.com/60"
                alt="Quality Product"
                className="mx-auto mb-2"
              />
              <h4 className="font-semibold">Quality Product</h4>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow">
              <img
                src="https://via.placeholder.com/60"
                alt="Free Shipping"
                className="mx-auto mb-2"
              />
              <h4 className="font-semibold">Free Shipping</h4>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow">
              <img
                src="https://via.placeholder.com/60"
                alt="14-Day Return"
                className="mx-auto mb-2"
              />
              <h4 className="font-semibold">14-Day Return</h4>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow">
              <img
                src="https://via.placeholder.com/60"
                alt="24/7 Support"
                className="mx-auto mb-2"
              />
              <h4 className="font-semibold">24/7 Support</h4>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-8">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-bold mb-6">Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded text-center shadow">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Category"
                  className="mx-auto mb-4"
                />
                <h4 className="font-semibold">Category Name</h4>
                <p className="text-gray-600">100 Products</p>
              </div>
              <div className="bg-white p-6 rounded text-center shadow">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Category"
                  className="mx-auto mb-4"
                />
                <h4 className="font-semibold">Category Name</h4>
                <p className="text-gray-600">100 Products</p>
              </div>
              <div className="bg-white p-6 rounded text-center shadow">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Category"
                  className="mx-auto mb-4"
                />
                <h4 className="font-semibold">Category Name</h4>
                <p className="text-gray-600">100 Products</p>
              </div>
              <div className="bg-white p-6 rounded text-center shadow">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Category"
                  className="mx-auto mb-4"
                />
                <h4 className="font-semibold">Category Name</h4>
                <p className="text-gray-600">100 Products</p>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
