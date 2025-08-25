import Navbar from "./Navbar";
import React, { useState } from "react";

export default function ItineraryPage() {
  const [formData, setFormData] = useState({
    destination: "",
    start_date: "",
    end_date: "",
  });
  const [itinerary, setItinerary] = useState(null);
  const [rawResponse, setRawResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setItinerary(null);
    setRawResponse("");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/itinerary/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.raw_response) {
        let cleaned = data.raw_response
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .trim();

        try {
          const parsed = JSON.parse(cleaned);
          setItinerary(parsed);
        } catch (err) {
          setRawResponse(data.raw_response);
        }
      } else {
        setItinerary(data);
      }
    } catch (error) {
      console.error("Error:", error);
      setRawResponse("Failed to fetch itinerary. Try again.");
    }

    setLoading(false);
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#0D0D0D] flex flex-col items-center pt-[100px] py-10 ">
      <h1 className="text-3xl font-bold text-[#f1f1f1] mb-6">
        Travel Itinerary Planner
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-[#1f1e1e] shadow-lg rounded-2xl p-6 w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block font-medium text-[#d0d0d0]">Destination</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-lg p-2 text-[#d0d0d0]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-[#d0d0d0]">Start Date</label>
          <input
            type="date"
            name="start_date"
            value={formData.start_date}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-lg p-2 text-[#d0d0d0]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-[#d0d0d0]">End Date</label>
          <input
            type="date"
            name="end_date"
            value={formData.end_date}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-lg p-2 text-[#d0d0d0]"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Generating..." : "Generate Itinerary"}
        </button>
      </form>

    
      <div className="mt-8 w-full max-w-3xl">
        {itinerary && (
          <div className="bg-[#0D0D0D] shadow-lg rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-[#f3e8e8]">
              🗓️ {itinerary.tripName}
            </h2>
            <p className="text-[#f3e8e8] mb-4">{itinerary.tripDates}</p>

            {itinerary.itinerary &&
              itinerary.itinerary.map((day, idx) => (
                <div
                  key={idx}
                  className="mb-6 border border-gray-200 rounded-xl p-4"
                >
                  <h3 className="font-semibold text-lg text-blue-600 mb-2">
                    {day.dayName} Day {day.day}
                  </h3>
                  <ul className="space-y-2">
                    {day.activities.map((activity, i) => (
                      <li
                        key={i}
                        className="p-2 bg-gray-50 rounded-lg shadow-sm"
                      >
                        <span className="font-medium text-gray-800">
                          {activity.time}:
                        </span>{" "}
                        {activity.description}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        )}

        {rawResponse && (
          <div className="bg-yellow-50 shadow-md rounded-2xl p-6 mt-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Raw Response
            </h2>
            <pre className="whitespace-pre-wrap text-gray-700 text-sm">
              {rawResponse}
            </pre>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
