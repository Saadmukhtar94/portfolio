"use client"
import React from 'react';
import Link from 'next/link';
export default function Page () {
  return (
      <div className="cardsocial bg-primary" id="socialIcons-container">
        <span><i className="fa-solid fa-link fs-6 mx-1"></i>Social</span>
        <div className="d-flex gap-2 ">
         <Link href="www.linkedin.com/in/saad-mukhtar-a218b6363" className="list-unstyled social-link" target='_blank'><i className="fa-brands fa-linkedin fs-3"></i></Link>
          <Link href="https://www.facebook.com/saad.m.7771/" className="list-unstyled social-link" target='_blank'><i className="fa-brands fa-square-facebook fs-3 "></i></Link>
         
         {/* <Link href="/" className="list-unstyled social-link"><i className="fa-brands fa-square-instagram fs-3 "></i></Link> */}
         
         <Link href="https://github.com/Saadmukhtar94" className="list-unstyled social-link" target='_blank'><i className="fa-brands fa-square-github fs-3 "></i></Link>     

         
        </div>
        
      </div>
  );
}


