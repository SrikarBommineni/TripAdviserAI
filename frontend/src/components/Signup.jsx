// import React from "react";
// import Navbar from "../components/Navbar.jsx"

// export default function SignupPage() {
//   return (
//     <>
//     <Navbar/>
//     <div className="min-h-screen flex" id="#signup">
//       {/* Left Side - Image + Tagline */}
//       <div className="hidden md:flex w-1/2 bg-gradient-to-b from-blue-900 to-black relative items-center justify-center">
//         <div className="text-center px-8">
//           <h1 className="text-4xl font-extrabold text-white mb-4 leading-snug">
//             Start Your <span className="text-blue-400">Journey</span> Today
//           </h1>
//           <p className="text-gray-300 text-lg">
//             Discover personalized, AI-powered itineraries and travel smarter than ever before.
//           </p>
//         </div>
//       </div>

//       {/* Right Side - Signup Form */}
//       <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50 dark:bg-gray-900 pt-20">
//         <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
//           <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
//             Create Your Account
//           </h2>
//           <p className="text-gray-500 dark:text-gray-400 text-center mb-6">
//             Join our travel community and plan your perfect trip.
//           </p>

//           {/* Social Buttons */}
//           <div className="flex flex-col space-y-3 mb-6">
//             <button className="flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
//               <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5"/>
//               Sign up with Google
//             </button>
//             <button className="flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
//               <img src="https://www.svgrepo.com/show/448234/facebook.svg" alt="Facebook" className="w-5 h-5"/>
//               Sign up with Facebook
//             </button>
//             <button className="flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
//               <img src="https://www.svgrepo.com/show/448228/apple.svg" alt="Apple" className="w-5 h-5"/>
//               Sign up with Apple
//             </button>
//             <button className="flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
//               <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="w-5 h-5"/>
//               Sign up with GitHub
//             </button>
//           </div>

//           {/* Divider */}
//           <div className="flex items-center gap-2 mb-6">
//             <hr className="flex-grow border-gray-300 dark:border-gray-600"/>
//             <span className="text-gray-500 dark:text-gray-400 text-sm">or</span>
//             <hr className="flex-grow border-gray-300 dark:border-gray-600"/>
//           </div>

//           {/* Form Fields */}
//           <form className="space-y-4">
//             <input 
//               type="text" 
//               placeholder="Full Name" 
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//               required 
//             />
//             <input 
//               type="email" 
//               placeholder="Email Address" 
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//               required 
//             />
//             <input 
//               type="password" 
//               placeholder="Password" 
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//               required 
//             />
//             <input 
//               type="password" 
//               placeholder="Confirm Password" 
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//               required 
//             />

//             {/* Terms Checkbox */}
//             <div className="flex items-center gap-2">
//               <input type="checkbox" required />
//               <p className="text-sm text-gray-500 dark:text-gray-400">
//                 I agree to the <a href="#" className="text-blue-500">Terms & Privacy</a>.
//               </p>
//             </div>

//             <button 
//               type="submit" 
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg shadow-md transition duration-300"
//             >
//               Sign Up
//             </button>
//           </form>

//           {/* Already have account */}
//           <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
//             Already have an account?{" "}
//             <a href="/login" className="text-blue-500 font-medium">Sign in</a>
//           </p>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }


import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.Password !== formData.ConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/api/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: formData.Name,
          Email: formData.Email,
          Password: formData.Password,
        }),
      });

      const data = await response.json();
      console.log("Server Response:", data);

      if (response.ok) {
        alert("Signup successful!");
      } else {
        alert("Signup failed: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex" id="#signup">
        {/* Left Side - Image + Tagline */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-b from-blue-900 to-black relative items-center justify-center">
          <div className="text-center px-8">
            <h1 className="text-4xl font-extrabold text-white mb-4 leading-snug">
              Start Your <span className="text-blue-400">Journey</span> Today
            </h1>
            <p className="text-gray-300 text-lg">
              Discover personalized, AI-powered itineraries and travel smarter
              than ever before.
            </p>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50 dark:bg-gray-900 pt-20">
          <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
              Create Your Account
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-6">
              Join our travel community and plan your perfect trip.
            </p>

            {/* Form Fields */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="Name"
                placeholder="Full Name"
                value={formData.Name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
              <input
                type="email"
                name="Email"
                placeholder="Email Address"
                value={formData.Email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
              <input
                type="password"
                name="Password"
                placeholder="Password"
                value={formData.Password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
              <input
                type="password"
                name="ConfirmPassword"
                placeholder="Confirm Password"
                value={formData.ConfirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />

              <div className="flex items-center gap-2">
                <input type="checkbox" required />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  I agree to the{" "}
                  <a href="#" className="text-blue-500">
                    Terms & Privacy
                  </a>
                  .
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg shadow-md transition duration-300"
              >
                Sign Up
              </button>
            </form>

            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 font-medium">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
