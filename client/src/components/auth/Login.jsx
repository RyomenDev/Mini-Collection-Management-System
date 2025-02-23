const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col sm:flex-row ">
      {/* Site Info Section (Desktop) */}
      <div className="hidden sm:flex sm:w-1/2 bg-blue-500 justify-center items-center text-white p-10 transition-all duration-300 ease-in-out">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to MyApp</h1>
          <p className="text-lg">Sign in to get started!</p>
        </div>
      </div>

      {/* Login Options Section */}
      <div className="flex sm:w-1/2 justify-center items-center bg-white p-10 transition-all duration-300 ease-in-out">
        <div className="max-w-lg w-full">
          <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

          {/* Login Option Selector */}
          <div className="mb-6 text-center">
            <button
              className={`px-4 py-2 mx-2 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out`}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
