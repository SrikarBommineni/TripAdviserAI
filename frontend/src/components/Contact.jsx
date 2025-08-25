import React, {useState} from "react";
import Navbar from "./Navbar";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {


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
            const response = await fetch("http://127.0.0.1:8000/api/contact/", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log("Response:", data);

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("success");
            }
        } catch (error) {
            console.error("Error:", error);
        }
      };

    return(
        <>
        <Navbar />
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
        </>
    )
}

export default Contact;