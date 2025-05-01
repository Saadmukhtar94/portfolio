import React from "react";

const Footer = () => {
  return (
    <footer className="text-white" id='footer'>
      <div className="container mx-auto text-center d-flex justify-content-around">
        <h4 className="text-lg font-semibold">Saad Mukhtar</h4>
        
        <p className="pt-1">© {new Date().getFullYear()} Saad Mukhtar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
