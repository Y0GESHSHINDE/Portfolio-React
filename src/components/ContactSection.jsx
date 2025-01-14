import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function ContactSection() {
  return (
    <div className="bg-[#edf2f4]  py-12 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <h1 className="text-center text-sm uppercase tracking-wide font-light text-gray-600 mb-2">
          Get In Touch
        </h1>
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          Contact Me
        </h2>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 text-2xl hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 text-2xl hover:scale-110 transition-transform"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 text-2xl hover:scale-110 transition-transform"
          >
            <FaInstagram />
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 text-2xl hover:scale-110 transition-transform"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://leetcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 text-2xl hover:scale-110 transition-transform"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 text-2xl hover:scale-110 transition-transform"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-md mx-auto bg-white rounded-lg border border-gray-300 shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-6 text-center">
            Send a Message
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white rounded-lg p-3 text-sm font-medium hover:bg-gray-900 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
