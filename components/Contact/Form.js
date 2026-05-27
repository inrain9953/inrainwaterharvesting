"use client";
import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      setResponseMessage("Please fill all fields.");
      return;
    }

    setLoading(true);
    setResponseMessage("");

    try {
      // Replace with your API endpoint
      const response = await fetch("/api/formsubmit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("InRain Team will get back to you soon!");

        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setResponseMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResponseMessage("Server error. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-80 mx-auto">
      {/* FORM */}
      <div className="bg-white rounded-[32px] shadow-2xl border border-slate-200 p-6 md:p-8">
        <div>
          <Image
            className="m-auto"
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
          />
        </div>
        <h3 className="text-md text-center font-bold text-gray-900 mb-3 mt-1">
          Get in Touch with Us
        </h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full rounded-xl border border-slate-300 px-5 py-2 outline-none focus:ring-2 focus:ring-sky-500 transition"
            />
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full rounded-xl border border-slate-300 px-5 py-2 outline-none focus:ring-2 focus:ring-sky-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full rounded-xl border border-slate-300 px-5 py-2 outline-none focus:ring-2 focus:ring-sky-500 transition"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full rounded-xl border border-slate-300 px-5 py-2 outline-none focus:ring-2 focus:ring-sky-500 transition resize-none"
            />
          </div>

          {/* Response Message */}
          {responseMessage && (
            <p className="text-xs text-center text-green-600">
              {responseMessage}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-sky-600 hover:bg-sky-700 text-white rounded-xl py-2 font-semibold transition flex justify-center items-center gap-2 disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
