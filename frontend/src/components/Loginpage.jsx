// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://127.0.0.1:8000/auth/api/login/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage("✅ Login successful! Welcome " + data.user);

//         // Save token or user info if needed
//         if (data.token) {
//           localStorage.setItem("token", data.token);
//         }

//         // Redirect after short delay (or instantly)
//         setTimeout(() => {
//           navigate("/tripplanner");
//         }, 1000);
//       } else {
//         setMessage("❌ " + (data.error || "Invalid credentials"));
//       }
//     } catch (error) {
//       setMessage("⚠️ Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 p-4">
//         <div className="w-full max-w-md bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl p-8 relative">
//           <h2 className="text-center text-2xl font-bold text-white mb-2">
//             Let's get you started
//           </h2>

//           {/* Form */}
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />

//             <button
//               type="submit"
//               className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition duration-300"
//             >
//               Next
//             </button>
//           </form>

//           {/* Show login status */}
//           {message && (
//             <p className="text-center mt-4 text-gray-200">{message}</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }


import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "./AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Login successful! Welcome " + data.user);

        // Update global auth state
        if (data.token) login(data.token, data.user);

        // Navigate to trip planner
        setTimeout(() => {
          navigate("/tripplanner");
        }, 1000);
      } else {
        setMessage("❌ " + (data.error || "Invalid credentials"));
      }
    } catch (error) {
      setMessage("⚠️ Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 p-4">
        <div className="w-full max-w-md bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl p-8 relative">
          <h2 className="text-center text-2xl font-bold text-white mb-2">
            Let's get you started
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition duration-300"
            >
              Next
            </button>
          </form>

          {message && <p className="text-center mt-4 text-gray-200">{message}</p>}
        </div>
      </div>
    </>
  );
}
