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
              className="w-full mb-4"
              height="600"
              src="https://storage.googleapis.com/a1aa/image/ipCvEUfdPgUmcixLrfnUa8ljTOXnMh9dI0MmWosu8Qe4FFUnA.jpg"
              width="600"
            />
            <div className="flex space-x-2">
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
                <button className="border border-gray-300 px-4 py-2">S</button>
                <button className="border border-gray-300 px-4 py-2">M</button>
                <button className="border border-gray-300 px-4 py-2">L</button>
                <button className="border border-gray-300 px-4 py-2">XL</button>
                <button className="border border-gray-300 px-4 py-2">
                  XXL
                </button>
              </div>
            </div>
            <div className="flex space-x-4 mb-4">
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
                <i className="fas fa-heart"> </i>
                WISHLIST
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                ADD TO CART
              </button>
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
            Similar Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 shadow-md">
              <img
                alt="Navy Blue Dots Basic Top"
                className="w-full mb-2"
                height="300"
                src="https://storage.googleapis.com/a1aa/image/ipCvEUfdPgUmcixLrfnUa8ljTOXnMh9dI0MmWosu8Qe4FFUnA.jpg"
                width="300"
              />
              <h3 className="text-gray-700">Navy Blue Dots Basic Top</h3>
              <p className="text-green-600">$39</p>
            </div>
            <div className="bg-white p-4 shadow-md">
              <img
                alt="Minimal Black Top"
                className="w-full mb-2"
                height="300"
                src="https://storage.googleapis.com/a1aa/image/ipCvEUfdPgUmcixLrfnUa8ljTOXnMh9dI0MmWosu8Qe4FFUnA.jpg"
                width="300"
              />
              <h3 className="text-gray-700">Minimal Black Top</h3>
              <p className="text-green-600">$55</p>
            </div>
            <div className="bg-white p-4 shadow-md">
              <img
                alt="Blue Nautical Top"
                className="w-full mb-2"
                height="300"
                src="https://storage.googleapis.com/a1aa/image/ipCvEUfdPgUmcixLrfnUa8ljTOXnMh9dI0MmWosu8Qe4FFUnA.jpg"
                width="300"
              />
              <h3 className="text-gray-700">Blue Nautical Top</h3>
              <p className="text-green-600">$55</p>
            </div>
            <div className="bg-white p-4 shadow-md">
              <img
                alt="Navy Blue Checked Top"
                className="w-full mb-2"
                height="300"
                src="https://storage.googleapis.com/a1aa/image/ipCvEUfdPgUmcixLrfnUa8ljTOXnMh9dI0MmWosu8Qe4FFUnA.jpg"
                width="300"
              />
              <h3 className="text-gray-700">Navy Blue Checked Top</h3>
              <p className="text-green-600">$55</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
