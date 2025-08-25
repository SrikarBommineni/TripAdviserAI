import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaBriefcase } from "react-icons/fa"
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar.jsx'




function Landingpage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Replace with your API or email service
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  const features=[
    {text:"Day-Wise Travel Plans", img:"day-wise.png"},
    {text:"AI-Powered Itineraries", img:"ai-icon.png"},
    {text:"Smart Destination Suggestions", img:"smart-icon.png"},
    {text:"Hotel  Recommendations", img:"hotel-icon.png"},
    {text:"Save & Download Options", img:"download-icon.png"},
    {text:"Expense Tracker & Saver", img:"expense-icon.png"} 

  ]
  const steps = [
    {
      title: "Choose Destination",
      description: "Pick your favorite city, country, or region you wish to explore.",
    },
    {
      title: "Select Your Preferences",
      description: "Pick your favorite city, country, or region you wish to explore.",
    },
    {
      title: "Get Your AI-Powered Itinerary",
      description: "Pick your favorite city, country, or region you wish to explore.",
    },
    {
      title: "Save, Edit, or Download",
      description: "Pick your favorite city, country, or region you wish to explore.",
    },
  ];
  const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan anytime.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel your subscription at any time, and no further charges will apply.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can add custom notes or details to your invoices as needed.",
  },
  {
    question: "How does billing work?",
    answer:
      "Billing is processed monthly or annually depending on your plan. You can view invoices in your account dashboard.",
  },
];

const [openIndex, setOpenIndex] = useState(null);

const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};


  return (
    <>
      <div>

        <Navbar/>

        <main id="home">
    
        <div className="w-screen h-screen bg-[url('/mainbg_.png')] flex flex-col items-center justify-center bg-center bg-cover pt-[60px] ">
          <h1 className="text-white text-[100px] font-caveatbrush">Trip Verse AI</h1>
          <p className="text-white/70 font-montserrat text-lg">
            Your go to Trip Verse, for you By you, To you
          </p>
          <button className="mt-6 px-4 py-2 rounded-md text-white bg-transparent border border-white transition-colors duration-300 hover:bg-white hover:text-black font-montserrat">
            Get Started
          </button>
        </div>

        </main>
        <section id="about">

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

    <div className="max-w-2xl mx-auto mt-20 px-4 text-white font-montserrat">
  <h2 className="text-2xl font-bold mb-2 text-center">Frequently Asked Questions</h2>
  <p className="text-gray-400 mb-6 text-center">
    Everything you need to know about how our AI-powered travel buddy works.
  </p>

  <div className="space-y-2">
    {[
      {
        question: "What makes this travel planner different from others?",
        answer:
          "Our platform uses AI to create personalized, day-wise travel itineraries based on your preferences, budget, and time. Unlike generic planners, it learns from your inputs and gives smart suggestions."
      },
      {
        question: "How does the AI know what destinations to suggest?",
        answer:
          "We use smart recommendation algorithms and web data to suggest trending destinations, hidden gems, and experiences that match your interests. The AI adapts as you interact with it."
      },
      {
        question: "Do I need to manually search for hotels and activities?",
        answer:
          "No. The system automatically recommends hotels, restaurants, and activities near your chosen location. You can customize them if needed."
      },
      {
        question: "Can I change the trip plan after it’s generated?",
        answer:
          "Yes, absolutely! You can edit, swap, or remove suggestions, and the AI will adjust the plan in real time."
      },
      {
        question: "Is it free to use?",
        answer:
          "Yes, the basic version is free. Premium features like curated experiences, offline access, and custom branding will be available in the future."
      }
    ].map((faq, index) => {
      const isOpen = openIndex === index;
      return (
        <div
          key={index}
          className="border-b border-gray-700 overflow-hidden transition-all duration-500"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center py-4 focus:outline-none"
          >
            <span>{faq.question}</span>
            <span className="text-xl">{isOpen ? "−" : "+"}</span>
          </button>
          <div
            className="transition-all duration-500 ease-in-out overflow-hidden"
            style={{ maxHeight: isOpen ? "500px" : "0px" }}
          >
            <p className="text-gray-400 pb-4">{faq.answer}</p>
          </div>
        </div>
      );
    })}
  </div>
</div>


<div id="contact"className="w-full bg-[#121212] text-gray-200 py-20 px-4 md:px-20 font-montserrat mt-[100px] scroll-mt-[80px]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-gray-400 mb-8">
            Have questions, collaborations, or ideas to discuss? Send a message
            and I’ll get back to you as soon as possible.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-[#dddddd] text-xl" />
              <span>youremail@example.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaLinkedin className="text-[#dddddd] text-xl" />
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#1e1e1e] p-8 rounded-2xl shadow-lg ">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-[#2a2a2a] text-white focus:ring-2 focus:ring-[#38bdf8] outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-[#2a2a2a] text-white focus:ring-2 focus:ring-[#38bdf8] outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-[#2a2a2a] text-white focus:ring-2 focus:ring-[#38bdf8] outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-[#dddddd] text-black font-semibold hover:bg-[#dddddd] transition"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-500 text-sm">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm">Something went wrong. Try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>

<div className="w-full bg-[#1b1b1b] text-gray-400 py-16 px-4 md:px-20">
  <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
    
    
    <div className="flex flex-col items-center md:items-start space-y-6 md:w-1/4">
    
      <div className="flex flex-row md:flex-col gap-6 md:gap-3 text-md text-center md:text-left">
        <span className="hover:text-white cursor-pointer">Terms and Conditions</span>
        <span className="hover:text-white cursor-pointer">User Guide</span>
        <span className="hover:text-white cursor-pointer">Pricing</span>
      </div>

  
          <div className="flex space-x-6 text-white text-2xl mt-4">
        <a
          href="https://github.com/shivakrishna9381"
          className="transform transition duration-300 hover:scale-125 hover:text-gray-200"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/designerkrizz?igsh=MWtsZ2luOWltMXBxYg=="
          className="transform transition duration-300 hover:scale-125 hover:text-gray-200"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/in/shiva-krishna-2-"
          className="transform transition duration-300 hover:scale-125 hover:text-gray-200"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://shivakrishna9381.github.io/Portfolio/"
          className="transform transition duration-300 hover:scale-125 hover:text-gray-200"
          aria-label="Portfolio"
        >
          <FaBriefcase />
        </a>
      </div>
    </div>


    <div className="w-full flex justify-center px-4">
      <div className="bg-black text-white rounded-xl p-8 md:p-12 max-w-3xl text-center shadow-lg">
        <h2 className="text-2xl md:text-3xl font-caveatbrush mb-4 text-gray-100">
          “No plan? No problem.”
        </h2>
        <p className="text-gray-400 font-montserrat leading-relaxed">
          When you don’t know where to go, have no friends to guide you, 
          or no plan to start with <span className="text-white font-semibold">Trip Advisor</span> 
           becomes your travel buddy.  
          We turn your curiosity into journeys, your dreams into day-wise plans, 
          and your travels into memories you’ll never forget.  
        </p>
      </div>
    </div>


    
    <div className="flex justify-center md:w-1/4">
      <img
        src="/Business traveler rushing to the airplane.png"
        alt="Travel Illustration"
        className="w-48 h-48 object-contain"
      />
    </div>
  </div>

 
  <p className="text-gray-500 text-center mt-8 text-sm">
    © Copyright 2025. All Rights Reserved.
  </p>
</div>




        </section>
           

      </div>
    </>
  );
}

export default Landingpage;
