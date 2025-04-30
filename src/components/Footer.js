// src/components/Footer.jsx
import React from "react";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark bg-opacity-75 text-white  mt-2">
      <div className="container mx-auto text-center d-flex justify-content-around">
        <h4 className="text-lg font-semibold mb-2">Saad Mukhtar</h4>
        
        <p className="pt-2">© {new Date().getFullYear()} Saad Mukhtar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
