

import GoogleLogin from "./components/googleLogin";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold text-center">
          Google OAuth Testing Template 🧪
        </h1>

        <div className="flex justify-center">
          <GoogleLogin />
        </div>

        <div className="text-center space-y-2">
          <p className="text-lg font-semibold">Developer Details 👩‍💻👨‍💻</p>
          <p>Name: Sandip Sapkota</p>
          <p>Email: sandipsapkota@duck.com</p>
          <p>GitHub: @dev-sandip</p>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>🔒 Secure OAuth Testing</p>
          <p>🚀 Fast and Easy Integration</p>
          <p>🛠 Customizable Implementation</p>
        </div>
      </div>
    </div>
  );
}

export default App;
