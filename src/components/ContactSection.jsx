import React, { useState } from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function ContactSection() {
  // State to handle the form submission result
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Fetch to FormSubmit API endpoint
    fetch("https://formsubmit.co/yogeshshinde3624@gmail.com.com", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true); // Show success message
          form.reset(); // Reset the form
        } else {
          alert("Something went wrong, please try again.");
        }
      })
      .catch(() => {
        alert("Error submitting form");
      });
  };

  return (
    <div className="bg-[#edf2f4] py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-center text-sm uppercase tracking-wide font-light text-gray-600 mb-2">
          Get In Touch
        </h1>
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          Contact Me
        </h2>

        <div className="flex justify-center gap-6 mb-8">
          {/* Your social media links */}
        </div>

        <div className="max-w-md mx-auto bg-white rounded-lg border border-gray-300 shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-6 text-center">
            Send a Message
          </h3>
          {/* Display success message after form submission */}
          {submitted ? (
            <div className="text-green-500 text-center">
              <h4>Thank you! I will contact you soon.</h4>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Hidden input to prevent spam */}
              <input
                type="hidden"
                name="_next"
                value="https://yourwebsite.com/thank-you"
              />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
                  required></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white rounded-lg p-3 text-sm font-medium hover:bg-gray-900 transition">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
