export default function Home(){
  return (
    <div className="w-[80vw] mx-auto grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
      {/* Card 1 */}
      <div className="bg-white border border-black rounded-lg shadow p-4">
        <div className="h-48 bg-gray-300 rounded-md mb-4"></div>
        <h3 className="text-lg font-semibold">Product 1</h3>
        <p className="text-gray-600">20Rs.</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Buy Now
        </button>
      </div>

      {/* Card 2 */}
      <div className="bg-white border border-black rounded-lg shadow p-4">
        <div className="h-48 bg-gray-300 rounded-md mb-4"></div>
        <h3 className="text-lg font-semibold">Product 2</h3>
        <p className="text-gray-600">30Rs.</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Buy Now
        </button>
      </div>

      {/* Card 3 */}
      <div className="bg-white border border-black rounded-lg shadow p-4">
        <div className="h-48 bg-gray-300 rounded-md mb-4"></div>
        <h3 className="text-lg font-semibold">Product 3</h3>
        <p className="text-gray-600">40Rs.</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Buy Now
        </button>
      </div>
    </div>
  );
};
