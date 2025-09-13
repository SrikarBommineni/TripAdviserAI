// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full h-[60px] bg-white/5 backdrop-blur-md border-b border-white/10 p-4 flex flex-row justify-around shadow-lg z-50 rounded-b-xl">
      
//       {/* Left navigation links */}
//       <ul className="flex gap-10 justify-center text-white">
//         <li className="relative group cursor-pointer">
//           <span className="transition duration-400">
//             <Link to="/">Home</Link>
//           </span>
//           <span className="absolute left-0 -bottom-[0.8px] w-0 h-[2px] bg-white transition-all duration-400 group-hover:w-full"></span>
//         </li>

//         <li className="relative group cursor-pointer">
//           <span className="transition duration-400">
//             <Link to="/about">About</Link>
//           </span>
//           <span className="absolute left-0 -bottom-[0.8px] w-0 h-[2px] bg-white transition-all duration-400 group-hover:w-full"></span>
//         </li>

//         <li className="relative group cursor-pointer">
//           <span className="transition duration-400">
//             <Link to="/workflow">Workflow</Link>
//           </span>
//           <span className="absolute left-0 -bottom-[0.8px] w-0 h-[2px] bg-white transition-all duration-400 group-hover:w-full"></span>
//         </li>

//         <li className="relative group cursor-pointer">
//           <span className="transition duration-400">
//             <a href="/contact">Contact</a>
//           </span>
//           <span className="absolute left-0 -bottom-[0.8px] w-0 h-[2px] bg-white transition-all duration-400 group-hover:w-full"></span>
//         </li>
//       </ul>

//       {/* Right action buttons */}
//       <div>
//         <ul className="flex gap-4 justify-end text-white">
//           <li className="relative group cursor-pointer font-medium">
//             <Link
//               to="/signup"
//               className="px-4 py-2 rounded-md transition duration-300 border border-none group-hover:bg-white group-hover:text-black no-underline"
//             >
//               Signup
//             </Link>
//           </li>

//           <li className="relative group cursor-pointer font-medium">
//             <Link
//               to="/login"
//               className="px-4 py-2 rounded-md transition duration-300 border border-none group-hover:bg-white group-hover:text-black no-underline"
//             >
//               Login
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-[60px] bg-white/5 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-8 z-50 rounded-b-xl shadow-lg">
      {/* Left navigation links */}
      <ul className="flex gap-10 text-white">
        {["Home", "About", "Workflow", "Contact"].map((item, index) => (
          <li key={index} className="relative group cursor-pointer">
            <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="transition duration-400">
              {item}
            </Link>
            <span className="absolute left-0 -bottom-[0.8px] w-0 h-[2px] bg-white transition-all duration-400 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Right action buttons */}
      <ul className="flex gap-4 text-white">
        <li>
          <Link
            to="/signup"
            className="px-4 py-2 rounded-md transition duration-300 border border-none group-hover:bg-white group-hover:text-black no-underline font-medium"
          >
            Signup
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="px-4 py-2 rounded-md transition duration-300 border border-none group-hover:bg-white group-hover:text-black no-underline font-medium"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
