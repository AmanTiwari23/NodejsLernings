import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/auth/user", { withCredentials: true }).then((res) => {
      setUser(res.data);
    });
  }, []);

  const logout = () => {
    window.location.href = "/auth/logout";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white shadow-lg rounded-lg p-10 w-96 text-center">
        {user ? (
          <>
          <span className="inline-block w-full h-auto"> <img
              src={String(user?.profilePic)}
              alt="Profile"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            /></span>
           

            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {user.name}
            </h2>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {user.email}
            </h2>

            <button
              onClick={logout}
              className="w-full bg-gray-700 hover:bg-gray-800 text-white py-2 rounded-lg transition"
            >
              Logout
            </button>
          </>
        ) : (
          <p className="text-gray-500">Loading user...</p>
        )}
      </div>
    </div>
  );
}
