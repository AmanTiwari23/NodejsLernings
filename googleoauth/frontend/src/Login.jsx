export default function Login() {
  const loginWithGoogle = () => {
    window.location.href = "/auth/google"; // backend route
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-10 w-96 text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">
          Login With Google
        </h2>

        <button
          onClick={loginWithGoogle}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
