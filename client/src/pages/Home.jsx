const Home = () => {
  return (
    <div className=" bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center p-6 bg-white shadow-lg rounded-lg">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Your App
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          This is your home page. Start building something amazing!
        </p>

        {/* Call to Action */}
        <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-300">
            Get Started
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 focus:ring-2 focus:ring-gray-300">
            Learn More
          </button>
        </div>

        {/* Decorative Section */}
        <div className="mt-10">
          <img
            src="https://via.placeholder.com/600x300"
            alt="Placeholder"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
