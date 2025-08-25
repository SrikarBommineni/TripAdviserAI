import React from "react";
import Navbar from "./Navbar";

const About = () => {

    const features=[
    {text:"Day-Wise Travel Plans", img:"day-wise.png"},
    {text:"AI-Powered Itineraries", img:"ai-icon.png"},
    {text:"Smart Destination Suggestions", img:"smart-icon.png"},
    {text:"Hotel  Recommendations", img:"hotel-icon.png"},
    {text:"Save & Download Options", img:"download-icon.png"},
    {text:"Expense Tracker & Saver", img:"expense-icon.png"} 

  ]
    return(
        <>
        <Navbar />
        <div className=" flex justify-center"id="about">
            <h1 className="text-white text-[35px] mt-15 font-montserrat ">Introducing Trip Advisor</h1>
        </div>

            <div className="flex flex-row justify-around mt-16">
              <div className="w-[600px] h-[400px] bg-[#131313] rounded-md" >
                <img src="/double_qoutes_image.png" className="px-[20px] py-[10px] w-[80px] h-[60px] mt-5"/>
                <p className="px-6 py-4 text-[#6c6c6c] text-justify font-montserrat">We are a modern travel-tech platform built to redefine the way people plan their trips. By combining smart AI technology with user-friendly tools, we deliver personalized, AI-powered itineraries designed around your interests, budget, and travel style. From choosing your destination to curating day-wise plans, hotel stays, restaurants, and activity recommendations we simplify the entire travel planning experience. Whether you're a solo traveler, couple, family, or business explorer, our platform ensures your journey is unforgettable, hassle-free, and tailored just for you.</p>
              </div>
            
              <div 
                className="w-[600px] h-[400px] rounded-md bg-cover bg-center" 
                style={{ backgroundImage: "url('/trip_illustration.jpg')" }}>
              </div>
              </div>

            <div className="flex flex-row justify-around align-center mt-20">
              <div className = "w-[70%] flex justify-around">
                <h1 className="text-5xl font-bold leading-snug bg-gradient-to-tr from-black via-white to-black bg-clip-text text-transparent">
                  Your AI <br />
                  Power Trip Adviser
                </h1>
              </div>

              <div className="flex flex-wrap gap-[20px] mt-[20px] justify-around align-center">
                {features.map((feature, index) => (
                <div
                    key={index}
                    className="relative w-[230px] h-[65px] rounded-md p-[1px] 
                              bg-gradient-to-r from-[#919191] via-[#616161] to-[#919191]"
                  >
                    <div className="w-full h-full bg-[#131313] rounded-md flex items-center justify-center gap-6 px-4 py-2 font-montserrat">
                      <h1 className="text-white/70">{feature.text}</h1>
                      {feature.img && (
                        <img
                          src={`/${feature.img}`}
                          alt={feature.text}
                          className="w-6 h-6"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
        </>
    )
}

export default About;