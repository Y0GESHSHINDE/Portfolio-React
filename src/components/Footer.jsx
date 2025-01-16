import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide mb-4 md:mb-0">
            Yogesh Shinde
          </h1>

          <nav className="flex space-x-4">
            <a
              href="about"
              className="text-gray-400 hover:text-white transition"
            >
              About
            </a>
            <a
              href="project"
              className="text-gray-400 hover:text-white transition"
            >
              Projects
            </a>
            <a
              href="skills"
              className="text-gray-400 hover:text-white transition"
            >
              Skills
            </a>
            <a
              href="contact"
              className="text-gray-400 hover:text-white transition"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="my-4 border-t border-gray-700"></div>

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://www.linkedin.com/in/y0geshshinde"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Y0GESHSHINDE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Twitter
            </a>
            <a
              href="https://leetcode.com/u/yogeshshinde3624/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LeetCode
            </a>
          </div>

          {/* Copyright */}
          <p>
            &copy; {new Date().getFullYear()} Yogesh Shinde. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
