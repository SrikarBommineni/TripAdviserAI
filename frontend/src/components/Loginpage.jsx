// // import Navbar from "../components/Navbar"

// // export default function LoginPage() {
// //   return (
// //     <>
// //     <Navbar/>
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 p-4">
// //       <div className="w-full max-w-md bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl p-8 relative">
// //         {/* User Icon */}
// //         <div className="flex justify-center mb-6">
// //           <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl">
// //             👤
// //           </div>
// //         </div>

// //         {/* Header */}
// //         <h2 className="text-center text-2xl font-bold text-white mb-2">
// //           Let's get you started
// //         </h2>
// //         <p className="text-center text-gray-300 text-sm mb-6">
// //           Trade over 2,100 cryptocurrencies safely, quickly, and easily
// //         </p>

// //         {/* Form */}
// //         <form className="space-y-4">
// //           <input
// //             type="text"
// //             placeholder="Enter your username or email"
// //             className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             required
// //           />
// //           <div className="relative">
// //             <input
// //               type="password"
// //               placeholder="Enter your password"
// //               className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               required
// //             />
// //             {/* Show/Hide password icon */}
// //             <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">
// //               👁️
// //             </span>
// //           </div>

// //           {/* Options */}
// //           <div className="flex items-center justify-between text-gray-300 text-sm">
// //             <label className="flex items-center gap-2">
// //               <input type="checkbox" className="accent-blue-500" />
// //               Bind IP (Security option)
// //             </label>
// //             <a href="#" className="text-blue-500 hover:underline">
// //               Forgot password?
// //             </a>
// //           </div>

// //           {/* Submit */}
// //           <button
// //             type="submit"
// //             className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition duration-300"
// //           >
// //             Next
// //           </button>
// //         </form>

// //         {/* Sign up link */}
// //         <p className="text-center text-gray-300 text-sm mt-6">
// //           Don't have an account?{" "}
// //           <a href="/signup" className="text-blue-500 font-medium hover:underline">
// //             Sign Up
// //           </a>
// //         </p>

// //         {/* Decorative Elements */}
// //         <div className="absolute -top-10 -right-10 w-24 h-24 bg-purple-500/40 rounded-full blur-3xl animate-pulse"></div>
// //         <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
// //       </div>
// //     </div>
// //     </>
// //   );
// // }


// import { useState } from "react";
// import Navbar from "../components/Navbar";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

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
//         // Optionally redirect: window.location.href = "/tripplanner";
//       } else {
//         setMessage("❌ " + data.error);
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


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Login successful! Welcome " + data.user);

        // Save token or user info if needed
        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        // Redirect after short delay (or instantly)
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

          {/* Form */}
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

          {/* Show login status */}
          {message && (
            <p className="text-center mt-4 text-gray-200">{message}</p>
          )}
        </div>
      </div>
    </>
  );
}
