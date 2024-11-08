export default function DetailUmkm() {
  return (
    <>
      <br />
      <br />
      <br />

      <section className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 relative">
            <img
              src="https://images.unsplash.com/photo-1613463639651-4aca3f3dd83e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Men Fashion Banner"
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <h2 className="text-4xl font-bold text-white">Men Fashion</h2>
              <p className="mt-2 text-lg text-white">
                Find the best fashion trends for men
              </p>
              <a
                href="#"
                className="border border-white text-white font-bold py-2 px-4 mt-4 hover:bg-indigo-600 hover:text-white transition duration-300"
              >
                Shop Now
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <div
              className="relative text-white p-6 text-center rounded-lg"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1613463639651-4aca3f3dd83e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold">Save 20%</h3>
                <p className="mt-2">Special Offer</p>
                <a
                  href="#"
                  className="bg-indigo-600 text-white py-2 px-4 mt-4 inline-block hover:bg-indigo-700"
                >
                  Shop Now
                </a>
              </div>
            </div>
            <div
              className="relative text-white p-6 text-center rounded-lg"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1613463639651-4aca3f3dd83e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold">Save 20%</h3>
                <p className="mt-2">Special Offer</p>
                <a
                  href="#"
                  className="bg-indigo-600 text-white py-2 px-4 mt-4 inline-block hover:bg-indigo-700"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-gray-100 p-6 rounded shadow flex items-center space-x-2 hover:bg-gray-200 hover:shadow-lg transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-8 w-8 text-indigo-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />{" "}
            </svg>
            <h4 className="font-semibold">Quality Product</h4>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow flex items-center space-x-2 hover:bg-gray-200 hover:shadow-lg transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-8 w-8 text-indigo-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
            <h4 className="font-semibold">Free Shipping</h4>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow flex items-center space-x-2 hover:bg-gray-200 hover:shadow-lg transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-8 w-8 text-indigo-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>

            <h4 className="font-semibold">14-Day Return</h4>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow flex items-center space-x-2 hover:bg-gray-200 hover:shadow-lg transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-8 w-8 text-indigo-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>

            <h4 className="font-semibold">24/7 Support</h4>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-4/5 mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300">
            <div className="relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1613463639651-4aca3f3dd83e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-52 object-cover transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                <button className="bg-indigo-600 py-2 px-4 font-bold text-white rounded transition hover:bg-indigo-700">
                  View details →
                </button>
              </div>
            </div>
            <div className="p-4">
              <p className="text-lg font-bold mb-1">Josu Gembira</p>
              <p className="text-gray-500 text-sm">Babeh</p>
            </div>
            <div className="flex justify-between px-4 pb-4 text-gray-500"></div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300">
            <div className="relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1613463639651-4aca3f3dd83e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-52 object-cover transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                <button className="bg-indigo-600 py-2 px-4 font-bold text-white rounded transition hover:bg-indigo-700">
                  View details →
                </button>
              </div>
            </div>
            <div className="p-4">
              <p className="text-lg font-bold mb-1">I'm Back care</p>
              <p className="text-gray-500 text-sm">Pa Yadi</p>
            </div>
            <div className="flex justify-between px-4 pb-4 text-gray-500"></div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300">
            <div className="relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1613463639651-4aca3f3dd83e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-52 object-cover transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                <button className="bg-indigo-600 py-2 px-4 font-bold text-white rounded transition hover:bg-indigo-700">
                  View details →
                </button>
              </div>
            </div>
            <div className="p-4">
              <p className="text-lg font-bold mb-1">Spruce Rapid</p>
              <p className="text-gray-500 text-sm">Spruce</p>
            </div>
            <div className="flex justify-between px-4 pb-4 text-gray-500"></div>
          </div>
        </div>
      </section>
    </>
  );
}
