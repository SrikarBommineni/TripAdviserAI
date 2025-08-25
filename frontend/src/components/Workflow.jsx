import React from "react";
import Navbar from "./Navbar";

const Workflow = () => {
    return(
        <>
        <Navbar />
            <div className="bg-[#121212] text-white py-16 px-4 md:px-20 mt-20">
                
                <div className="text-center mb-12 font-montserrat scroll-m-35" id="workflow">
                  <h2 className="text-4xl font-bold mb-2 font-montserrat">How It Works</h2>
                  <p className="text-gray-400 text-lg">Plan your perfect trip in just a few easy steps.</p>
                </div>

               
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 font-montserrat">
                  <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <h3 className="font-semibold text-xl mb-2">Choose Destination</h3>
                    <p className="text-gray-400 text-sm">Pick your favorite city, country, or region you wish to explore.</p>
                  </div>
                  <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <h3 className="font-semibold text-xl mb-2">Select Your Preferences</h3>
                    <p className="text-gray-400 text-sm">Pick your favorite city, country, or region you wish to explore.</p>
                  </div>
                  <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <h3 className="font-semibold text-xl mb-2">Get AI-Powered Itinerary</h3>
                    <p className="text-gray-400 text-sm">Pick your favorite city, country, or region you wish to explore.</p>
                  </div>
                  <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <h3 className="font-semibold text-xl mb-2">Save, Edit, or Download</h3>
                    <p className="text-gray-400 text-sm">Pick your favorite city, country, or region you wish to explore.</p>
                  </div>
                </div>

                
                <div className="bg-[#1F1F1F] p-6 rounded-lg text-center font-montserrat">
                  <p className="text-lg font-medium mb-2">Pack & Go! Enjoy your Trip </p>
                  <p className="text-gray-400 text-sm">
                    With your AI-crafted plan ready, enjoy a hassle-free, memorable journey built around your preferences.
                  </p>
                </div>
              </div>
     
            <div className="w-full bg-[#121212] text-white flex flex-col items-center justify-center py-32 px-4 mt-20">
            <h1 className="text-3xl md:text-5xl font-bold text-center font-montserrat">
                Personalized Travel Plans, Powered by You + AI.
            </h1>
            <p className="text-gray-400 text-center mt-4 max-w-2xl font-montserrat">
                Revolutionizing Travel Planning with Smart, AI-Powered Itineraries Tailored for You.
            </p>
            <button className="mt-6 px-4 py-2 rounded-md text-white bg-transparent border-1 border-white transition-colors duration-300 hover:bg-white hover:text-black font-montserrat">
                Get Started
            </button>
            </div>
        </>
    )
}

export default Workflow;